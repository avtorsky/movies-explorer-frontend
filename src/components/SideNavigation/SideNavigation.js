import './SideNavigation.css';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

const SideNavigation = ({ isSideNavigation, closeSideNavigation }) => {
  return (
    <section className={`sidenav ${isSideNavigation && 'sidenav_opened'}`}>
      <div className='sidenav__content'>
        <Button type={'close'} onClick={closeSideNavigation} />
        <Navigation layout={'side'} closeSideNavigation={closeSideNavigation} />
        <Button type={'account'} text={'Аккаунт'} closeSideNavigation={closeSideNavigation} />
      </div>
    </section>
  );
};

export default SideNavigation;