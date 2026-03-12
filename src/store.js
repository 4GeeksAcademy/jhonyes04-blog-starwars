export const initialStore = () => {
    const storeLocal = localStorage.getItem('otra_galaxia_starwars');

    if (storeLocal) return JSON.parse(storeLocal);

    return {
        totales: [],
        coleccionCompleta: [],
        personajes: [],
        vehiculos: [],
        lugares: [],
        criaturas: [],
        droides: [],
        organizaciones: [],
        especies: [],
        favoritos: [],
        busquedas: [],
        filtroActivo: 'todos',
    };
};

const actualizarColeccion = (estado) => {
    return [
        ...estado.personajes,
        ...estado.vehiculos,
        ...estado.lugares,
        ...estado.criaturas,
        ...estado.droides,
        ...estado.organizaciones,
        ...estado.especies,
    ];
};

const actualizarTotales = (listaTotales, item, total) => {
    const existe = listaTotales.find(
        (elementoLista) => elementoLista.item === item,
    );

    if (existe) {
        return listaTotales.map((elementoLista) =>
            elementoLista.item === item
                ? { ...elementoLista, total: total }
                : elementoLista,
        );
    }

    return [...listaTotales, { item: item, total: total }];
};

export default function storeReducer(store, action = {}) {
    let siguienteEstado;
    switch (action.type) {
        case 'GET_CHARACTERS':
            siguienteEstado = {
                ...store,
                personajes: action.payload.items,
                totales: actualizarTotales(
                    store.totales,
                    'characters',
                    action.payload.total,
                ),
            };
            break;
        case 'GET_VEHICLES':
            siguienteEstado = {
                ...store,
                vehiculos: action.payload.items,
                totales: actualizarTotales(
                    store.totales,
                    'vehicles',
                    action.payload.total,
                ),
            };
            break;
        case 'GET_LOCATIONS':
            siguienteEstado = {
                ...store,
                lugares: action.payload.items,
                totales: actualizarTotales(
                    store.totales,
                    'locations',
                    action.payload.total,
                ),
            };
            break;
        case 'GET_CREATURES':
            siguienteEstado = {
                ...store,
                criaturas: action.payload.items,
                totales: actualizarTotales(
                    store.totales,
                    'creatures',
                    action.payload.total,
                ),
            };
            break;
        case 'GET_DROIDS':
            siguienteEstado = {
                ...store,
                droides: action.payload.items,
                totales: actualizarTotales(
                    store.totales,
                    'droids',
                    action.payload.total,
                ),
            };
            break;
        case 'GET_ORGANIZATIONS':
            siguienteEstado = {
                ...store,
                organizaciones: action.payload.items,
                totales: actualizarTotales(
                    store.totales,
                    'organizations',
                    action.payload.total,
                ),
            };
            break;
        case 'GET_SPECIES':
            siguienteEstado = {
                ...store,
                especies: action.payload.items,
                totales: actualizarTotales(
                    store.totales,
                    `species`,
                    action.payload.total,
                ),
            };
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

    if (action.type.startsWith('GET_')) {
        siguienteEstado.coleccionCompleta =
            actualizarColeccion(siguienteEstado);
    }

    localStorage.setItem(
        'otra_galaxia_starwars',
        JSON.stringify(siguienteEstado),
    );
    return siguienteEstado;
}
