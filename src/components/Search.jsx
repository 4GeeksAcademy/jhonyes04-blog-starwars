import { useEffect, useState } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link, useNavigate } from 'react-router-dom';
import { Home } from '../pages/Home';

const ELEMENTOS_MOSTRAR = 5;

export const Search = () => {
    const { store, dispatch } = useGlobalReducer();
    const { personajes, vehiculos, planetas } = store;
    const [encontrados, setEncontrados] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();

    const todosElementos = [
        ...(personajes || []),
        ...(vehiculos || []),
        ...(planetas || []),
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
                    <span className="input-group-text bg-warning border-end-0">
                        <i className="fa-solid fa-magnifying-glass text-dark"></i>
                    </span>
                    <input
                        type="search"
                        className="form-control bg-transparent text-warning"
                        placeholder="Buscar"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
            </form>
            {busqueda && (
                <ul className="list-group position-absolute w-100 mt-1">
                    {encontrados.length > 0 ? (
                        <>
                            {encontadosVisibles.map((item) => (
                                <li
                                    className="group-item list-group-item bg-dark text-warning border-secondary "
                                    key={item._id}
                                >
                                    <Link
                                        to={`/details/${item._id}`}
                                        className="text-decoration-none text-warning d-blod"
                                        onClick={() => setBusqueda('')}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="img-fluid me-2"
                                            width={50}
                                        />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                            {encontrados.length > ELEMENTOS_MOSTRAR && (
                                <li className="group-item list-group-item bg-dark border-secondary">
                                    <button
                                        onClick={handleClickVerTodos}
                                        className="btn btn-warning w-100"
                                    >
                                        Ver todos los resultados (
                                        {encontrados.length})
                                    </button>
                                </li>
                            )}
                        </>
                    ) : (
                        <li className="list-group-item bg-dark text-muted">
                            No existen resultados
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};
