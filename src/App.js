import { useState, useEffect } from 'react';
import api from './services/api';
import MovieRow from './components/MovieRow';
import Hero from './components/Hero';
import './styles.css';
import MovieInfo from './components/MovieInfo';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);
  const [showInfo, setShowInfo] = useState([]);

  useEffect(() => {

    async function loadAll() {
      let data = await api.getFilmes()
      setMovieList(data);

      let originals = data.filter(filme => filme.slug === 'originals');
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[random];
      setHeroMovie(chosen)
    }

    loadAll();

  }, []);

  return (
    <section>
      {showInfo != '' && <MovieInfo info={showInfo} setShowInfo={setShowInfo} />}
      
      {heroMovie && 
        <Hero movie={heroMovie} />
      }
      <div className="allMovies">
        {movieList.length > 0 && movieList.map((item, key) => (
          <MovieRow key={key} items={item.items} titulo={item.title} setShowInfo={setShowInfo}/>
        ))}
      </div>
    </section>
  );
}

export default App;
