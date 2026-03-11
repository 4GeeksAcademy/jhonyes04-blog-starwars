import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Droides = () => {
    const { store, dispatch } = useGlobalReducer();
    const { droides } = store;

    const paginacion = usePaginacion(dispatch, 'droids', droides);

    return (
        <>
            <CardList
                titulo="Droides"
                elementos={droides}
                paginacion={paginacion}
            />
        </>
    );
};
