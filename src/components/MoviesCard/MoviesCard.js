import './MoviesCard.css';
import Button from '../Button/Button';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movies, setMovies, movie }) => {
  const location = useLocation();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  
  const updateState = (nextState) => {
    return movies.map((element) => {
      if (element.id === movie.id) {
        return { ...element, status: nextState };
      } return element;
    });
  };
  
  const handleMouseOverCard = () => {
    setIsButtonEnabled(true);
  };

  const handleMouseOutCard = () => {
    setIsButtonEnabled(false);
  };

  const handleButtonSave = () => {
    setMovies(updateState('saved'))
  };

  const handleButtonSaved = () => {
    setMovies(updateState('unsaved'));
  };

  const handleButtonDelete = () => {
    setMovies(updateState('unsaved'));
  };

  return (
    <section className='card'>
      
      <div className='card__info'>
        <p className='card__name'>{movie.name}</p>
        <div className='card__duration'>{`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}</div>
        {movie.status === 'saved' ? (
          location.pathname !== '/favorites' ? (
            <Button type={'saved'} onClick={handleButtonSaved} />
          ) : (
            <Button type={'delete'} onClick={handleButtonDelete} additionalClass={isButtonEnabled && 'button_visible'} />
          )
        ) : (
          <Button type={'save'} onClick={handleButtonSave} additionalClass={isButtonEnabled && 'button_visible'} />
        )}
      </div>
      <a href={movie.trailer} target='_blank' onMouseOut={handleMouseOutCard} onMouseOver={handleMouseOverCard} rel='noreferrer'>
        <img className='card__image' src={movie.image} alt={movie.name} />
      </a>
    </section>
  );
};

export default MoviesCard;