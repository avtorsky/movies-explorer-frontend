import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = ({ isTablet, isLoggedIn, openSideNavigation, movies, setMovies }) => {
  const favorites = movies.filter((movie) => movie.status === 'saved' && movie);

  return (
    <> 
      <Header isTablet={isTablet} isLoggedIn={'true'} openSideNavigation={openSideNavigation} theme={'black'} />
      <SearchForm />
      <section className='favorites'>  
        <MoviesCardList movies={favorites} setMovies={setMovies} />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;