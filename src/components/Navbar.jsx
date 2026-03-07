import { Link, NavLink } from 'react-router-dom';
import logoUrl from '../assets/img/logo-starwars.png';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Search } from './Search';
import { NavbarLink } from './NavbarLink';

const MENU = ['Home', 'Personajes', 'Vehículos', 'Planetas'];

export const Navbar = () => {
    const { store } = useGlobalReducer();
    const { favoritos } = store;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-semitransparente top-0 z-3">
            <div className="container d-flex">
                <div className="d-flex align-items-center">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand me-4">
                        <img
                            src={logoUrl}
                            alt="logo"
                            width={100}
                            className="img-fluid"
                        />
                    </Link>
                    {/* Fin Logo */}

                    <div className="flex-grow-1 w-auto me-4">
                        <Search />
                    </div>
                </div>

                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggler border-warning ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarStarWars"
                    aria-controls="navbarStarWars"
                    aria-expanded="false"
                    aria-label="Menú de navegación"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Fin Botón hamburguesa */}

                {/* Menú */}
                <div id="navbarStarWars" className="collapse navbar-collapse">
                    <div className="navbar-nav ms-auto gap-2">
                        <NavbarLink to="/" label="Home" />
                        <NavbarLink to="/personajes" label="Personajes" />
                        <NavbarLink to="/vehiculos" label="Vehículos" />
                        <NavbarLink to="/planetas" label="Planetas" />
                        <NavbarLink to="/favoritos" label="Favoritos" />

                        {/* <NavLink
                            to="/favoritos"
                            className={({ isActive }) =>
                                `btn border-warning w-100 w-lg-auto d-flex align-items-center justify-content-center ${isActive ? 'btn-warning' : 'btn-dark'}`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <i
                                        className={`fa-solid fa-heart ${isActive ? 'text-dark' : 'text-warning'}`}
                                    ></i>
                                    <span
                                        className={`badge border ms-2 ${isActive ? 'bg-dark text-warning border-warning' : 'bg-warning text-dark border-dark'}`}
                                    >
                                        {favoritos.length}
                                    </span>
                                </>
                            )}
                        </NavLink> */}
                    </div>
                </div>
                {/* Fin Menú */}
            </div>
        </nav>
    );
};
