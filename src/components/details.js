import './details.css'

export const Details = (props) => {
    let backdropImage = "https://image.tmdb.org/t/p/original" + props.bgImage;
    return (
        <div className='detailsPage' style={{backgroundImage: `url(${backdropImage})`}}>
            <div className='banner'>
                <div className='details'>
                    <div className='rateAndLangD'>
                        <h5 className='movieReleaseDateD'> {props.movieRD} </h5>
                        {
                            props.status === 'Released' ?  
                                <h5 className='movieReleaseDateD' style={{color: '#00ffdd'}}> {props.status} </h5>
                            : 
                                ( props.status === 'Post Production' ? 
                                <h5 className='movieReleaseDateD' style={{color: '#eeee00'}}> {props.status} </h5> :  <h5 className='movieReleaseDateD'> {props.status} </h5>)
                        }
                    </div>
                    <h1 className='movieTitleD'> {props.movieTitle} </h1>
                    {
                        props.type === 'tv' ? "" :  <h2> {props.tagline} </h2>
                    }
                
                    <p className='movieDescriptionD'> {props.movieDescription} </p>
                    <div style={{marginBottom: '30px'}}></div>
                    <hr style={{opacity: '0.1'}}></hr>
                    <div style={{marginBottom: '15px'}}></div>
                    <div style={{display: 'inline-flex'}}> 
                    {
                       props.type !== "tv" ? props.movieGenres === undefined ? "" : props.movieGenres.map((genre, index) => {
                            return (
                                <div>

                                    <h4 key={index} style={{marginRight: '10px', fontWeight: 'normal', fontStyle: 'italic'}} className='movieGenreD'> {genre.name} </h4>
                                </div>
                                )
                        }) : <div></div>
                    }
                    </div>
                    {
                        props.type === "tv" ? 
                            <div>

                            </div> : 
                            <div>
                                <div className='rateAndLangD'>
                                    <p className='movieDescriptionD'>  {"Runtime: " + props.runtime + " mins"} </p>                    
                                    <p className='movieDescriptionD'>  {"Budget: $" + props.budget} </p>                    
                                </div>
                            </div>
                    }
                    <div className='rateAndLangD'>
                    <h4 className='movieRatingD'> {"Rating: " + props.movieRating} </h4>
                    <h4>Language: <span className='movieLanguageD'> {props.movieLanguage} </span>  </h4>                        
                    </div>
                    <div style={{paddingBottom: '20px'}}></div>
                </div>
                <div>
                    <a href={props.homepage}> <img alt='moviePoster' className='moviePosterD' src={"https://image.tmdb.org/t/p/original" + props.moviePoster}></img> </a>
                </div>
            </div>
        </div>
    );
}