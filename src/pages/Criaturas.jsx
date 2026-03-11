import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Criaturas = () => {
    const { store, dispatch } = useGlobalReducer();
    const { criaturas } = store;

    const paginacion = usePaginacion(dispatch, 'creatures', criaturas);

    return (
        <>
            <CardList
                titulo="Criaturas"
                elementos={criaturas}
                paginacion={paginacion}
            />
        </>
    );
};
