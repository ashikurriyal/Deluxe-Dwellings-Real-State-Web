import { useEffect, useState } from "react";
import Property from "./Property";

const Properties = () => {
    const [property, setProperty] = useState([])

    useEffect(() => {
        fetch('data.JSON')
            .then(res => res.json())
            .then(data => setProperty(data))
    }, [])
    return (
        <div>
            <div className="text-center mb-10 mt-12">
                <h1 className="text-5xl font-playfair font-bold">Our Properties</h1>
            </div>
            <div className="lg:grid grid-cols-3 gap-6 mb-12 flex flex-col">
                {
                    // property.map(property => <Property key={property.id}property={property}></Property>)
                }
            </div>
        </div>
    );
};

export default Properties;