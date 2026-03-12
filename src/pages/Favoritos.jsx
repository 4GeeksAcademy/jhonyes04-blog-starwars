import useGlobalReducer from '../hooks/useGlobalReducer';
import { CardList } from '../components/CardList';

export const Favoritos = () => {
    const { store } = useGlobalReducer();
    const { favoritos } = store;

    const total = favoritos.length;
    return (
        <div>
            <CardList titulo="Favoritos" elementos={favoritos} total={total} />
        </div>
    );
};
