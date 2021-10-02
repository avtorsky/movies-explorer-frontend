import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { routing } from '../../utils/routes';

const Navigation = ({ layout, closeSideNavigation }) => {
  return (
    <nav className={layout === 'side' ? 'navigation-side' : 'navigation'}>
      {(layout === 'side' ? routing : routing.slice(1)).map((link, i) => (
        <NavLink className={layout === 'side' ? 'navigation-side__link' : 'navigation__link'} onClick={closeSideNavigation} key={i} activeClassName={layout === 'side' ? 'navigation-side__link_active' : 'navigation__link_active'} to={link[1]} exact>
          {link[0]}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;