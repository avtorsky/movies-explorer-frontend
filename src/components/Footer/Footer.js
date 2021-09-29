import './Footer.css';

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <section className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__stroke' />
      <div className='footer__data'>
        <p className='footer__copyright'>&copy; {currentDate}</p>
        <ul className='footer__list'>
          <li className='footer__list-item'>
            <a href='https://practicum.yandex.com/web/' target='blank' className='footer__link' rel='noreferrer'>Яндекс.Практикум</a>
          </li>
          <li className='footer__list-item'>
            <a href='https://github.com/avtorsky' target='_blank' className='footer__link' rel='noreferrer'>GitHub</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;