import './Techs.css';
import HeaderSection from '../HeaderSection/HeaderSection';
import Stack from '../Stack/Stack';
import { techs } from '../../utils/constants';

const Techs = () => {
  return (
    <section className='techs' id='techs'>
      <HeaderSection title={'Технологии'} />
      <section className='techs__content'>
        <h2 className='techs__title'>7 технологий</h2>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className='techs__list'>
          {techs.map((tech, i) => (
            <li key={i} className='techs__list-item'>
              <Stack name={tech} />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Techs;