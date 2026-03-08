import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';

export const Lugares = () => {
    const { store } = useGlobalReducer();
    const { lugares } = store;

    return (
        <>
            <CardList titulo="Lugares" elementos={lugares} />
        </>
    );
};
