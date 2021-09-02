import { useState } from "react";

export default function MovieRow({items, titulo, setShowInfo}) {

    const [scrollX, setScrollX] = useState(0);

    const handlePrev = () => {
        let x = scrollX + Math.round(window.innerHeight / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x)
    }

    const handleNext = () => {
        let x = scrollX - Math.round(window.innerHeight / 2)
        let listW = items.results.length * 160;
        if((window.innerWidth - listW) > x) {
            x = ((window.innerWidth - listW) - 60)
        }
        setScrollX(x);
    }

    return(
        <div className="c-row">
            <h2>{titulo}</h2>
            <div className="row">
                <div className="prev" onClick={handlePrev}>
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div className="next" onClick={handleNext}>
                    <i class="fas fa-chevron-right"></i>
                </div>
            
                <div className="movies_wrapper">
                    <div className="movies_list" style={{
                        width: `${items.results.length * 160}px`,
                        marginLeft: scrollX
                        }}>
                        {items.results.length > 0 && items.results.map(lista => (
                            <div className="movie" key={lista.id} onClick={() => {setShowInfo(lista)}}>
                                <img src={`https://image.tmdb.org/t/p/w300${lista.poster_path}`} alt={lista.name}></img>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}