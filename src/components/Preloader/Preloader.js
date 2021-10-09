import './Preloader.css'

const Preloader = ({ isProcessing }) => {
  return (
    <div className={`preloader ${isProcessing && 'preloader_opened'}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;