import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { CardList } from '../components/CardList.jsx';
import { usePaginacion } from '../hooks/usePaginacion.jsx';

export const Vehiculos = () => {
    const { store, dispatch } = useGlobalReducer();
    const { vehiculos, totales } = store;

    const total =
        totales.find((total) => total.item === 'vehicles')?.total || 0;
    const paginacion = usePaginacion(dispatch, 'vehicles', vehiculos);

    return (
        <>
            <CardList
                titulo="Vehículos"
                elementos={vehiculos}
                total={total}
                paginacion={paginacion}
            />
        </>
    );
};
