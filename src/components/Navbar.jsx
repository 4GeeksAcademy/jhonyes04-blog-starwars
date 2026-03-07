import { Link, NavLink } from 'react-router-dom';
import logoUrl from '../assets/img/logo-starwars.png';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Search } from './Search';

export const Navbar = () => {
    const { store } = useGlobalReducer();
    const { favoritos } = store;

    return (
        <nav className="navbar navbar-light bg-semitransparente position-sticky z-3">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">
                        <img
                            src={logoUrl}
                            alt="logo"
                            className="img-fluid"
                            width={100}
                        />
                    </span>
                </Link>
                <Search />
                <div className="d-flex flex-colum align-items-center gap-2">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `btn border-warning ${isActive ? 'btn-warning' : 'btn-dark'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/personajes"
                        className={({ isActive }) =>
                            `btn border-warning ${isActive ? 'btn-warning' : 'btn-dark'}`
                        }
                    >
                        Personajes
                    </NavLink>
                    <NavLink
                        to="/vehiculos"
                        className={({ isActive }) =>
                            `btn border-warning ${isActive ? 'btn-warning' : 'btn-dark'}`
                        }
                    >
                        Vehículos
                    </NavLink>
                    <NavLink
                        to="/planetas"
                        className={({ isActive }) =>
                            `btn border-warning ${isActive ? 'btn-warning' : 'btn-dark'}`
                        }
                    >
                        Planetas
                    </NavLink>
                    <NavLink
                        to="/favoritos"
                        className={({ isActive }) =>
                            `btn border-warning ${isActive ? 'btn-warning' : 'btn-dark'}`
                        }
                    >
                        {/* Favoritos
                        {favoritos.length > 0 && (
                            <span className="badge bg-dark text-white border border-warning align-items-center ms-1">
                                {favoritos.length}
                            </span>
                        )} */}
                        {({ isActive }) => (
                            <>
                                Favoritos
                                {/* {favoritos.length > 0 && ( */}
                                <span
                                    className={`badge border align-items-center ms-1 ${isActive ? 'bg-dark text-warning border-warning' : 'bg-warning text-dark border-dark'}`}
                                >
                                    {favoritos.length}
                                </span>
                                {/* )} */}
                            </>
                        )}
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
