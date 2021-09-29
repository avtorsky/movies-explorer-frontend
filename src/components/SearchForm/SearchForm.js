import './SearchForm.css';
import searchImage from '../../images/search__image.svg';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className='search'>
      <form className='search__form' noValidate>
        <div className='search__box'>
          <img className='search__image' src={searchImage} alt='Поиск по списку фильмов'/>
          <input className='search__input' placeholder='Фильм' minLength='5' required />
          <Button text={'Найти'} type='search' buttonType='submit' />
          <FilterCheckbox />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
