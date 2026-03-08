import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Badge } from '../components/Badge';

export const Details = ({ pagina }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();
    const { personajes, vehiculos, lugares, favoritos } = store;
    const [detalles, setDetalles] = useState(null);

    useEffect(() => {
        const todos = [...personajes, ...vehiculos, ...lugares];
        const elementoEncontado = todos.find(
            (item) => String(item._id) === String(id),
        );

        setDetalles(elementoEncontado);
    }, [id, personajes, vehiculos, lugares]);

    if (!detalles) return <div className="container mt-5">Cargando...</div>;

    const esFavorito = favoritos.some((favorito) => favorito._id === id);

    const handleClickFavorito = (favorito) => {
        dispatch({
            type: 'FAVORITOS',
            payload: favorito,
        });
    };

    return (
        <div className="container my-5 details-card-max-width">
            <div className="card">
                <div className="position-relative">
                    <img
                        src={detalles.image}
                        alt={detalles.name}
                        className="card-img-top"
                        width={100}
                        height={350}
                    />
                    {/* <div className="position-absolute bottom-0 end-0 m-2 badge text-bg-warning">
                        {detalles.tipo}
                    </div> */}
                    <Badge
                        label={detalles.tipo}
                        colorFondo={'bg-warning'}
                        colorLabel={'text-dark'}
                        posicion={'bottom-right'}
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{detalles.name}</h5>
                    <p className="card-text text-justify">
                        {detalles.description}
                    </p>
                    <div className="d-flex justify-content-end gap-2">
                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-outline-warning"
                        >
                            <i className="fa-solid fa-circle-left"></i>
                        </button>
                        <i
                            onClick={() => handleClickFavorito(detalles)}
                            className={`${esFavorito ? 'fa-solid' : 'fa-regular'} fa-heart fa-2x text-warning align-self-center cursor-pointer`}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
