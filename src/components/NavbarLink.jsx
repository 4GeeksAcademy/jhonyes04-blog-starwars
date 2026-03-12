import { NavLink } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';
export const NavbarLink = ({ to, label = '', onClick, total }) => {
    const { store } = useGlobalReducer();
    const { favoritos } = store;

    const menuFavoritos = label.toLowerCase() === 'favoritos';

    if (menuFavoritos) {
        return (
            <NavLink
                to="/favoritos"
                onClick={onClick}
                className={({ isActive }) =>
                    `btn border-warning w-100 w-lg-auto d-flex align-items-center justify-content-center ${isActive ? 'btn-warning' : 'btn-dark bg-transparent'}`
                }
            >
                {({ isActive }) => (
                    <>
                        <i
                            className={`fa-solid fa-heart ${isActive ? 'text-dark' : 'text-warning'}`}
                        ></i>
                        <span
                            className={`badge border ms-2 ${isActive ? 'bg-dark text-warning border-warning' : 'text-bg-warning border-dark'}`}
                        >
                            {favoritos.length}
                        </span>
                    </>
                )}
            </NavLink>
        );
    }

    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) =>
                `btn border-warning w-100 w-lg-auto ${isActive ? 'btn-warning text-dark fw-bold' : 'btn-dark bg-transparent text-warning'}`
            }
        >
            {({ isActive }) => (
                /* El div de Flexbox debe estar DENTRO de la función */
                <div className="d-flex justify-content-between align-items-center w-100">
                    <span>{label}</span>

                    {/* El total con un estilo condicional si quieres que resalte diferente */}
                    <span
                        className={`badge ms-3 ${isActive ? 'bg-dark text-warning' : 'bg-warning text-dark'}`}
                    >
                        {total ? total : ''}
                    </span>
                </div>
            )}
        </NavLink>
    );
};
