import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const NUMERO_IMAGENES = 6;
const INTERVALO_CAMBIO_IMAGEN = 5000;

export const Carrusel = ({ store }) => {
    const { personajes, vehiculos, lugares } = store;
    const [seleccion, setSeleccion] = useState([]);
    const [cargando, setCargando] = useState(true);
    const generado = useRef(false);

    const obtenerAleatorios = (elementos, numeroElementos) => {
        const copiaElementos = [...elementos];
        // Algoritmo Fisher-Yates
        for (let i = copiaElementos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copiaElementos[i], copiaElementos[j]] = [
                copiaElementos[j],
                copiaElementos[i],
            ];
        }
        return copiaElementos.slice(-numeroElementos);
    };

    useEffect(() => {
        const datosCargados =
            personajes.length > 0 && vehiculos.length > 0 && lugares.length > 0;

        if (!generado.current && datosCargados) {
            const todos = [...personajes, ...vehiculos, ...lugares];

            const aleatorios = obtenerAleatorios(todos, NUMERO_IMAGENES);

            setSeleccion(aleatorios);
            generado.current = true;
            setCargando(false);
        }
    }, [personajes, vehiculos, lugares]);

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
