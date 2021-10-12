import './MoviesCard.css';
import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

const MoviesCard = ({
  movie,
  setFavorites,
  favorites,
  setIsProcessing,
}) => {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  
  const handleMouseOverCard = () => {
    setIsButtonEnabled(true);
  };

  const handleMouseOutCard = () => {
    setIsButtonEnabled(false);
  };

  const handleButtonSave = () => {
    setIsProcessing(true);
    mainApi
      .createMovie(
        movie.country,
        movie.director,
        movie.duration,
        movie.year,
        movie.description,
        `https://api.nomoreparties.co${movie.image.url}`,
        movie.trailerLink,
        `https://api.nomoreparties.co${movie.image.url}`,
        movie.id,
        movie.nameRU,
        movie.nameEN,
      )
      .then((res) => {
        setFavorites([res, ...favorites]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  const handleButtonSaved = () => {
    setIsProcessing(true);
    mainApi
      .deleteMovie(favorites.find((item) => item.movieId === movie.id)._id)
      .then(() => {
        setFavorites((prevMovies) => 
          prevMovies.filter((prevMovie) => prevMovie.movieId !== movie.id)
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  const handleButtonDelete = () => {
    setIsProcessing(true);
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setFavorites((prevMovies) => 
          prevMovies.filter((prevMovie) => prevMovie._id !== movie._id)
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <section className='card'>
      <div className='card__info'>
        <p className='card__name'>{movie.nameRU}</p>
        <div className='card__duration'>{`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}</div>
        {
          (
            (favorites?.find(
              (item) => item.movieId === movie.id && item.owner === currentUser._id
              ) && true
            ) || false
          ) &&
          location.pathname === '/movies' ? (
            <Button
              type={'saved'}
              onClick={handleButtonSaved}
            />
          ) : location.pathname === '/favorites' ? (
            <Button
              type={'delete'}
              onClick={handleButtonDelete}
              additionalClass={isButtonEnabled && 'button_visible'}
            />
          ) : (
            <Button
              type={'save'}
              onClick={handleButtonSave}
              additionalClass={isButtonEnabled && 'button_visible'}
            />
          )
        }
      </div>
      <a
        href={movie.trailerLink}
        target='_blank'
        onMouseOut={handleMouseOutCard}
        onMouseOver={handleMouseOverCard}
        rel='noreferrer'
      >
        <img
          className='card__image'
          src={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
          alt={movie.nameRU}
        />
      </a>
    </section>
  );
};

export default MoviesCard;