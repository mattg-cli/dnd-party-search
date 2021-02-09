// import Header from './Header';
// import Footer from './Footer';
import Link from 'next/link'

const PartyCard = ({index, name, description, icon}) => {
  return (
    <div className="col-lg-4">
      <Link href="/">
        <div className="card hover-dash-right mb-3">
          <div className="card-body ">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PartyCard;