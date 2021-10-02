import './Login.css';
import Button from '../Button/Button';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { validateInput, validator } from '../../utils/validation';
import { minInputLength } from '../../utils/constants';
import Logo from '../Logo/Logo';

const Login = () => {
  const [isDisabledState, setIsDisabledState] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
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
      const {email, password} = formValues;
      const emailValidation = validateInput(validator.email, email);
      const passwordValidation = validateInput(validator.password, password);
      setErrors({
        email: emailValidation,
        password: passwordValidation,
      });
    }, [formValues, setErrors]
  );

  const {email, password} = formValues;
  const isEmailInvalid = Object.values(errors.email).some(Boolean);
  const isPasswordInvalid = Object.values(errors.password).some(Boolean);
  const isSubmitDisabled = isEmailInvalid || isPasswordInvalid;
  const isEmailValid = errors.email.required || errors.email.email;
  const isPasswordValid = errors.password.required || errors.password.minLength;
  const isDisabled = isDisabledState || isSubmitDisabled || isProcessing;

  return (
    <section className='login'>
      <div className='login__logo'>
        <Logo />
      </div>
      <h3 className='login__title'>Рады видеть!</h3>
      <form className='login__form' name='login' onSubmit={handleSubmit} noValidate>
        <fieldset className='login__form-fieldset'>
          <div className='login__form-container'>
            <p className='login__form-caption'>Email</p>
            <label className='login__form-label'>
              <input
                className={`login__form-input ${isDisabledState ? '' : isEmailInvalid && 'login__form-input_type_error'}`}
                name='email'
                id='email-input'
                value={email}
                onChange={handleInputChange}
                type='email'
                placeholder='Ваш email'
                required
              />
              <span className={`login__form-error ${isDisabledState ? '' : isEmailInvalid && 'login__form-error_visible'}`}>
                {isEmailValid
                  ? errors.email.required
                    ? 'Это обязательное поле.'
                    : 'Укажите корректный email.'
                  : ''}
                </span>
            </label>
          </div>
          <div className='login__form-container'>
            <p className='login__form-caption'>Пароль</p>
            <label className='login__form-label'>
              <input
                className={`login__form-input ${isDisabledState ? '' : isPasswordInvalid && 'login__form-input_type_error'}`}
                type='password'
                placeholder='Ваш пароль'
                name='password'
                id='password-input'
                value={password}
                onChange={handleInputChange}
                required
              />
              <span className={`login__form-error ${isDisabledState ? '' : isPasswordInvalid && 'login__form-error_visible'}`}>
                {isPasswordValid
                  ? errors.password.required
                    ? 'Пароль должен быть, его не может не быть.'
                    : `Укажите пароль из не менее ${minInputLength} символов.`
                  : ''}
                </span>
            </label>
          </div>
        </fieldset>
        <Button text={isProcessing ? 'Вход...' : 'Войти'} additionalClass={isDisabled && 'button_disabled'} type={'login-form'} buttonType='submit' />
      </form>
      <div className='login__noregister'>
        <p className='login__register-title'>Ещё не зарегистрированы?</p>
        <Link className='login__register' to='/signup'>Регистрация</Link>
      </div>
    </section>
  );
};

export default Login;