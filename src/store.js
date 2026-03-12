export const initialStore = () => {
    const storeLocal = localStorage.getItem('mi_galaxia_starwars');
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

const actualizarColeccion = (e) => [
    ...e.personajes,
    ...e.vehiculos,
    ...e.lugares,
    ...e.criaturas,
    ...e.droides,
    ...e.organizaciones,
    ...e.especies,
];

const actualizarTotales = (listaTotales, item, total) => {
    const existe = listaTotales.find((t) => t.item === item);

    if (existe && existe.total === total) return listaTotales;

    if (existe) {
        return listaTotales.map((t) => (t.item === item ? { ...t, total } : t));
    }
    return [...listaTotales, { item, total }];
};

const MAPA_GETS = {
    GET_CHARACTERS: { elemento: 'personajes', item: 'characters' },
    GET_VEHICLES: { elemento: 'vehiculos', item: 'vehicles' },
    GET_LOCATIONS: { elemento: 'lugares', item: 'locations' },
    GET_CREATURES: { elemento: 'criaturas', item: 'creatures' },
    GET_DROIDS: { elemento: 'droides', item: 'droids' },
    GET_ORGANIZATIONS: { elemento: 'organizaciones', item: 'organizations' },
    GET_SPECIES: { elemento: 'especies', item: 'species' },
};

const procesarGet = (store, propiedad, slug, payload) => {
    if (JSON.stringify(store[propiedad]) === JSON.stringify(payload.items)) {
        return store;
    }
    return {
        ...store,
        [propiedad]: payload.items,
        totales: actualizarTotales(store.totales, slug, payload.total),
    };
};

export default function storeReducer(store, action = {}) {
    let siguienteEstado;

    const configuracion = MAPA_GETS[action.type];

    if (configuracion) {
        siguienteEstado = procesarGet(
            store,
            configuracion.elemento,
            configuracion.item,
            action.payload,
        );
    } else {
        switch (action.type) {
            case 'FILTRO':
                if (store.filtroActivo === action.payload) return store;
                siguienteEstado = { ...store, filtroActivo: action.payload };
                break;

            case 'FAVORITOS':
                const nuevosFavoritos = store.favoritos.some(
                    (favorito) => favorito._id === action.payload._id,
                )
                    ? store.favoritos.filter(
                          (f) => f._id !== action.payload._id,
                      )
                    : [...store.favoritos, action.payload];

                siguienteEstado = {
                    ...store,
                    favoritos: nuevosFavoritos,
                    filtroActivo:
                        nuevosFavoritos.length === 0 &&
                        store.filtroActivo === 'favoritos'
                            ? 'todos'
                            : store.filtroActivo,
                };
                break;

            case 'BUSQUEDAS':
                siguienteEstado = { ...store, busquedas: action.payload };
                break;

            default:
                return store;
        }
    }

    if (siguienteEstado === store) return store;

    if (action.type.startsWith('GET_')) {
        siguienteEstado.coleccionCompleta =
            actualizarColeccion(siguienteEstado);
    }

    const nuevoEstadoJSON = JSON.stringify(siguienteEstado);
    if (localStorage.getItem('mi_galaxia_starwars') !== nuevoEstadoJSON) {
        localStorage.setItem('mi_galaxia_starwars', nuevoEstadoJSON);
    }

    return siguienteEstado;
}
