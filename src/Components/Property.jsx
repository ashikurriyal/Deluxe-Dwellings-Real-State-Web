import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Property = ({ property }) => {

    const {id, estate_title, segment_name, description, price, status, area, location, facilities, image} = property
    return (
        <Link to={`/property/${id}`}>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Property;

Property.propTypes = {
    property: PropTypes.object
}

