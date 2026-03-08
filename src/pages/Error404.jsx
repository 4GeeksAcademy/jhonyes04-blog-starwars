import { Link } from 'react-router-dom'; // O 'next/link' si usas Next.js

export const Error404 = () => {
    return (
        <div className="container bg-semitransparente rounded-4 text-center mt-5 p-5">
            <h1 className="display-1 fw-bold text-warning">404</h1>
            <h3 className="text-light fw-bold">Página no encontada</h3>
            <Link to="/" className="link-warning">
                Volver a la página de inicio
            </Link>
        </div>
    );
};
