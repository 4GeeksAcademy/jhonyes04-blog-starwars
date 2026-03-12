import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Badge } from './Badge';
import { useEffect } from 'react';

export const Card = ({ elemento }) => {
    const { _id, name, description, image, tipo } = elemento;
    const { store, dispatch } = useGlobalReducer();
    const { favoritos } = store;

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll(
            '[data-bs-toggle="tooltip"]',
        );
        const tooltipList = [...tooltipTriggerList].map(
            (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
        );

        return () => tooltipList.forEach((tooltip) => tooltip.dispose());
    }, [favoritos]);

    const caracteres = 150;

    const descripcionCorta =
        description.length > caracteres
            ? `${description.substring(0, caracteres)}...`
            : description;

    const esFavorito = favoritos.some((favorito) => favorito._id === _id);

    const handleClickFavorito = (favorito) => {
        dispatch({
            type: 'FAVORITOS',
            payload: favorito,
        });
    };

    return (
        <div>
            <div className="card h-100">
                <div className="position-relative">
                    <img
                        src={image}
                        alt={name}
                        className="card-img-top"
                        width={100}
                        height={170}
                    />
                    <Badge
                        label={tipo}
                        colorFondo={'bg-warning'}
                        colorLabel={'text-dark'}
                        posicion={'bottom-right'}
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <p className="card-text text-justify">{descripcionCorta}</p>
                    <div className="d-flex justify-content-between mt-auto">
                        <Link
                            to={`/details/${_id}`}
                            className="btn btn-outline-warning"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Más información"
                        >
                            <i className="fa-solid fa-circle-info"></i>
                        </Link>
                        <i
                            onClick={() => handleClickFavorito(elemento)}
                            className={`${esFavorito ? 'fa-solid' : 'fa-regular'} fa-heart fa-2x text-warning align-self-center cursor-pointer`}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title={
                                esFavorito
                                    ? 'Quitar de favoritos'
                                    : 'Agregar a favoritos'
                            }
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
