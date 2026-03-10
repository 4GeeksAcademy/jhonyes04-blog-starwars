import React from 'react';

export const Paginacion = ({
    paginaActual,
    totalPaginas,
    limit,
    onCambiarPage,
    onCambiarLimit,
}) => {
    const opcionesLimit = Array.from(
        { length: 10 },
        (_, index) => (index + 1) * 10,
    );

    return (
        <div className="d-flex flex-column flex-md-row justify-content-center aligh-items-center bg-title gap-3 my-2 p-2">
            <div className="d-flex justify-content-center align-items-center gap-2">
                <button
                    className="btn btn-sm btn-outline-warning px-4"
                    onClick={() => onCambiarPage(paginaActual - 1)}
                    disabled={paginaActual === 1}
                >
                    <i className="fa-solid fa-circle-arrow-left"></i>
                </button>

                <span className="text-bg-warning fw-bold px-3 border border-dark rounded-2 py-1">
                    Sector {paginaActual} / {totalPaginas}
                </span>

                <button
                    className="btn btn-sm btn-outline-warning px-4"
                    onClick={() => onCambiarPage(paginaActual + 1)}
                    disabled={paginaActual === totalPaginas}
                >
                    <i className="fa-solid fa-circle-arrow-right"></i>
                </button>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
                <label htmlFor="limit" className="text-warning small fw-bold">
                    Mostrar:
                </label>
                <select
                    name="limit"
                    id="limit"
                    className="form-select form-select-sm bg-dark text-warning border-warning"
                    style={{ width: '80px' }}
                    value={limit}
                    onChange={(e) => onCambiarLimit(Number(e.target.value))}
                >
                    {opcionesLimit.map((opcion) => (
                        <option value={opcion} key={opcion}>
                            {opcion}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
