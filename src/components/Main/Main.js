import './Main.css';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

const Main = ({ isTablet, isLoggedIn, openSideNavigation }) => {
  return (
    <>
      <Header isTablet={isTablet} isLoggedIn={isLoggedIn} openSideNavigation={openSideNavigation} />
      <section className='main'>  
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </section>
      <Footer />
    </>
  );
};

export default Main;