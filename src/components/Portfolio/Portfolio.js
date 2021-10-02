import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a href='https://github.com/avtorsky/russian-travel' target='_blank' className='portfolio__link' rel='noreferrer'>
            <p className='portfolio__link-title'>Статичный сайт</p>
            <p className='portfolio__link-icon'>&#8599;</p>
          </a>
        </li>
        <li className='portfolio__item'>
          <a href='https://github.com/avtorsky/mesto' target='_blank' className='portfolio__link' rel='noreferrer'>
            <p className='portfolio__link-title'>Адаптивный сайт</p>
            <p className='portfolio__link-icon'>&#8599;</p>
          </a>
        </li>
        <li className='portfolio__item'>
          <a href='https://github.com/avtorsky/react-mesto-api-full' target='_blank' className='portfolio__link' rel='noreferrer'>
            <p className='portfolio__link-title'>Одностраничное приложение</p>
            <p className='portfolio__link-icon'>&#8599;</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;