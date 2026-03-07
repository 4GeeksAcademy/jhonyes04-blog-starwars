import useGlobalReducer from '../hooks/useGlobalReducer';
import { CardList } from '../components/CardList';

export const Busquedas = () => {
    const { store } = useGlobalReducer();
    const { busquedas } = store;

    return (
        <>
            <CardList
                titulo={`Resultados de búsqueda ${busquedas.length}`}
                elementos={busquedas}
                tipo="characters"
            />
        </>
    );
};
