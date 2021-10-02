import './FilterCheckbox.css';
import { useState, useCallback } from 'react';

const FilterCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <section className='filter'>
      <label className='filter__switch'>
        <input className='filter__checkbox' type='checkbox' checked={isChecked} onChange={handleCheck} />
        <span className='filter__tumbler'></span>
      </label>
      <p className='filter__title'>Короткометражки</p>
    </section>
  );
};

export default FilterCheckbox;