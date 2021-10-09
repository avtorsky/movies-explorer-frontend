import './SearchForm.css';
import { useState, useEffect, useCallback } from 'react';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import moviesApi from '../../utils/MoviesApi';
import searchImage from '../../images/search__image.svg';
import { validateInput, validator } from '../../utils/validation';


const SearchForm = ({
  movies,
  setMovies,
  location,
  moviesShort,
  setMoviesShort,
  setMoviesResults,
  setInfoTooltipState,
  setIsProcessing,
  getSearchFavorites,
}) => {
  const [formValue, setFormValue] = useState({
    search: '',
  });

  useEffect(() => {
    return () => {
      setFormValue({
        search: '',
      });
    }
  }, []);

  const [errors, setErrors] = useState({
    search: {
      required: true,
    },
  });

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormValue((state) => ({ ...state, [name]: value }));
  }, [setFormValue]);

  useEffect(
    function validateInputs() {
      const { search } = formValue;
      const searchValidation = validateInput(validator.search, search);
      setErrors({
        search: searchValidation,
      });
    }, [formValue, setErrors]);

    const { search } = formValue;
    const isSearchInvalid = Object.values(errors.search).some(Boolean);

    useEffect(() =>{
      location === 'saved' && search === '' && getSearchFavorites(search);
    }, [search, location, getSearchFavorites]);

    const handleSubmit = (event) => {
      event.preventDefault();
      if (isSearchInvalid) {
        setInfoTooltipState({
          tooltipOpen: true,
          isSuccessful: false,
          message: 'Нужно ввести ключевое слово',
        });
      } else {
        if (location === 'saved') {
          getSearchFavorites(search);
        } else {
          localStorage.removeItem('moviesResults');
          if (!movies.length) {
            setIsProcessing(true);
            moviesApi
              .getMovies()
              .then((data) => {
                setMovies(data);
                return data;
              })
              .then((data) => {
                const moviesResults = data.filter((movie) => {
                  return movie.nameRU.toLowerCase().includes(search.toLowerCase());
                });
                localStorage.setItem('moviesResults', JSON.stringify(moviesResults));
                setMoviesResults(moviesResults);
              })
              .catch((err) => {
                setInfoTooltipState({
                  tooltipOpen: true,
                  isSuccessful: false,
                  message: 'Ошибка обработки запроса на сервере',
                });
                console.log(err);
              })
              .finally(() => {
                setIsProcessing(false);
              });
          } else {
            const moviesResults = movies.filter((movie) => {
              return movie.nameRU.toLowerCase().includes(search.toLowerCase());
            });
            localStorage.setItem('moviesResults', JSON.stringify(moviesResults));
            setMoviesResults(moviesResults);
          }
        }
      }
    };

  return (
    <section className='search'>
      <form className='search__form' noValidate>
        <div className='search__box'>
          <img className='search__image' src={searchImage} alt='Поиск по списку фильмов'/>
          <input
            className='search__input'
            name='search'
            placeholder='Фильм'
            value={search}
            onChange={handleInputChange}
            minLength='5'
            required
          />
          <Button
            text={'Найти'}
            type='search'
            buttonType='submit'
            additionalClass={isSearchInvalid && 'button_disabled'}
            onClick={handleSubmit}
          />
          <FilterCheckbox
            moviesShort={moviesShort}
            setMoviesShort={setMoviesShort}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
