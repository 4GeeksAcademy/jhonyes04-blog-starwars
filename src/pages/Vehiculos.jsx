import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';

export const Vehiculos = () => {
    const { store } = useGlobalReducer();
    const { vehiculos } = store;

    return (
        <>
            <CardList titulo="Vehículos" elementos={vehiculos} />
        </>
    );
};
