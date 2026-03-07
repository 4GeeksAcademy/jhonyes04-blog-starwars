import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useEffect, useRef, useState } from 'react';

const NUMERO_IMAGENES = 6;
const INTERVALO_CAMBIO_IMAGEN = 5000;

export const Carrusel = ({ store }) => {
    const { personajes, vehiculos, planetas } = store;
    const [seleccion, setSeleccion] = useState([]);
    const [cargando, setCargando] = useState(true);
    const generado = useRef(false);

    useEffect(() => {
        if (!generado.current) {
            const todos = [...personajes, ...vehiculos, ...planetas];

            if (todos.length > 0) {
                const aleatorios = [...todos]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, NUMERO_IMAGENES);

                setSeleccion(aleatorios);
                generado.current = true;
                setCargando(false);
            }
        }
    }, [personajes, vehiculos, planetas]);

    if (cargando) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="spinner-border text-warning mb-3" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <div
            id="carouselStarWars"
            className="carousel slide carousel-fade w-100 mb-4 border-2 border-warning"
            data-bs-ride="carousel"
            data-bs-pause="false"
            data-bs-interval={INTERVALO_CAMBIO_IMAGEN}
        >
            <div className="carousel-indicators d-flex justify-content-center gap-3">
                {seleccion.map((item, index) => (
                    <button
                        type="button"
                        data-bs-target="#carouselStarWars"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        key={index}
                    >
                        <img
                            src={item.image}
                            alt="thumb"
                            className="d-block miniatura"
                        />
                    </button>
                ))}
            </div>

            <div className="carousel-inner">
                {seleccion.map((item, index) => (
                    <div
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        key={item._id}
                    >
                        <Link to={`/details/${item._id}`}>
                            <img
                                src={item.image}
                                alt={item.name}
                                width={'100%'}
                                height={300}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
