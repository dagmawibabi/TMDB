import './eachMovie.css';
export const EachMovie = (props) => {
    let poster = "https://image.tmdb.org/t/p/original" + props.moviePoster;
    return (
        <div className="eachMovie">
            <img key={props.key} alt="moviePoster" src={poster} className="moviePoster"/>
            <h1 key={props.key} className="movieTitle"> {props.movieTitle} </h1>
            <h1 key={props.key} className="movieRating"> {props.movieRating} </h1>
            <h1 key={props.key} className="movieLanguage"> {props.movieLanguage} </h1>
        </div>
    );
}