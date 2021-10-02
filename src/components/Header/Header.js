import './Header.css';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import { Link } from 'react-router-dom';

const Header = ({ theme, isLoggedIn, isTablet, openSideNavigation }) => {
  return (
    <header className={`header ${theme === 'black' && 'header_theme_black'}`}>
      <div className='header__logo'>
        <Logo />
      </div>
      {isLoggedIn && !isTablet && <Navigation />}
      <nav className='header__menu'>
        {!isLoggedIn && (
          <Link to='/signup' className='header__link'>Регистрация</Link>
        )}
        {!isLoggedIn ? (
          <Button type={'login'} text={'Войти'} />
        ) : (
          !isTablet && <Button type={'account'} text={'Аккаунт'} />
        )}
        {isTablet && isLoggedIn && <Hamburger openSideNavigation={openSideNavigation} />} 
      </nav>
    </header>
  );
};

export default Header;