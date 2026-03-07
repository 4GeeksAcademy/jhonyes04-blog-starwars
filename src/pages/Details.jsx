import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const Details = ({ pagina }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();
    const { personajes, vehiculos, planetas, favoritos } = store;
    const [detalles, setDetalles] = useState(null);

    useEffect(() => {
        const todos = [...personajes, ...vehiculos, ...planetas];
        const elementoEncontado = todos.find(
            (item) => String(item._id) === String(id),
        );

        setDetalles(elementoEncontado);
    }, [id, personajes, vehiculos, planetas]);

    if (!detalles) return <div className="container mt-5">Cargando...</div>;

    const esFavorito = favoritos.some((favorito) => favorito._id === id);

    const handleClickFavorito = (favorito) => {
        dispatch({
            type: 'FAVORITOS',
            payload: favorito,
        });
    };

    return (
        <div className="container w-50 my-5">
            <div className="card">
                <img
                    src={detalles.image}
                    alt={detalles.name}
                    className="card-img-top"
                    width={100}
                    height={380}
                />
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
