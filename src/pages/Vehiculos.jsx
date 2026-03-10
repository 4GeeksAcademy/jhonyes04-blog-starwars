import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Vehiculos = () => {
    const { store, dispatch } = useGlobalReducer();
    const { vehiculos } = store;

    const paginacion = usePaginacion(dispatch, 'vehicles', vehiculos);

    return (
        <>
            <CardList
                titulo="Vehículos"
                elementos={vehiculos}
                paginacion={paginacion}
            />
        </>
    );
};
