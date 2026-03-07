import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';

export const Personajes = () => {
    const { store } = useGlobalReducer();
    const { personajes } = store;

    return (
        <>
            <CardList
                titulo="Personajes"
                elementos={personajes}
                tipo="characters"
            />
        </>
    );
};
