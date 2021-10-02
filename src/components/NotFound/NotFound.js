import './NotFound.css';
import { useHistory, Link } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className='notfound'>
      <p className='notfound__code'>404</p>
      <p className='notfound__status'>Страница не найдена</p>
      <Link className='notfound__link' onClick={handleGoBack} to='/'>Назад</Link>
    </div>
  );
};

export default NotFound;