/* import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders"; */

import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Properties from "./Properties";



const Home = () => {

    
    return (
        <div>
            <Helmet>
                <title>
                    Deluxe Dwellings | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Properties></Properties>
        </div>
    );
};

export default Home;