import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Lugares = () => {
    const { store, dispatch } = useGlobalReducer();
    const { lugares } = store;

    const paginacion = usePaginacion(dispatch, 'locations', lugares);

    return (
        <>
            <CardList
                titulo="Lugares"
                elementos={lugares}
                paginacion={paginacion}
            />
        </>
    );
};
