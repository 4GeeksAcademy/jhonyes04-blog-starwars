import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Personajes = () => {
    const { store, dispatch } = useGlobalReducer();
    const { personajes } = store;

    const paginacion = usePaginacion(dispatch, 'characters', personajes);

    return (
        <>
            <CardList
                titulo="Personajes"
                elementos={personajes}
                paginacion={paginacion}
            />
        </>
    );
};
