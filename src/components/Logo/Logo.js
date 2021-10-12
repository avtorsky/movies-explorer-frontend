import './Logo.css';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/header__logo.svg';

const Logo = () => {
  return (
    <Link className='logo' to='/'>
      <img className='logo__image' src={headerLogo} alt='Логотип учебного проекта' />
    </Link>
  );
};

export default Logo;