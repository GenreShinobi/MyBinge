import React from "react";
import Movie from "./Movie";

const Home = (props) => {
    return (
        <div className="movies">
            {props.loading && !props.errorMessage ? (
                <span>loading...</span>
            ) : props.errorMessage ? (
                <div className="errorMessage">{props.errorMessage}</div>
            ) : (props.movies.map((movie, index) => (
                <Movie
                    key={`${index}=${movie.Title}`}
                    imdbID={movie.imdbID}
                    database={props.database}
                    user={props.user}
                    onList={props.folioList.includes(movie.imdbID.toString())}
                    getFolio={props.getFolio}/>
                ))
            )}
        </div>
    );
};

export default Home;