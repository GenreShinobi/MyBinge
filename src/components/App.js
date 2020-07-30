import React, { Component } from 'react';
import fire from '../config/fire';
import Header from "./Header";
import Home from "./Home";
import Folio from "./Folio";

// API provided by http://www.ombdapi.com/
const MOVIE_API_URL = process.env.REACT_APP_MOVIE_API_URL

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: fire.auth().currentUser,
            loading: true,
            errorMessage: null,
            movies: [],
            folio: false,
            folioList: [],
            database: fire.firestore()
        }
    }

    setFolio = (i) => {
        this.setState({
            folio: i
        })
    }

    getFolio = (user) => {
        const list = [];
        this.state.database.collection(user).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                list.push(doc.id);
                this.setState({
                    folioList: list
                });
            });
        });
    }


    componentDidMount() {
        fire.auth().onAuthStateChanged(userAuth => {
            this.setState({
                currentUser: userAuth
            });
            this.getFolio(userAuth.uid);
        });

        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                this.setState({
                    movies: jsonResponse.Search,
                    loading: false
                });
            });
    };

    search = searchValue => {
        this.setState({
            loading: true,
            errorMessage: null
        });

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=84a088e4`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    this.setState({
                        movies: jsonResponse.Search,
                        loading: false
                    })
                } else {
                    this.setState({
                        errorMessage: jsonResponse.Error,
                        loading: false
                    })
                }
            });
    };

    render () {
        return (
            <div className="App">
                <Header
                    user={this.state.currentUser}
                    setLoading={this.state.loading}
                    search={this.search}
                    setFolio={this.setFolio}
                    setFolioList={this.state.folioList}
                    database={this.state.database}/>

                {this.state.folio ?
                    (<Folio
                        setfolioList={this.state.folioList}
                        loading={this.state.loading}
                        errorMessage={this.state.errorMessage}
                        database={this.state.database}
                        user={this.state.currentUser}
                        folioList={this.state.folioList}
                        getFolio={this.getFolio}/>) :
                    (<Home
                        movies={this.state.movies}
                        loading={this.state.loading}
                        errorMessage={this.state.errorMessage}
                        database={this.state.database}
                        user={this.state.currentUser}
                        folioList={this.state.folioList}
                        getFolio={this.getFolio}/>)
                }
            </div>
        );
    }

}

export default App;