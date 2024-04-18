/* import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders"; */

import Banner from "./Banner";
import Properties from "./Properties";



const Home = () => {

    /* const authInfo = useContext(AuthContext)
    console.log(authInfo) */
    return (
        <div>
            <Banner></Banner>
            <Properties></Properties>
        </div>
    );
};

export default Home;