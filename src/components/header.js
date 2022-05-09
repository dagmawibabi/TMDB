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

    // async fetch data from api
    /*useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=38d6559cd7b9ccdd0dd57ccca36e49fb')
            .then(res => res.json())
            .then(data => {
                setMovieList(data.results);
            }
            )
    }, [updateVal]);*/

    useEffect( () => {
      fetch('https://api.themoviedb.org/3/trending/' + type +'/' + time + '?api_key=38d6559cd7b9ccdd0dd57ccca36e49fb')
      .then((result) => result.json())
      .then((resultJSON) => setMovieList(resultJSON.results))
      .catch((e) => console.log(e))
      .finally(() => {setUpdateVal(1); })
    }, [type, time])

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
                            <Details bgImage={movieList[0]["backdrop_path"]} moviePoster={movieList[0]["poster_path"]} movieRD={movieList[0]["release_date"]} movieTitle= {type === "tv" ? movieList[0]["name"] : movieList[0]["title"]} movieDescription={movieList[0]["overview"]} movieRating={movieList[0]["vote_average"]} movieLanguage={movieList[0]["original_language"] } />
                        </div>
                        <div className='gridView'>
                            {
                                movieList.map((movie, index) => {     
                                    if (index > 0) {
                                        return (
                                            <div>
                                                <EachMovie key={index} type={type} bgImage={movieList[index]["backdrop_path"]} moviePoster={movieList[index]["poster_path"]} movieRD={type === "tv" ? movieList[index]["first_air_date"] : movieList[index]["release_date"]} movieTitle= {type === "tv" ? movieList[index]["name"] : movieList[index]["title"]} movieDescription={movieList[index]["overview"]} movieRating={movieList[index]["vote_average"]} movieLanguage={movieList[index]["original_language"] } />
                                            </div>
                                        )
                                    }                           
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