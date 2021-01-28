// import Header from './Header';
// import Footer from './Footer';
// import '../styles/Layout.module.css'

const Aspect = ({title, description, icon}) => {
  return (
    <div className="col">
      <div className="card shadow-lg">
        <div className="card-body text-center">
          <i className={`${icon} fa-3x`}></i>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Aspect;