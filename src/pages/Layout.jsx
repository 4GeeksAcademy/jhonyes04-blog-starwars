import { useEffect } from 'react';
import { Outlet } from 'react-router-dom/dist';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import useGlobalReducer from '../hooks/useGlobalReducer';

import { getData } from '../api/starwars.api';

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const { store, dispatch } = useGlobalReducer();
    const { personajes, vehiculos, lugares } = store;

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                if (personajes.length === 0)
                    await getData(dispatch, 'characters');
                if (vehiculos.length === 0) await getData(dispatch, 'vehicles');
                if (lugares.length === 0) await getData(dispatch, 'locations');
            } catch (error) {
                console.error('Error al obtener todos los datos:', error);
            }
        };

        obtenerDatos();
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="sticky-top">
                <Navbar />
            </div>
            <div className="flex-grow-1">
                <Outlet />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
