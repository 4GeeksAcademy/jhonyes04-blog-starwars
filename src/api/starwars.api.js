const URL_API = import.meta.env.VITE_URL_API;

const TIPOS = {
    characters: 'GET_CHARACTERS',
    vehicles: 'GET_VEHICLES',
    locations: 'GET_LOCATIONS',
    creatures: 'GET_CREATURES',
    droids: 'GET_DROIDS',
    organizations: 'GET_ORGANIZATIONS',
    species: 'GET_SPECIES',
};

const NOMBRES_TIPO = {
    characters: 'Personaje',
    vehicles: 'Vehículo',
    locations: 'Lugar',
    creatures: 'Criatura',
    droids: 'Droide',
    organizations: 'Organización',
    species: 'Especie',
};

const PAGINA_INICIAL = 1;
const LIMITE_ELEMENTOS = 20;

export const getData = async (
    dispatch,
    item,
    page = PAGINA_INICIAL,
    limit = LIMITE_ELEMENTOS,
) => {
    try {
        const response = await fetch(
            URL_API + '/' + item + `?page=${page}&limit=${limit}`,
        );

        if (!response.ok) throw new Error(`Error al obtener ${item}`);

        const data = await response.json();

        // if (!data || !data.data) {
        //     console.error('La API no devolvió el formato esperado:', data);
        // }

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
