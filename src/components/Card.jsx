import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const Card = ({ elemento }) => {
    const { _id, name, description, image, tipo } = elemento;
    const { store, dispatch } = useGlobalReducer();
    const { favoritos } = store;

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
                    <p className="position-absolute bottom-0 end-0 m-2 badge text-bg-warning">
                        {tipo}
                    </p>
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-justify">{descripcionCorta}</p>
                    <div className="d-flex justify-content-between mt-auto">
                        <Link
                            to={`/details/${_id}`}
                            className="btn btn-outline-warning"
                        >
                            <i className="fa-solid fa-circle-info"></i>
                        </Link>
                        <i
                            onClick={() => handleClickFavorito(elemento)}
                            className={`${esFavorito ? 'fa-solid' : 'fa-regular'} fa-heart fa-2x text-warning align-self-center cursor-pointer`}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
