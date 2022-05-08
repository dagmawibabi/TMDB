import './details.css'

export const Details = (props) => {
    let backdropImage = "https://image.tmdb.org/t/p/original" + props.bgImage;
    return (
        <div className='detailsPage' style={{backgroundImage: `url(${backdropImage})`}}>
            <div className='banner'>
                <div className='details'>
                    <h5 className='movieReleaseDateD'> {props.movieRD} </h5>
                    <h1 className='movieTitleD'> {props.movieTitle} </h1>
                    <p className='movieDescriptionD'> {props.movieDescription} </p>
                    <div className='rateAndLangD'>
                        <h4 className='movieRatingD'> {props.movieRating} </h4>
                        <h4 className='movieLanguageD'> {props.movieLanguage} </h4>
                    </div>
                </div>
                <div>
                    <img alt='moviePoster' className='moviePosterD' src={"https://image.tmdb.org/t/p/original" + props.moviePoster}></img>
                </div>
            </div>
        </div>
    );
}