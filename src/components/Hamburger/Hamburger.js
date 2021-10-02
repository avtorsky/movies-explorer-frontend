import './Hamburger.css';

const Hamburger = ({ openSideNavigation }) => {
  const handleClick = () => {
    openSideNavigation();
  };

  return (
    <nav className='burger'>
      <figure className='burger__button' onClick={handleClick}>
        <span className='burger__line' />
        <span className='burger__line' />
        <span className='burger__line' />
      </figure>
    </nav>

  );
};

export default Hamburger;