import useGlobalReducer from '../hooks/useGlobalReducer';
import { CardList } from '../components/CardList';

export const Favoritos = () => {
    const { store } = useGlobalReducer();
    const { favoritos } = store;
    return (
        <div>
            <CardList titulo="Favoritos" elementos={favoritos} />
        </div>
    );
};
