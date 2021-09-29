import './AboutMe.css';
import authorImage from '../../images/author__image.png';
import HeaderSection from '../HeaderSection/HeaderSection';

const AboutMe = () => {
  return (
    <section id='student' className='author'>
      <HeaderSection title={'Студент'}/>
      <section className='author__content'>
        <div className='authour__info'>
          <p className='author__name'>avtorsky</p>
          <p className='author__status'>Младший каратель багов</p>
          <p className='author__about'>
          В текущий момент изучаю алгоритмы по книге А. Бхаргава "Грокаем алгоритмы", в которой уже прошёл решение задач по быстрой сортировке, рекурсии, поиску в ширину и алгоритму Дейкстры. С удовольствием пишу API и конфиги веб-серверов, а вот интерфейсы верстаю со скрипом в пальцах. Надеюсь, вам нравится эта страничка и её вёрстка, так как мне пришлось очень постараться, чтобы получилось по красоте.
          </p>
          <ul className='author__links'>
            <li className='author__item-link'>
              <a href='https://github.com/avtorsky' target='_blank' rel='noreferrer' className='author__link'>github.com/avtorsky</a>
            </li>
            <li className='author__item-link'>
              <a href='https://www.hackerrank.com/avtorsky' target='_blank' rel='noreferrer' className='author__link'>hackerrank.com/avtorsky</a>
            </li>
          </ul>
        </div>
        <img className='author__image' src={authorImage} alt='Умный, красивый, в меру упитанный мужчина'/>
      </section>
    </section>
  );
};

export default AboutMe;