import { Link, NavLink, useLocation } from 'react-router-dom';
import logoUrl from '../assets/img/logo-starwars.png';
import { Search } from './Search';
import { NavbarLink } from './NavbarLink';

const MENU = [
    {
        to: '/',
        label: 'Home',
    },
    {
        to: '/personajes',
        label: 'Personajes',
    },
    {
        to: '/vehiculos',
        label: 'Vehículos',
    },
    {
        to: '/lugares',
        label: 'Lugares',
    },
    {
        to: '/criaturas',
        label: 'Criaturas',
    },
    {
        to: '/droides',
        label: 'Droides',
    },
    {
        to: '/organizaciones',
        label: 'Organizaciones',
    },
    {
        to: '/especies',
        label: 'Especies',
    },
    {
        to: '/favoritos',
        label: 'Favoritos',
    },
];

export const Navbar = () => {
    const localizacionActual = useLocation();
    const seccionActiva = MENU.find(
        (item) => item.to === localizacionActual.pathname,
    );

    const menuDropdown = MENU.filter(
        (item) => item.to !== '/' && item.to !== '/favoritos',
    );

    const cerrarMenu = () => {
        const elementoDropdown = document.getElementById('dropdownMenu');

        if (elementoDropdown) {
            const instance = bootstrap.Dropdown.getInstance(elementoDropdown);

            if (instance) instance.hide();
        }
    };
    const esDropdown = menuDropdown.some(
        (item) => item.to === localizacionActual.pathname,
    );

    const textoBoton = esDropdown ? seccionActiva.label : 'Explorar';

    const claseBoton = esDropdown
        ? 'btn btn-warning dropdown-toggle fw-bold'
        : 'btn btn-outline-warning dropdown-toggle fw-bold';

    return (
        <nav className="navbar navbar-dark bg-semitransparente top-0 z-3">
            <div className="container d-flex flex-column flex-md-row align-items-center">
                {/* Logo */}
                <Link to="/" className="navbar-brand me-3">
                    <img
                        src={logoUrl}
                        alt="logo"
                        width={100}
                        className="img-fluid"
                    />
                </Link>
                {/* Fin Logo */}

                <div className="flex-grow-1 mx-2">
                    <Search />
                </div>

                {/* Menú */}
                <div className="d-flex mx-auto mt-2 mt-md-0 flex-md-grow-0 gap-2">
                    <NavbarLink to="/" label="Home" />

                    <div className="dropdown">
                        <button
                            className={claseBoton}
                            type="button"
                            id="dropdownMenu"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fa-solid fa-jedi me-2"></i>
                            {textoBoton}
                        </button>

                        <div
                            id="dropdownMenu"
                            className="dropdown-menu dropdown-menu-end bg-dark border-warning mt-2 px-2"
                        >
                            <div className="d-flex flex-column gap-2">
                                {menuDropdown.map((item, index) => (
                                    <NavbarLink
                                        to={item.to}
                                        label={item.label}
                                        key={index}
                                        onClick={cerrarMenu}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Fin Menú */}
                    </div>
                    <NavbarLink to="/favoritos" label="Favoritos" />
                </div>
            </div>
        </nav>
    );
};
