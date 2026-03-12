import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Droides = () => {
    const { store, dispatch } = useGlobalReducer();
    const { droides, totales } = store;

    const total = totales.find((total) => total.item === 'droids')?.total || 0;

    const paginacion = usePaginacion(dispatch, 'droids', droides);

    return (
        <>
            <CardList
                titulo="Droides"
                elementos={droides}
                total={total}
                paginacion={paginacion}
            />
        </>
    );
};
