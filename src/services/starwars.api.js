const URL_API = import.meta.env.VITE_URL_API;

const TIPOS = {
    characters: 'GET_CHARACTERS',
    vehicles: 'GET_VEHICLES',
    locations: 'GET_LOCATIONS',
};

const NOMBRES_TIPO = {
    characters: 'Personaje',
    vehicles: 'Vehículo',
    locations: 'Lugar',
};

export const getData = async (dispatch, item) => {
    const datosLocales = localStorage.getItem(item);

    if (!datosLocales) {
        try {
            const response = await fetch(URL_API + '/' + item);

            if (!response.ok) throw new Error(`Error al obtener ${item}`);

            const data = await response.json();

            const dataMasTipo = data.data.map((d) => ({
                ...d,
                tipo: NOMBRES_TIPO[item],
            }));

            localStorage.setItem(item, JSON.stringify(dataMasTipo));

            dispatch({
                type: TIPOS[item],
                payload: dataMasTipo,
            });

            return dataMasTipo;
        } catch (error) {
            console.error(`Error al obtener ${item}:`, error);
            return [];
        }
    }

    return JSON.parse(datosLocales);
};
