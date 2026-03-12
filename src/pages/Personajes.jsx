import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Personajes = () => {
    const { store, dispatch } = useGlobalReducer();
    const { personajes, totales } = store;

    const total =
        totales.find((total) => total.item === 'characters')?.total || 0;
    const paginacion = usePaginacion(dispatch, 'characters', personajes);

    return (
        <>
            <CardList
                titulo="Personajes"
                elementos={personajes}
                total={total}
                paginacion={paginacion}
            />
        </>
    );
};
