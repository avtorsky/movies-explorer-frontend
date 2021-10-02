import './Register.css';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { validateInput, validator } from '../../utils/validation';
import { minInputLength, maxInputLength } from '../../utils/constants';

const Register = () => {
  const [isDisabledState, setIsDisabledState] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    name: {
      required: true,
      minLength: true,
      maxLength: true,
    },
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minLength: true,
    },
  });

  useEffect(() => {
    setIsDisabledState(true);
    return () => {
      setFormValues({
        name: '',
        email: '',
        password: '',
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
      const {name, email, password} = formValues;
      const nameValidation = validateInput(validator.name, name);
      const emailValidation = validateInput(validator.email, email);
      const passwordValidation = validateInput(validator.password, password)
      setErrors({
        name: nameValidation,
        email: emailValidation,
        password: passwordValidation,
      });
    }, [formValues, setErrors]);

  const {name, email, password} = formValues;
  const isNameInvalid = Object.values(errors.name).some(Boolean);
  const isEmailInvalid = Object.values(errors.email).some(Boolean);
  const isPasswordInvalid = Object.values(errors.password).some(Boolean);
  const isSubmitDisabled = isNameInvalid || isEmailInvalid || isPasswordInvalid;
  const isNameValid = errors.name.required || errors.name.minLength || errors.name.maxLength;
  const isEmailValid = errors.email.required || errors.email.email;
  const isPasswordValid = errors.password.required || errors.password.minLength;
  const isDisabled = isDisabledState || isSubmitDisabled || isProcessing;

  return (
    <section className='register'>
      <div className='register__logo'>
        <Logo />
      </div>
      <h3 className='register__title'>Добро пожаловать!</h3>
      <form className='register__form' name='register' onSubmit={handleSubmit} noValidate>
        <fieldset className='register__form-fieldset'>
          <div className='register__form-container'>
            <p className='register__form-caption'>Имя</p>
            <label className='register__form-label'>
              <input
                className={`register__form-input ${isDisabledState ? '' : isNameInvalid && 'register__form-input_type_error'}`}
                name='name'
                id='name-input'
                value={name}
                onChange={handleInputChange}
                type='text'
                placeholder={`Не менее ${minInputLength} символов`}
                minLength={minInputLength}
                required
              />
              <span className={`register__form-error ${isDisabledState ? '' : isNameInvalid && 'register__form-error_visible'}`}>
                {isNameValid
                  ? errors.name.required
                    ? 'Имя должно быть, его не может не быть.'
                    : errors.name.minLength
                    ? `Укажите имя из не менее ${minInputLength} символов.`
                    : errors.name.maxLength && `Превышен лимит для имени в ${maxInputLength} символов`
                  : ''}
              </span>
            </label>
          </div>
          <div className='register__form-container'>
            <p className='register__form-caption'>Email</p>
            <label className='register__form-label'>
              <input
                className={`register__form-input ${isDisabledState ? '' : isEmailInvalid && 'register__form-input_type_error'}`}
                name='email'
                id='email-input'
                value={email}
                onChange={handleInputChange}
                type='email'
                placeholder='example@mail.ru'
                required
              />
              <span className={`register__form-error ${isDisabledState ? '' : isEmailInvalid && 'register__form-error_visible'}`}>
                {isEmailValid
                  ? errors.email.required
                    ? 'Это обязательное поле.'
                    : 'Укажите корректный email.'
                  : ''}
              </span>
            </label>
          </div>
          <div className='register__form-container'>
            <p className='register__form-caption'>Пароль</p>
            <label className='register__form-label'>
              <input
                className={`register__form-input ${isDisabledState ? '' : isPasswordInvalid && 'register__form-input_type_error'}`}
                name='password'
                id='password-input'
                value={password}
                onChange={handleInputChange}
                type='password'
                placeholder={`Не менее ${minInputLength} символов`}
                required
              />
              <span className={`register__form-error ${isDisabledState ? '' : isPasswordInvalid && 'register__form-error_visible'}`}>
                {isPasswordValid
                  ? errors.password.required
                    ? 'Пароль должен быть, его не может не быть.'
                    : `Укажите пароль из не менее ${minInputLength} символов.`
                  : ''}
              </span>
            </label>
          </div>
        </fieldset>
        <Button text={isProcessing ? 'Регистрация...' : 'Зарегистрироваться'} additionalClass={isDisabled && 'button_disabled'} type={'register'} buttonType='submit' />
      </form>
      <div className='register__registered'>
        <p className='register__login-title'>Уже зарегистрированы?</p>
        <Link className='register__login' to='/signin'>Войти</Link>
      </div>
    </section>
  );
};

export default Register;