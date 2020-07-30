import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free-solid';

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = (props) => {
    const [details, setDetails] = useState([]);
    const poster = details.poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : details.Poster;

    var divStyle = {
        backgroundImage: 'url(' + poster + ')'
    }

    useEffect( () => {
        fetch(`https://www.omdbapi.com/?i=${props.imdbID}&apikey=84a088e4`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setDetails(jsonResponse);
                } else {
                }
            });
    }, [props.imdbID]);

    const addMovie = (userID, imdbID) => {
        var docData = {
            addedBy: userID,
            dateAdded: Date()
        };
        props.database.collection(userID.toString()).doc(imdbID.toString()).set(docData).then(() => {props.getFolio(userID)})
    }

    return (
        <div className="movie">
            <div className="poster" style={divStyle}>
                <div className="curtain"></div>
                {(props.user) ? (props.onList) ?
                    (<button
                        type="button"
                        className="button">
                        <FontAwesomeIcon
                            icon={['fas', 'check-circle']}
                            size="lg"
                            color={"#90EE90"}/>
                    </button>) :
                    (<button
                        type="button"
                        className="button">
                        <FontAwesomeIcon
                            icon={['fas','plus-circle']}
                            size="lg"
                            color={"white"}
                            onClick={ () => addMovie(props.user.uid,details.imdbID)}/>
                    </button>) : (<div> </div>)}
            </div>
            <h2>{details.Title}</h2>
            <h3>{details.Genre}</h3>
        </div>
    );
};

export default Movie;