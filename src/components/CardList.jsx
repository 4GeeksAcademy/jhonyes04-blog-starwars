import { Card } from './Card';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Paginacion } from './Paginacion';

export const CardList = ({ titulo, elementos, paginacion }) => {
    const { store, dispatch } = useGlobalReducer();
    const { favoritos, filtroActivo } = store;
    const { page, totalPaginas, setPage, limit, setLimit } = paginacion || {};

    const elementosFiltrados =
        filtroActivo === 'todos'
            ? elementos
            : elementos.filter((elemento) =>
                  favoritos.some((favorito) => favorito._id === elemento._id),
              );

    const renderizar = () => {
        if (titulo !== 'Favoritos' && elementos.length === 0) {
            return (
                <div className="d-flex flex-column align-items-center justify-content-center p-5">
                    <div
                        className="spinner-border text-warning mb-3"
                        role="status"
                    ></div>
                    <h2 className="text-warning fw-bold">
                        Cargando datos de la galaxia...
                    </h2>
                </div>
            );
        }

        if (elementosFiltrados.length === 0) {
            return (
                <h2 className="bg-semitransparente rounded-4 p-5 text-center text-warning fw-bold mt-5">
                    No tienes favoritos seleccionados
                </h2>
            );
        }

        return (
            <>
                {mostrarPaginacion && (
                    <Paginacion
                        paginaActual={page}
                        totalPaginas={totalPaginas}
                        limit={limit}
                        onCambiarPage={setPage}
                        onCambiarLimit={setLimit}
                    />
                )}
                <div className="card-body row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {elementosFiltrados.map((elemento) => (
                        <Card key={elemento._id} elemento={elemento} />
                    ))}
                </div>
                {mostrarPaginacion && (
                    <Paginacion
                        paginaActual={page}
                        totalPaginas={totalPaginas}
                        limit={limit}
                        onCambiarPage={setPage}
                        onCambiarLimit={setLimit}
                    />
                )}
            </>
        );
    };

    const handleClickAcambiarFiltro = (nuevoFiltro) => {
        dispatch({
            type: 'FILTRO',
            payload: nuevoFiltro,
        });
    };

    const mostrarPaginacion =
        filtroActivo === 'todos' && titulo !== 'Favoritos' && paginacion;

    return (
        <div className="container my-4">
            <div className="d-flex align-items-center bg-title mb-4 p-2">
                <h1 className="text-warning m-0 ms-4 d-flex flex-grow-1">
                    {titulo}
                </h1>

                {titulo !== 'Favoritos' && (
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
            {renderizar()}
        </div>
    );
};
