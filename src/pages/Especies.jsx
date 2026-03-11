import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Especies = () => {
    const { store, dispatch } = useGlobalReducer();
    const { especies } = store;

    const paginacion = usePaginacion(dispatch, 'species', especies);

    return (
        <>
            <CardList
                titulo="Especies"
                elementos={especies}
                paginacion={paginacion}
            />
        </>
    );
};
