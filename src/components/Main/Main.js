import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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