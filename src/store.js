export const initialStore = () => {
    const personajesLocalStorage = localStorage.getItem('characters');
    const vehiculosLocalStorage = localStorage.getItem('vehicles');
    const lugaresLocalStorage = localStorage.getItem('locations');
    const favoritosLocalStorage = localStorage.getItem('swfavoritos');

    return {
        personajes: personajesLocalStorage
            ? JSON.parse(personajesLocalStorage)
            : [],
        vehiculos: vehiculosLocalStorage
            ? JSON.parse(vehiculosLocalStorage)
            : [],
        lugares: lugaresLocalStorage ? JSON.parse(lugaresLocalStorage) : [],
        favoritos: favoritosLocalStorage
            ? JSON.parse(favoritosLocalStorage)
            : [],
        busquedas: [],
    };
};

export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return {
                ...store,
                personajes: action.payload,
            };
        case 'GET_VEHICLES':
            return {
                ...store,
                vehiculos: action.payload,
            };
        case 'GET_LOCATIONS':
            return {
                ...store,
                lugares: action.payload,
            };
        case 'FAVORITOS':
            let favoritosActualizados;
            const existe = store.favoritos.find(
                (favorito) => favorito._id === action.payload._id,
            );

            if (existe) {
                favoritosActualizados = store.favoritos.filter(
                    (favorito) => favorito._id !== action.payload._id,
                );
            } else {
                favoritosActualizados = [...store.favoritos, action.payload];
            }

            localStorage.setItem(
                'swfavoritos',
                JSON.stringify(favoritosActualizados),
            );

            const items = JSON.parse(localStorage.getItem('swfavoritos'));
            if (items.length === 0) localStorage.removeItem('swfavoritos');

            return {
                ...store,
                favoritos: favoritosActualizados,
            };
        case 'BUSQUEDAS':
            return {
                ...store,
                busquedas: action.payload,
            };
        default:
            return store;
    }
}
