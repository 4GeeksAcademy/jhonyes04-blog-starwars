import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Lugares = () => {
    const { store, dispatch } = useGlobalReducer();
    const { lugares, totales } = store;

    const total =
        totales.find((total) => total.item === 'locations')?.total || 0;

    const paginacion = usePaginacion(dispatch, 'locations', lugares);

    return (
        <>
            <CardList
                titulo="Lugares"
                elementos={lugares}
                total={total}
                paginacion={paginacion}
            />
        </>
    );
};
