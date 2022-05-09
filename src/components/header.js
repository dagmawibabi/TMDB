import tmdb from '../assets/svg/tmdb.svg'
import './header.css'
import { useState, useEffect } from 'react';
import { Details } from './details'
import { EachMovie } from './eachMovie';
import { Footer } from './footer';

export const Header = (props) => {
    let [movieList, setMovieList] = useState([]);
    let [updateVal, setUpdateVal] = useState(0);
    let [time, setTime] = useState("week");
    let [type, setType] = useState("movie");
    const [currentIndex, changeCurrentIndex] = useState(0);
    const [movieID, setMovieID] = useState(453395);
    const [movieDetails, setMovieDetails] = useState({});

    // async fetch data from api
    /*useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=38d6559cd7b9ccdd0dd57ccca36e49fb')
            .then(res => res.json())
            .then(data => {
                setMovieList(data.results);
            }
            )
    }, [updateVal]);*/

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/trending/' + type +'/' + time + '?api_key=38d6559cd7b9ccdd0dd57ccca36e49fb')
      .then((result) => result.json())
      .then((resultJSON) => setMovieList(resultJSON.results))
      .catch((e) => console.log(e))
      .finally(() => {setUpdateVal(1); })
    }, [type, time])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=38d6559cd7b9ccdd0dd57ccca36e49fb&language=en-US')
        .then((result) => result.json())
        .then((resultJSON) => {setMovieDetails(resultJSON); setMovieID(resultJSON['id']);  console.log(resultJSON['budget'])})
        .catch((e) => console.log(e))
        .finally(() => {setUpdateVal(1); })  
    },[movieID]);

    function changeMovie(index) {
        movieList.length > 0 ? setMovieID(movieList[index]['id']) : setMovieID(453395);
        //
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        changeCurrentIndex(index);
    }
    return (
        <div>   
            
            <div className='header'> 
                <img src={tmdb} alt="TMDB" className='tmdbLogo'></img>
                {
                    movieList.length > 0 ? (
                        <h1 className='headerMovieTitle'> {type === "tv" ? movieList[0]["name"] : movieList[0]["title"]}  </h1>
                        )
                    : (
                        <h1 className='headerMovieTitle'> Loading... </h1>
                    )
                }
                <div>
                <select value={time} className='watchLaterBtn' onChange={(e)=>{movieList = []; console.log(e.target.value);setTime(e.target.value);}}>
                        <option value="day"> Day </option>
                        <option value="week"> Week </option>
                    </select>
                    <div style={{marginLeft: "10px", display: "inline",}}></div>
                    <select value={type} className='watchLaterBtn' onChange={(e)=>{movieList = []; console.log(e.target.value);setType(e.target.value);}}>
                        <option value="movie"> Movie </option>
                        <option value="tv"> Series </option>
                    </select>
                </div>
            </div>
            {
                movieList.length > 0 ? 
                    <div>
                        <div>
                            <Details id='top' type={type} runtime={movieDetails['runtime']} homepage={movieDetails["homepage"]} budget={movieDetails["budget"]} status={movieDetails["status"]} tagline={movieDetails['tagline']} released={movieDetails['released']} bgImage={movieList[currentIndex]["backdrop_path"]} moviePoster={movieList[currentIndex]["poster_path"]} movieRD={movieList[currentIndex]["release_date"]} movieTitle= {type === "tv" ? movieList[currentIndex]["name"] : movieList[currentIndex]["title"]} movieDescription={movieList[currentIndex]["overview"]} movieRating={movieList[currentIndex]["vote_average"]} movieLanguage={movieList[currentIndex]["original_language"] } />
                        </div>
                        <div className='gridView'>
                            {
                                movieList.map((movie, index) => {     
                                    return (
                                        <div>
                                            <EachMovie key={index} index={index} onClickFunc={changeMovie} type={type} bgImage={movieList[index]["backdrop_path"]} moviePoster={movieList[index]["poster_path"]} movieRD={type === "tv" ? movieList[index]["first_air_date"] : movieList[index]["release_date"]} movieTitle= {type === "tv" ? movieList[index]["name"] : movieList[index]["title"]} movieDescription={movieList[index]["overview"]} movieRating={movieList[index]["vote_average"]} movieLanguage={movieList[index]["original_language"] } />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                : <Details bgImage='' moviePoster='' movieRD='Release Date' movieTitle= 'Movie Title' />
                                
            }
            <Footer />
        </div>
    )
}