import './details.css'

export const Details = (props) => {
    let backdropImage = "https://image.tmdb.org/t/p/original" + props.bgImage;
    return (
        <div className='detailsPage' style={{backgroundImage: `url(${backdropImage})`}}>
            <div className='banner'>
                <div className='details'>
                    <div className='rateAndLangD'>
                        <h5 className='movieReleaseDateD'> {props.movieRD} </h5>
                        <h5 className='movieReleaseDateD'> {props.status} </h5>
                    </div>
                    <h1 className='movieTitleD'> {props.movieTitle} </h1>
                    <h2> {props.tagline} </h2>

                    <p className='movieDescriptionD'> {props.movieDescription} </p>
                    <div className='rateAndLangD'>
                        <p className='movieDescriptionD'>  {"Runtime: " + props.runtime + " mins"} </p>                    
                        <p className='movieDescriptionD'>  {"Budget: " + props.budget} </p>                    
                        <p className='movieDescriptionD'>  {"Revenue: " + props.revenue} </p>                    
                    </div>
                    <div className='rateAndLangD'>
                    <h4 className='movieRatingD'> {props.movieRating} </h4>
                        <h4 className='movieLanguageD'> {props.movieLanguage} </h4>
                    </div>
                </div>
                <div>
                    <a href={props.homepage}> <img alt='moviePoster' className='moviePosterD' src={"https://image.tmdb.org/t/p/original" + props.moviePoster}></img> </a>
                </div>
            </div>
        </div>
    );
}