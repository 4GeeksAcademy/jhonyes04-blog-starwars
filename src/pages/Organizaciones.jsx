import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Organizaciones = () => {
    const { store, dispatch } = useGlobalReducer();
    const { organizaciones, totales } = store;

    const total =
        totales.find((total) => total.item === 'organizations')?.total || 0;

    const paginacion = usePaginacion(dispatch, 'organizations', organizaciones);

    return (
        <>
            <CardList
                titulo="Organizaciones"
                elementos={organizaciones}
                total={total}
                paginacion={paginacion}
            />
        </>
    );
};
