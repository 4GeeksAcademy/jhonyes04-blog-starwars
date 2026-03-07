import { Outlet } from 'react-router-dom/dist';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <>
            <header className="sticky-top">
                <Navbar />
            </header>
            {/* <div className="linea"></div> */}
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};
