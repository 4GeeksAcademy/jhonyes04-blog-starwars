import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';

export const Planetas = () => {
    const { store } = useGlobalReducer();
    const { planetas } = store;

    return (
        <>
            <CardList titulo="Planetas" elementos={planetas} />
        </>
    );
};
