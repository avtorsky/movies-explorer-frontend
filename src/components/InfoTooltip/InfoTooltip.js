import './InfoTooltip.css';
import successIcon from '../../images/infotooltip_success.svg';
import errorIcon from '../../images/infotooltip_error.svg';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';

const InfoTooltip = ({ isInfoTooltipOpen, setIsInfoTooltipOpen, isSuccessful }) => {
  const history = useHistory();
  
  const handleCloseClick = () => {
    setIsInfoTooltipOpen(false);
    isSuccessful && history.push('/movies');
  };

  return (
    <section className={`tooltip ${isInfoTooltipOpen && 'tooltip_opened'}`}>
      <div className='tooltip__container'>
        <Button type={'close'} onClick={handleCloseClick} additionalClass={'button_type_close_tooltip'} />
        <img className='tooltip__icon' src={isSuccessful ? successIcon : errorIcon} alt='Запрос обработан на сервере.' />
        <h2 className='tooltip__title'>
          {isSuccessful ? 'Запрос обработан на сервере.' : 'Ошибка обработки запроса на сервере.'}
        </h2>
      </div>
    </section>
  );
};

export default InfoTooltip;