import useGlobalReducer from '../hooks/useGlobalReducer';
import { CardList } from '../components/CardList';

export const Busquedas = () => {
    const { store } = useGlobalReducer();
    const { busquedas } = store;

    const total = busquedas.length;

    return (
        <>
            <CardList
                titulo="Resultados de búsqueda"
                elementos={busquedas}
                tipo="characters"
                total={total}
            />
        </>
    );
};
