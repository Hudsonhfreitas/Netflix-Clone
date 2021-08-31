export default function Hero({movie}) {

    let date = new Date(movie.first_air_date);

    return(
        <section className="hero" style={{
            background: `linear-gradient(to right, #111 30%, transparent 70%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})no-repeat center`,
            backgroundSize: 'cover'
        }}>
            <div className="hero_wrapper">
                <div className="movie_info">
                    <h1>{movie.name}</h1>
                    <div className="top">
                        <span className="points">{movie.vote_average} pontos</span>
                        <span className= "date">{date.getFullYear()}</span>
                        <span className="country">{movie.origin_country[0]}</span>
                    </div>
                    <p>{movie.overview}</p>
                    <div className="buttons">
                        <button className="watch"><i className="fas fa-play"></i>Assistir</button>
                        <button className="myList"><i className="fas fa-plus"></i>Minha Lista</button>
                    </div>
                </div>
            </div>
        </section>
    );
}