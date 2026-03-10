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

export const getData = async (dispatch, item, page = 1, limit = 20) => {
    try {
        const response = await fetch(
            URL_API + '/' + item + `?page=${page}&limit=${limit}`,
        );

        if (!response.ok) throw new Error(`Error al obtener ${item}`);

        const data = await response.json();

        const dataMasTipo = data.data.map((datos) => ({
            ...datos,
            tipo: NOMBRES_TIPO[item],
        }));

        dispatch({
            type: TIPOS[item],
            payload: dataMasTipo,
        });

        return data;
    } catch (error) {
        console.error(`Error al obtener ${item}:`, error);
        return [];
    }
};
