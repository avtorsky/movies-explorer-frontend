import './Promo.css';
import promoLogo from '../../images/promo__image.svg';

const Promo = () => {
  return (
    <section className='promo'>
      <img className='promo__image' src={promoLogo} alt='Логотип учебного проекта' />
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
    </section>
  );
};

export default Promo;