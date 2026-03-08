import { Link, NavLink } from 'react-router-dom';
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
        to: '/favoritos',
        label: 'Favoritos',
    },
];

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-semitransparente top-0 z-3">
            <div className="container d-flex justify-content-between align-items-center">
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

                <div className="flex-grow-1 mx-2">
                    <Search />
                </div>

                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggler border-warning ms-2"
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
                <div
                    id="navbarStarWars"
                    className="collapse navbar-collapse flex-grow-0"
                >
                    <div className="navbar-nav ms-auto gap-2">
                        {MENU.map((item, index) => (
                            <NavbarLink
                                to={item.to}
                                label={item.label}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
                {/* Fin Menú */}
            </div>
        </nav>
    );
};
