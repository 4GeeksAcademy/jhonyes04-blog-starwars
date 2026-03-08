import { useEffect, useState } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link, useNavigate } from 'react-router-dom';
import { Home } from '../pages/Home';

const ELEMENTOS_MOSTRAR = 5;

export const Search = () => {
    const { store, dispatch } = useGlobalReducer();
    const { personajes, vehiculos, lugares } = store;
    const [encontrados, setEncontrados] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();

    const todosElementos = [
        ...(personajes || []),
        ...(vehiculos || []),
        ...(lugares || []),
    ];

    useEffect(() => {
        if (busqueda.trim() === '') {
            setEncontrados([]);
            return;
        }

        const filtrados = todosElementos.filter((item) => {
            return item?.name?.toLowerCase().includes(busqueda.toLowerCase());
        });

        setEncontrados(filtrados);
    }, [busqueda]);

    const encontadosVisibles = encontrados.slice(0, ELEMENTOS_MOSTRAR);

    const handleClickVerTodos = () => {
        setBusqueda('');
        navigate('/busquedas');

        dispatch({
            type: 'BUSQUEDAS',
            payload: encontrados,
        });
    };

    return (
        <div className="bg-transparent position-relative">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                    <span className="input-group-text bg-warning border-end-0 border-warning">
                        <i className="fa-solid fa-magnifying-glass text-dark"></i>
                    </span>
                    <input
                        type="search"
                        className="form-control bg-transparent text-warning border-warning"
                        placeholder="Buscar"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
            </form>
            {busqueda && (
                <ul className="list-group position-absolute mt-1">
                    {encontrados.length > 0 ? (
                        <>
                            {encontadosVisibles.map((item) => (
                                <li
                                    className="group-item list-group-item text-bg-dark border-warning"
                                    key={item._id}
                                >
                                    <Link
                                        to={`/details/${item._id}`}
                                        className="d-flex justify-content-between align-items-center text-decoration-none  text-small"
                                        onClick={() => setBusqueda('')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="img-fluid me-2"
                                                width={50}
                                            />
                                            <p className="text-warning m-0">
                                                {item.name}
                                            </p>
                                        </div>
                                        <span className="badge text-bg-warning">
                                            {item.tipo}
                                        </span>
                                    </Link>
                                </li>
                            ))}

                            {encontrados.length > ELEMENTOS_MOSTRAR && (
                                <li className="group-item list-group-item bg-dark border-warning">
                                    <button
                                        onClick={handleClickVerTodos}
                                        className="btn btn-warning w-100"
                                    >
                                        Ver todos ({encontrados.length})
                                    </button>
                                </li>
                            )}
                        </>
                    ) : (
                        <li className="list-group-item bg-dark text-secondary border-warning">
                            No existen resultados
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};
