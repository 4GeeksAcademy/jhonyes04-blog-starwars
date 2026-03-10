export const initialStore = () => {
    const storeLocal = localStorage.getItem('galaxia_starwars');

    if (storeLocal) return JSON.parse(storeLocal);

    return {
        personajes: [],
        vehiculos: [],
        lugares: [],
        favoritos: [],
        busquedas: [],
        filtroActivo: 'todos',
    };
};

export default function storeReducer(store, action = {}) {
    let siguienteEstado;
    switch (action.type) {
        case 'GET_CHARACTERS':
            siguienteEstado = { ...store, personajes: action.payload };
            break;
        case 'GET_VEHICLES':
            siguienteEstado = { ...store, vehiculos: action.payload };
            break;
        case 'GET_LOCATIONS':
            siguienteEstado = { ...store, lugares: action.payload };
            break;
        case 'FILTRO':
            siguienteEstado = { ...store, filtroActivo: action.payload };
            break;
        case 'FAVORITOS':
            const existe = store.favoritos.find(
                (favorito) => favorito._id === action.payload._id,
            );
            const favoritosActualizados = existe
                ? store.favoritos.filter(
                      (favorito) => favorito._id !== action.payload._id,
                  )
                : [...store.favoritos, action.payload];

            let nuevoFiltro = store.filtroActivo;

            if (
                favoritosActualizados.length === 0 &&
                store.filtroActivo === 'favoritos'
            ) {
                nuevoFiltro = 'todos';
            }

            siguienteEstado = {
                ...store,
                favoritos: favoritosActualizados,
                filtroActivo: nuevoFiltro,
            };
            break;
        case 'BUSQUEDAS':
            siguienteEstado = { ...store, busquedas: action.payload };
            break;
        default:
            return store;
    }

    localStorage.setItem('galaxia_starwars', JSON.stringify(siguienteEstado));

    return siguienteEstado;
}
