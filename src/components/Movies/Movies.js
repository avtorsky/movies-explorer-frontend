import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';

const Movies = ({ isTablet, isLoggedIn, openSideNavigation, movies, setMovies }) => {
  return (
    <>
      <Header isTablet={isTablet} isLoggedIn={'true'} openSideNavigation={openSideNavigation} theme={'black'} />
      <SearchForm />
      <section className='movies'>
        <MoviesCardList movies={movies} setMovies={setMovies} />
      </section>
      <Footer />
    </>
  );
};

export default Movies;