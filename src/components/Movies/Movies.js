import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const Movies = ({
  isMobile,
  isTablet,
  isLoggedIn,
  isProcessing,
  setIsProcessing,
  openSideNavigation,
  setInfoTooltipState,
  movies,
  setMovies,
  moviesResults,
  setMoviesResults,
  moviesShort,
  setMoviesShort,
  favorites,
  setFavorites,
}) => {
  return (
    <>
      <Header
        isTablet={isTablet}
        isLoggedIn={isLoggedIn}
        openSideNavigation={openSideNavigation}
        theme={'black'}
      />
      <SearchForm
        setMoviesResults={setMoviesResults}
        setInfoTooltipState={setInfoTooltipState}
        setIsProcessing={setIsProcessing}
        location={'non-saved'}
        movies={movies}
        setMovies={setMovies}
        moviesShort={moviesShort}
        setMoviesShort={setMoviesShort}
      />
      <section className='movies'>
        <MoviesCardList
          isMobile={isMobile}
          isTablet={isTablet}
          isProcessing={isProcessing}
          setIsProcessing={setIsProcessing}
          moviesShort={moviesShort}
          moviesResults={moviesResults}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </section>
      <Footer />
    </>
  );
};

export default Movies;