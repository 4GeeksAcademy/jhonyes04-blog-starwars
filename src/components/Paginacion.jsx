import React from 'react';

export const Paginacion = ({
    paginaActual,
    totalPaginas,
    limit,
    onCambiarPage,
    onCambiarLimit,
}) => {
    const totalItemsAproximados = limit * totalPaginas;

    const cantidadOpciones = Math.ceil(totalItemsAproximados / 10);
    const opcionesLimit = Array.from(
        { length: cantidadOpciones },
        (_, index) => (index + 1) * 10,
    ).filter((opcion) => opcion <= 100);

    const handleChange = (e) => {
        let valor = Number(e.target.value);

        if (valor > totalPaginas) valor = totalPaginas;
        if (valor < 1 && e.targe.value !== '') valor = 1;

        if (valor >= 1 && valor <= totalPaginas) onCambiarPage(valor);

        onCambiarPage(valor);
    };

    return (
        <div className="d-flex flex-column flex-md-row justify-content-center aligh-items-center bg-title gap-3 my-2 p-2">
            <div className="d-flex justify-content-center align-items-center gap-2">
                <button
                    className="btn btn-sm btn-outline-warning"
                    onClick={() => onCambiarPage(paginaActual - 1)}
                    disabled={paginaActual === 1}
                >
                    <i className="fa-solid fa-circle-arrow-left"></i>
                </button>

                <div className="d-flex align-items-center gap-2 bg-semitransparente text-warning px-2 py-1 rounded-2 border border-warning">
                    <span className="small fw-bold text-warning">Sector:</span>
                    <input
                        type="number"
                        className="form-control form-control-sm text-center bg-transparent border-warning text-warning fw-bold"
                        value={paginaActual}
                        onChange={handleChange}
                        min={1}
                        max={totalPaginas}
                    />
                    <span className="small fw-bold text-warning text-nowrap">
                        de {totalPaginas}
                    </span>
                </div>

                <button
                    className="btn btn-sm btn-outline-warning"
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
