const URL_API = import.meta.env.VITE_URL_API;

const TIPOS = {
    characters: 'GET_CHARACTERS',
    vehicles: 'GET_VEHICLES',
    locations: 'GET_LOCATIONS',
};

export const getData = async (dispatch, item) => {
    const datosLocales = localStorage.getItem(item);

    if (!datosLocales) {
        try {
            const response = await fetch(URL_API + '/' + item);

            if (!response.ok) throw new Error(`Error al obtener ${item}`);

            const data = await response.json();

            localStorage.setItem(item, JSON.stringify(data.data));

            dispatch({
                type: TIPOS[item],
                payload: data.data,
            });

            return data.data;
        } catch (error) {
            console.error(`Error al obtener ${item}:`, error);
            return [];
        }
    }
};
