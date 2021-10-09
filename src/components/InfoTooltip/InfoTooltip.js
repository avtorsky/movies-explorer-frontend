import './InfoTooltip.css';
import Button from '../Button/Button';
import errorIcon from '../../images/infotooltip_error.svg';
import successIcon from '../../images/infotooltip_success.svg';

const InfoTooltip = ({ infoTooltipState, setInfoTooltipState }) => {
  const { tooltipOpen, isSuccessful, message } = infoTooltipState;
  
  const handleCloseClick = () => {
    setInfoTooltipState({
      tooltipOpen: false,
      isSuccessful: isSuccessful,
      message: message,
    });
  };

  return (
    <section className={`tooltip ${tooltipOpen && 'tooltip_opened'}`}>
      <div className='tooltip__container'>
        <Button type={'close'} onClick={handleCloseClick} additionalClass={'button_type_close_tooltip'} />
        <img className='tooltip__icon' src={isSuccessful ? successIcon : errorIcon} alt='Запрос обработан на сервере.' />
        <h2 className='tooltip__title'>{message}</h2>
      </div>
    </section>
  );
};

export default InfoTooltip;