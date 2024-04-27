import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Property = ({ property }) => {

    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image } = property
    return (
        <Link to={`/property/${id}`}>

            <section className="p-4 lg:p-8 bg-gray-200 dark:text-gray-800 shadow-2xl rounded-l-md " data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={image} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            {/* <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span> */}
                            <h3 className="text-3xl font-bold">{estate_title}</h3>
                            <p className="my-6 dark:text-gray-600 text-lg">{description}</p>
                            <button type="button" className="self-start btn border-sky-500 border-2 text-sky-500  text-base font-medium">View Details</button>
                        </div>
                    </div>
                </div>
            </section>
        </Link>
    );
};

export default Property;

Property.propTypes = {
    property: PropTypes.object
}

