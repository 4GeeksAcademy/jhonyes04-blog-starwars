import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Criaturas = () => {
    const { store, dispatch } = useGlobalReducer();
    const { criaturas, totales } = store;

    const total =
        totales.find((total) => total.item === 'creatures')?.total || 0;

    const paginacion = usePaginacion(dispatch, 'creatures', criaturas);

    return (
        <>
            <CardList
                titulo="Criaturas"
                elementos={criaturas}
                total={total}
                paginacion={paginacion}
            />
        </>
    );
};
