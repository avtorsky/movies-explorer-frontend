import './FilterCheckbox.css';
import { useCallback } from 'react';

const FilterCheckbox = ({ moviesShort, setMoviesShort }) => {
  const handleCheck = useCallback(() => {
    setMoviesShort(!moviesShort);
  }, [moviesShort, setMoviesShort]);

  return (
    <section className='filter'>
      <label className='filter__switch'>
        <input className='filter__checkbox' type='checkbox' checked={moviesShort} onChange={handleCheck} />
        <span className='filter__tumbler'></span>
      </label>
      <p className='filter__title'>Короткометражки</p>
    </section>
  );
};

export default FilterCheckbox;