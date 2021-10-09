import './App.css';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Login from '../Login/Login';
import Main from '../Main/Main';
import mainApi from '../../utils/MainApi';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import SideNavigation from '../SideNavigation/SideNavigation';

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [infoTooltipState, setInfoTooltipState] = useState({
    tooltipOpen: false,
    isSuccessful: false,
    message: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('loggedIn') || false
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSideNavigation, setIsSideNavigation] = useState(false);
  const [movies, setMovies] = useState([]);
  const [moviesResults, setMoviesResults] = useState([]);
  const [moviesShort, setMoviesShort] = useState(false);
  
  const handleEscClick = (event) => {
    if (event.key === 'Escape') {
      closeSideNavigation();
    }
  };
  
  const closeSideNavigation = () => {
    setIsSideNavigation(false);
    document.removeEventListener('keydown', handleEscClick);
  };
  
  const openSideNavigation = () => {
    setIsSideNavigation(true);
    document.addEventListener('keydown', handleEscClick);
  };

  const handleTokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.currentToken = token;
      mainApi
        .checkToken(token)
        .then((res) => {
          if (!res.message) {
            setIsProcessing(true);
            setCurrentUser(res);
            mainApi
              .getMovies()
              .then((data) => {
                setFavorites(Object.values(data).reverse());
              })
              .catch(() => {
                setInfoTooltipState({
                  tooltipOpen: true,
                  isSuccessful: false,
                  message: 'Что-то пошло не так. Попробуйте ещё раз.',
                });
              })
              .finally(() => {
                setIsProcessing(false);
              });
            if (localStorage.getItem('moviesResults')) {
              setMoviesResults(
                JSON.parse(localStorage.getItem('moviesResults') || '[]')
              );
            }
            setIsLoggedIn(true);
          }
        })
        .catch((res) => console.log(res));
    }
  };

  const handleLogin = () => {
    handleTokenCheck();
    setIsLoggedIn(true);
    localStorage.setItem('loggedIn', true);
    history.push('/movies');
  }
  
  useEffect(() => {
    if (!isTablet) {
      setIsSideNavigation(false);
    }
  }, [isTablet]);

  useEffect(() => {
    handleTokenCheck();
  }, []);
  
  return (
    <section className="page">
      <Preloader isProcessing={isProcessing} />
      <InfoTooltip
        infoTooltipState={infoTooltipState}
        setInfoTooltipState={setInfoTooltipState}
      />
      <SideNavigation
        isLoggedIn={isLoggedIn}
        isSideNavigation={isSideNavigation}
        closeSideNavigation={closeSideNavigation}
      />
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Main
              isTablet={isTablet}
              isLoggedIn={isLoggedIn}
              openSideNavigation={openSideNavigation}
            />
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            movies={movies}
            setMovies={setMovies}
            isMobile={isMobile}
            isTablet={isTablet}
            isLoggedIn={isLoggedIn}
            isProcessing={isProcessing}
            moviesShort={moviesShort}
            openSideNavigation={openSideNavigation}
            setInfoTooltipState={setInfoTooltipState}
            setIsProcessing={setIsProcessing}
            setMoviesShort={setMoviesShort}
            favorites={favorites}
            moviesResults={moviesResults}
            setFavorites={setFavorites}
            setMoviesResults={setMoviesResults}
          />
          <ProtectedRoute
            path='/favorites'
            component={SavedMovies}
            isMobile={isMobile}
            isTablet={isTablet}
            isLoggedIn={isLoggedIn}
            isProcessing={isProcessing}
            moviesShort={moviesShort}
            openSideNavigation={openSideNavigation}
            setInfoTooltipState={setInfoTooltipState}
            setIsProcessing={setIsProcessing}
            setMoviesShort={setMoviesShort}
            favorites={favorites}
            moviesResults={moviesResults}
            setFavorites={setFavorites}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            isTablet={isTablet}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            openSideNavigation={openSideNavigation}
            setIsProcessing={setIsProcessing}
            setInfoTooltipState={setInfoTooltipState}
            setCurrentUser={setCurrentUser}
          />
          <Route path='/signup'>
            {isLoggedIn ? (
              <Redirect to='/movies' />
            ) : (
              <Register
                setIsProcessing={setIsProcessing}
                setInfoTooltipState={setInfoTooltipState}
                handleLogin={handleLogin}
              />
            )}
          </Route>
          <Route path='/signin'>
            {isLoggedIn ? (
              <Redirect to='/movies' />
            ) : (
              <Login
                setIsProcessing={setIsProcessing}
                setInfoTooltipState={setInfoTooltipState}
                handleLogin={handleLogin}
              />
            )}
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </section>
  );
};

export default App;
