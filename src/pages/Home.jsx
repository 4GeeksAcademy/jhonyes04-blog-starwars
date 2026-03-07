import { useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { getData } from '../services/starwars.api';
import { HomeTexto } from '../components/HomeTexto';
import { Carrusel } from '../components/Carrusel';

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                await getData(dispatch, 'characters');
                await getData(dispatch, 'vehicles');
                await getData(dispatch, 'locations');
            } catch (error) {
                console.error('Error al obtener todos los datos:', error);
            }
        };

        obtenerDatos();
    }, []);
    return (
        <div className="container bg-semitransparente rounded-4 text-center text-warning p-3 my-3">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <Carrusel store={store} />
                </div>
                <div className="col-12 col-lg-6">
                    <HomeTexto />
                </div>
            </div>
        </div>
    );
};
