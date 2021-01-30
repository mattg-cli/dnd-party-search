// import Header from './Header';
// import Footer from './Footer';

const Aspect = ({index, title, description, icon}) => {
  return (
    <div className="col-xs-12 col-md-6 col-lg-3">
      <div className="card shadow-lg my-1">
        <div className="card-body text-center">
          <i className={`${icon} fa-3x`}></i>
          <h5 className="card-title mt-2">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Aspect;