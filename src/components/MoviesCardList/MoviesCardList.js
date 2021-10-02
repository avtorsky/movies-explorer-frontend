import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';

const MoviesCardList = ({ movies, setMovies }) => {
  return (
    <>
    <ul className='movies-cardlist'>
      {movies.map((movie, i) => (
        <li className='movies-cardlist__element' key={i}>
          <MoviesCard key={movie.id} movie={movie} setMovies={setMovies} movies={movies} />
        </li>
      ))}
    </ul>
    <Button text={'Ещё'} type={'next'} />
    </>
  );
};

export default MoviesCardList;