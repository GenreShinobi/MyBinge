import React, { Component } from "react";
import Movie from "./Movie";

class Folio extends Component {
     render () {
        return (
            <div className="movies">
                {this.props.loading && !this.props.errorMessage ? (
                    <span>loading...</span>
                ) : this.props.errorMessage ? (
                    <div className="errorMessage">{this.props.errorMessage}</div>
                ) : (this.props.folioList.map((movie, index) => (
                        <Movie
                            key={`${index}=${movie}`}
                            imdbID={movie}
                            database={this.props.database}
                            user={this.props.user}
                            onList={true}/>
                    ))
                )}
            </div>
        )
    }

}

export default Folio;