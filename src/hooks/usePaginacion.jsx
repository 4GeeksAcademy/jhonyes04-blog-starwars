import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../api/starwars.api';

const PAGINA_INICIAL = 1;
const LIMITE_ELEMENTOS = 20;

export const usePaginacion = (dispatch, item, datosActuales) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalPaginas, setTotalPaginas] = useState(1);

    const page = parseInt(searchParams.get('page')) || PAGINA_INICIAL;
    const limit = parseInt(searchParams.get('limit')) || LIMITE_ELEMENTOS;

    useEffect(() => {
        const obtenerDatos = async () => {
            if (page < 1 || limit < 1) {
                setSearchParams({
                    page: PAGINA_INICIAL,
                    limit: LIMITE_ELEMENTOS,
                });
            }

            if (datosActuales && datosActuales.length > 0 && page === 1) {
            }

            const resultado = await getData(dispatch, item, page, limit);

            if (resultado && resultado.info) {
                const total =
                    Math.ceil(resultado.info.total / limit) || PAGINA_INICIAL;
                setTotalPaginas(total);

                if (page > total && total > 0) {
                    setSearchParams({ page: total, limit: limit });
                }
            }
        };

        obtenerDatos();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [item, dispatch, setSearchParams, page, limit]);

    const setPage = (nuevaPage) =>
        setSearchParams({ page: nuevaPage, limit: limit });
    const setLimit = (nuevoLimit) =>
        setSearchParams({ page: PAGINA_INICIAL, limit: nuevoLimit });

    return { page, limit, totalPaginas, setPage, setLimit };
};
