import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Organizaciones = () => {
    const { store, dispatch } = useGlobalReducer();
    const { organizaciones } = store;

    const paginacion = usePaginacion(dispatch, 'organizations', organizaciones);

    return (
        <>
            <CardList
                titulo="Organizaciones"
                elementos={organizaciones}
                paginacion={paginacion}
            />
        </>
    );
};
