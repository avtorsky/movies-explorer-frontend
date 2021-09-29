import './Profile.css';
import { useState, useEffect, useCallback } from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import { validateInput, validator } from '../../utils/validation';
import { minInputLength } from '../../utils/constants';

const Profile = ({ isTablet, isLoggedIn, openSideNavigation }) => {
  const [isDisabledState, setIsDisabledState] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    name: {
      required: true,
      minLength: true,
    },
    email: {
      required: true,
      email: true,
    }
  });

  useEffect(() => {
    setIsDisabledState(true);
    return () => {
      setFormValues({
        name: '',
        email: '',
      });
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsProcessing(true);
  };

  const handleInputChange = useCallback((event) => {
    setIsDisabledState(false);
    const {name, value} = event.target;
    setFormValues((state) => ({...state, [name]: value}));
  }, [setFormValues]);

  useEffect(
    function validateInputs() {
      const {name, email} = formValues;
      const nameValidation = validateInput(validator.name, name);
      const emailValidation = validateInput(validator.email, email);
      setErrors({
        name: nameValidation,
        email: emailValidation,
      });
    }, [formValues, setErrors]
  );

  const {name, email} = formValues;
  const isNameInvalid = Object.values(errors.name).some(Boolean);
  const isEmailInvalid = Object.values(errors.email).some(Boolean);
  const isSubmitDisabled = isNameInvalid || isEmailInvalid;
  const isNameValid = errors.name.required || errors.name.minLength;
  const isEmailValid = errors.email.required || errors.email.email;
  const isDisabled = isDisabledState || isSubmitDisabled || isProcessing;

  return (
    <>
      <Header isTablet={isTablet} isLoggedIn={'true'} openSideNavigation={openSideNavigation} theme={'black'} />
      <section className='profile'>
        <h3 className='profile__title'>{`Привет, ${name}!`}</h3>
        <form className='profile__form' name='profile' onSubmit={handleSubmit} noValidate>
          <fieldset className='profile__form-fieldset'>
            <div className='profile__form-container'>
              <p className='profile__form-caption'>Имя</p>
              <label className='profile__form-label'>
                <input
                  className={`profile__form-input ${isDisabledState ? '' : isNameInvalid && 'profile__form-input_type_error'}`}
                  name='name'
                  id='name-input'
                  value={name}
                  onChange={handleInputChange}
                  type='text'
                  placeholder='Новое имя'
                  minLength={minInputLength}
                  required
                />
                <span className={`profile__form-error ${isDisabledState ? '' : isNameInvalid && 'profile__form-error_visible'}`}>
                  {isNameValid
                    ? errors.name.required
                      ? 'Имя должно быть, его не может не быть.'
                      : `Укажите имя из не менее ${minInputLength} символов.`
                    : ''}
                </span>
              </label>
            </div>
            <div className='profile__form-container'>
              <p className='profile__form-caption'>Email</p>
              <label className='profile__form-label'>
                <input
                  className={`profile__form-input ${isDisabledState ? '' : isEmailInvalid && 'profile__form-input_type_error'}`}
                  name='email'
                  id='email-input'
                  value={email}
                  onChange={handleInputChange}
                  type='email'
                  placeholder='Новый email'
                  required
                />
                <span className={`profile__form-error ${isDisabledState ? '' : isEmailInvalid && 'profile__form-error_visible'}`}>
                  {isEmailValid
                    ? errors.email.required
                      ? 'Это обязательное поле.'
                      : 'Укажите корректный email.'
                    : ''}
                </span>
              </label>
            </div>
          </fieldset>
          <Button text={isProcessing ? 'Сохранение...' : 'Редактировать'} additionalClass={isDisabled && 'button_disabled'} type={'edit'} buttonType='submit' />
        </form>
        <Button text={'Выйти из аккаунта'} type={'logout'} />
      </section>
    </>
  );
};

export default Profile;