import './MoviesCardList.css';
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  moviesDesktopListCount,
  moviesTabletListCount,
  moviesMobileListCount,
  moviesShortDuration,
} from '../../utils/constants';

const MoviesCardList = ({
  isMobile,
  isTablet,
  moviesResults,
  moviesShort,
  favorites,
  isProcessing,
  setIsProcessing,
  setFavorites,
  searchFavorites,
}) => {
  const location = useLocation();

  const currentUser = useContext(CurrentUserContext);

  const [moviesRenderState, setMoviesRenderState] = useState({
    moviesListCount: moviesDesktopListCount,
  });
  
  const renderMovies = moviesShort
    ? moviesResults.filter((movie) => movie.duration < moviesShortDuration)
    : moviesResults;

  const currentUserFavorites = favorites.filter((movie) => movie.owner === currentUser._id);
  
  const renderFavorites = moviesShort
    ? currentUserFavorites.filter((movie) => movie.duration < moviesShortDuration)
    : currentUserFavorites;
  
  const renderFavoritesSearch = searchFavorites !== ''
    ? renderFavorites.filter((movie) => movie.nameRU.toLowerCase().includes(searchFavorites?.toLowerCase()))
    : renderFavorites;

  useEffect(() => {
    if (isMobile) {
      setMoviesRenderState({
        moviesListCount: moviesMobileListCount,
      });
    } else if (isTablet) {
      setMoviesRenderState({
        moviesListCount: moviesTabletListCount,
      });
    } else {
      setMoviesRenderState({
        moviesListCount: moviesDesktopListCount,
      });
    }
  }, [isMobile, isTablet]);

  const handleNextClick = () => {
    setMoviesRenderState((prevState) => ({
      ...prevState,
      moviesListCount: moviesRenderState.moviesListCount,
    }));
  };

  return (
    <>
    {!isProcessing && location.pathname === '/movies' && renderMovies.length === 0 && (
      <p className='movies-cardlist__not-found'>Ничего не найдено</p>
    )}
    {!isProcessing && location.pathname === '/favorites' && renderFavoritesSearch.length === 0 && (
      <p className='movies-cardlist__not-found'>Ничего не сохранено в избранном</p>
    )}
    {location.pathname === '/movies' && renderMovies.length > 0 && (
      <ul className='movies-cardlist'>
        {renderMovies.slice(0, moviesRenderState.moviesListCount).map((movie) => (
          <li className='movies-cardlist__element' key={movie.id}>
            <MoviesCard
              favorites={favorites}
              setFavorites={setFavorites}
              movie={movie}
              setIsProcessing={setIsProcessing}
            />
          </li>
        ))}
      </ul>
    )}
    {location.pathname === '/favorites' && favorites.length > 0 && (
      <ul className='movies-cardlist'>
        {renderFavoritesSearch.map((favoriteMovie) => (
          <li className='movies-cardlist__element' key={favoriteMovie._id}>
            <MoviesCard
              setFavorites={setFavorites}
              movie={favoriteMovie}
              setIsProcessing={setIsProcessing}
            />
          </li>
        ))}
      </ul>
    )}
    {location.pathname === '/movies' &&
      moviesRenderState.moviesListCount < renderMovies.length && (
        <Button
          onClick={handleNextClick}
          text={'Ещё'}
          type={'next'}
        />
      )
    }
    </>
  );
};

export default MoviesCardList;