// import Header from './Header';
// import Footer from './Footer';
import Link from 'next/link'

const PartyCard = ({partyId, name, description, created}) => {
  return (
    <div className="col-lg-4">
      <Link href={`party/${partyId}`}>
        <div className="card hover-dash-right mb-3">
          <div className="card-header">
            <h5 className="card-title mb-0">{name}</h5>
          </div>
          <div className="card-body">
            <span>Created: {created}</span>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PartyCard;