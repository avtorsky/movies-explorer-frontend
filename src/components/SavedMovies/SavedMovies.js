import './SavedMovies.css';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = ({
  isMobile,
  isTablet,
  isLoggedIn,
  openSideNavigation,
  setInfoTooltipState,
  setSearchSubmitState,
  searchSubmitState,
  setMoviesShort,
  moviesShort,
  favorites,
  moviesResults,
  setFavorites,
  setIsProcessing,
}) => {
  const [searchFavorites, setSearchFavorites] = useState('');
  
  const getSearchFavorites = (searchQuery) => {
    setSearchFavorites(searchQuery);
  }

  return (
    <> 
      <Header
        isTablet={isTablet}
        isLoggedIn={isLoggedIn}
        openSideNavigation={openSideNavigation}
        theme={'black'}
      />
      <SearchForm
        getSearchFavorites={getSearchFavorites}
        location={'saved'}
        moviesShort={moviesShort}
        setMoviesShort={setMoviesShort}
        setInfoTooltipState={setInfoTooltipState}
        setSearchSubmitState={setSearchSubmitState}

      />
      <section className='favorites'>  
        <MoviesCardList
          isMobile={isMobile}
          isTablet={isTablet}
          favorites={favorites}
          setFavorites={setFavorites}
          moviesResults={moviesResults}
          moviesShort={moviesShort}
          setIsProcessing={setIsProcessing}
          searchFavorites={searchFavorites}
          searchSubmitState={searchSubmitState}
        />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;