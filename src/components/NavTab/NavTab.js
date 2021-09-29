import './NavTab.css';
import { HashLink } from 'react-router-hash-link';
import Button from '../Button/Button';

const NavTab = () => {
  return (
    <nav className='navtab'>
      <HashLink to='/#about' className='navtab__item'>
        <Button text={'Узнать больше'} type={'more'} />
      </HashLink>
    </nav>
  );
};

export default NavTab;