import { Outlet } from 'react-router-dom/dist';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="sticky-top">
                <Navbar />
            </div>
            {/* <div className="linea"></div> */}
            <div className="flex-grow-1">
                <Outlet />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
