import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Especies = () => {
    const { store, dispatch } = useGlobalReducer();
    const { especies, totales } = store;

    const total = totales.find((total) => total.item === 'species')?.total || 0;

    const paginacion = usePaginacion(dispatch, 'species', especies);

    return (
        <>
            <CardList
                titulo="Especies"
                elementos={especies}
                total={total}
                paginacion={paginacion}
            />
        </>
    );
};
