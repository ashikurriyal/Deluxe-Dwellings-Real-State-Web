
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';



const Root = () => {
    return (
        <div >
            <div className='lg:px-32 px-6'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Root;