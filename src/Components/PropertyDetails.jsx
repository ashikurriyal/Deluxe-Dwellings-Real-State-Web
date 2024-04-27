import { useLoaderData, useParams } from "react-router-dom";
import { FaLandmark } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const PropertyDetails = () => {

    const properties = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const property = properties.find(property => property.id === idInt)
    return (
        <section className="flex flex-col items-center mb-12">
            <Helmet>
                <title>
                    Deluxe Dwellings | {property.segment_name} Details
                </title>
            </Helmet>
            <div className="text-center mb-10 mt-6" data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="2500">
                <h1 className="text-5xl font-playfair font-bold text-sky-600">{property.segment_name} Details </h1>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-2xl mb-12 gap-4 " data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="2500">
                <img className="lg: w-[620px]" src={property.image} alt="Album" />
                <div className="card-body gap-4">
                    <h2 className="card-title text-4xl">
                        {property.estate_title}
                        <hr />
                    </h2>
                    {/* <p className="text-xl">{property.description}</p> */}
                    <p className="text-xl">{property.description}</p>

                    <div className="  flex font-worksans font-medium text-base gap-3 text-sky-500 items-center">
                        <span className="text-[#131313] font-worksans font-bold text-base">Facilities</span>
                        {property.facilities.map(tag => <div className="flex" key={property.facilities.id}><p className="bg-[#0a58be0d] rounded-2xl  px-3 py-1 border-sky-500 border-2" >{tag}</p></div>)}
                    </div>
                    <div className="flex gap-8" >
                        <div className="bg-sky-600 flex flex-col items-center text-white  shadow-2xl rounded-md p-2 gap-2">
                            <h1 className="text-xl font-medium">Area</h1>
                            <div className="text-2xl">
                                <FaLandmark />
                            </div>
                            <p className="text-xl font-medium">{property.area}</p>
                        </div>
                        <div className="bg-sky-600 flex flex-col items-center text-white shadow-2xl rounded-md p-2 gap-2">
                            <h1 className="text-xl font-medium">Location</h1>
                            <div className="text-2xl">
                                <IoLocationSharp />
                            </div>
                            <p className="text-xl font-medium">{property.location}</p>
                        </div>
                        <div className="bg-sky-600 flex flex-col items-center text-white shadow-2xl rounded-md p-2 gap-2">
                            <h1 className="text-xl font-medium">Price</h1>
                            <div className="text-2xl">
                                <IoMdPricetags />
                            </div>
                            <p className="text-xl font-medium">{property.price}</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    );
};

export default PropertyDetails;