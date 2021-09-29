import './AboutProject.css';
import HeaderSection from '../HeaderSection/HeaderSection';

const AboutProject = () => {
  return (
    <section id='about' className='project'>
      <HeaderSection title={'О проекте'} />
      <section className='project__info'>
        <div className='project__info-box'>
          <p className='project__info-title'>Дипломный проект включал 5 этапов</p>
          <p className='project__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='project__info-box'>
          <p className='project__info-title'>На выполнение диплома ушло 5 недель</p>
          <p className='project__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </section>
      <section className='project__progress'>
        <div className='project__stage project__stage_type_backend'>1 неделя</div>
        <p className='project__name project__name_type_backend'>Backend</p>
        <div className='project__stage project__stage_type_frontend'>4 недели</div>
        <p className='project__name project__name_type_frontend'>Frontend</p>
      </section>
    </section>
  );
};

export default AboutProject;