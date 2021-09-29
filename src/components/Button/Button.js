import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ text, type, onClick, disabled, buttonType, closeSideNavigation, additionalClass }) => {
  return (
    <>
      {type === 'login' ? (
        <Link className='button button_type_login' to='/signin'>{text}</Link>
      ) : type === 'account' ? (
        <Link className='button button_type_account' onClick={closeSideNavigation} to='/profile'>{text}</Link>
      ) : (
        <button className={`
          button  
            ${type === 'save' && `button_type_save ${additionalClass}`}
            ${type === 'saved' && 'button_type_saved'}
            ${type === 'delete' && `button_type_delete ${additionalClass}`}
            ${type === 'next' && 'button_type_next'}
            ${type === 'more' && 'button_type_more'}
            ${type === 'search' && 'button_type_search'}
            ${type === 'edit' && `button_type_edit ${additionalClass}`}
            ${type === 'logout' && 'button_type_logout'}
            ${type === 'register' && `button_type_register ${additionalClass}`}
            ${type === 'login-form' && `button_type_login-form ${additionalClass}`}
            ${type === 'close' && `button_type_close ${additionalClass}`}
            `}
          type={buttonType || 'button'}
          onClick={onClick}
          disabled={disabled}
        >{text}</button>
      )}
    </>
  );
};

export default Button;