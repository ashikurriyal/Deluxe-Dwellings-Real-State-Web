import { useEffect, useState } from "react";
import Property from "./Property";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Properties = () => {
    const [property, setProperty] = useState([])



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProperty(data))

    }, [])
    return (
        <div className="flex flex-col items-center mb-12" >
            <div className="text-center mb-10 mt-12">
                <h1 className="text-5xl font-playfair font-bold text-sky-600">Our Properties</h1>
            </div>
            <div className="flex  flex-col gap-14 "
                >
                {
                    property.map(property => <Property key={property.id} property={property}></Property>)
                }
            </div>
        </div>
    );
};

export default Properties;