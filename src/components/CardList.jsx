import { useState } from 'react';
import { Card } from './Card';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const CardList = ({ titulo, elementos }) => {
    const { store, dispatch } = useGlobalReducer();
    const { favoritos, filtroActivo } = store;

    const elementosFiltrados =
        filtroActivo === 'todos'
            ? elementos
            : elementos.filter((elemento) =>
                  favoritos.some((favorito) => favorito._id === elemento._id),
              );

    const handleClickAcambiarFiltro = (nuevoFiltro) => {
        dispatch({
            type: 'FILTRO',
            payload: nuevoFiltro,
        });
    };

    return (
        <div className="container my-4">
            <div className="d-flex align-items-center bg-title mb-4 p-2">
                <h1 className="text-warning m-0 ms-4 d-flex flex-grow-1">
                    {titulo}
                </h1>
                {titulo.toLowerCase() !== 'favoritos' && (
                    <div className="d-flex flex-grow-0 gap-2 me-4">
                        <button
                            className={`btn btn-sm ${filtroActivo === 'todos' ? 'btn-warning fw-bold' : 'btn-outline-warning'}`}
                            onClick={() => handleClickAcambiarFiltro('todos')}
                        >
                            Todos
                        </button>
                        <button
                            className={`btn btn-sm ${filtroActivo === 'favoritos' ? 'btn-warning fw-bold' : 'btn-outline-warning'}`}
                            onClick={() =>
                                handleClickAcambiarFiltro('favoritos')
                            }
                        >
                            <i className="fa-solid fa-heart"></i>
                        </button>
                    </div>
                )}
            </div>
            {elementosFiltrados.length > 0 ? (
                <div className="card-body row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {elementosFiltrados.map((elemento) => (
                        <Card key={elemento._id} elemento={elemento} />
                    ))}
                </div>
            ) : (
                <h2 className="bg-semitransparente rounded-4 p-5 text-center text-warning fw-bold mt-5">
                    No tienes favoritos
                </h2>
            )}
        </div>
    );
};
