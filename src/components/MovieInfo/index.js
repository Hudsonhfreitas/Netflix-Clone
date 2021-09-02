export default function MovieInfo({info, setShowInfo}) {

    var date = info.first_air_date != undefined ? new Date(info.first_air_date).getFullYear() : '';
    

    function handleClose(e) {
        var target = e.target.className
        if(target.includes('close')) {
            setShowInfo('')
        }
    }

    return (
        <div className="lightBox close" onClick={handleClose}>
            <div className="movieInfo">
                <button className="close"><i className="fas fa-times close"></i></button>
                <img src={`https://image.tmdb.org/t/p/w500${info.backdrop_path}`} alt={info.name}></img>
                <div className="info">
                    <div className="top">
                        <h2>{info.name}</h2>
                        <span className="points">{info.vote_average} pontos</span>
                        <span className= "date">{date}</span>
                        <span className="country">{info.orgin_country != undefined && info.origin_country[0]}</span>
                        <p>{info.overview}</p>                       
                    </div>
                    <div className="buttons">
                            <button className="watch"><i className="fas fa-play"></i>Assistir</button>
                            <button className="myList"><i className="fas fa-plus"></i>Minha Lista</button>
                    </div>
                </div>
            </div>
        </div>
    );
}