import './App.css';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Switch, Route } from 'react-router-dom';
// import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
// import Preloader from '../Preloader/Preloader';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import SideNavigation from '../SideNavigation/SideNavigation';

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  // const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isProcessing, setIsProcessing] = useState(false);
  const [isSideNavigation, setIsSideNavigation] = useState(false);
  // const [isSuccessful, setIsSuccessful] = useState(false);
  const [movies, setMovies] = useState([
    {
      name: 'Каратель',
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e3f567e0-1029-42c1-aa95-3565d3acc682/x178_2',
      duration: 53,
      trailer: 'https://www.youtube.com/watch?v=fbwEJkCaP6M',
      status: 'saved',
      id: 0,
    },
    {
      name: 'Ходячие мертвецы',
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/deca8092-1ee2-497b-9062-06cfebb43634/x178_2',
      duration: 43,
      trailer: 'https://www.youtube.com/watch?v=SAiosqlJ8qE',
      status: 'saved',
      id: 1,
    },
    {
      name: 'Расплата',
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/1ac05046-c7f9-4192-9fa4-a18a79b21635/3840x',
      duration: 128,
      trailer: 'https://www.youtube.com/watch?v=AD6lEHZXgFM',
      status: 'saved',
      id: 2,
    },
    {
      name: 'Ярость',
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/f83091c0-a2d1-4797-b504-67c557c6cfbf/x178_2',
      duration: 134,
      trailer: 'https://www.youtube.com/watch?v=60Ss1hku-8I',
      status: 'unsaved',
      id: 3,
    },
    {
      name: 'Убийца',
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/68627e1b-089d-4544-bb49-e6eb24ddceb1/x504',
      duration: 121,
      trailer: "https://www.youtube.com/watch?v=kCBqiZ_mhrI",
      status: 'unsaved',
      id: 4,
    },
    {
      name: 'Выстрел в пустоту',
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/36a4778c-817f-4805-89f1-8a54c00c2b34/x178_2',
      duration: 120,
      trailer: 'https://www.youtube.com/watch?v=nvuxGvotTz0',
      status: 'unsaved',
      id: 5,
    },
  ])
  
  const closeSideNavigation = () => {
    setIsSideNavigation(false);
    document.removeEventListener('keydown', handleEscClick);
  };
  
  const openSideNavigation = () => {
    setIsSideNavigation(true);
    document.addEventListener('keydown', handleEscClick);
  };
  
  useEffect(() => {
    if (!isTablet) {
      setIsSideNavigation(false);
    }
  }, [isTablet]);
  
  const handleEscClick = (event) => {
    if (event.key === 'Escape') {
      closeSideNavigation();
    }
  };

  return (
    <section className="page">
      {/* <Preloader isProcessing={isProcessing} />
      <InfoTooltip
        isInfoTooltipOpen={isInfoTooltipOpen}
        setIsInfoTooltipOpen={setIsInfoTooltipOpen}
        isSuccessful={isSuccessful}
      /> */}
      <SideNavigation
        isLoggedIn={isLoggedIn}
        isSideNavigation={isSideNavigation}
        closeSideNavigation={closeSideNavigation}
      />
      <Switch>
        <Route exact path='/'>
          <Main
            isTablet={isTablet}
            isLoggedIn={isLoggedIn}
            openSideNavigation={openSideNavigation}
          />
        </Route>
        <Route path='/movies'>
          <Movies
            movies={movies}
            setMovies={setMovies}
            isMobile={isMobile}
            isTablet={isTablet}
            isLoggedIn={isLoggedIn}
            openSideNavigation={openSideNavigation}
          />
        </Route>
        <Route path='/favorites'>
          <SavedMovies
            movies={movies}
            setMovies={setMovies}
            isMobile={isMobile}
            isTablet={isTablet}
            isLoggedIn={isLoggedIn}
            openSideNavigation={openSideNavigation}
          />
        </Route>
        <Route path='/profile'>
          <Profile
            isTablet={isTablet}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            openSideNavigation={openSideNavigation}
          />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </section>
  );
};

export default App;
