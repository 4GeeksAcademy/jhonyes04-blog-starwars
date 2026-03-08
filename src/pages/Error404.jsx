import { Link } from 'react-router-dom'; // O 'next/link' si usas Next.js
import urlImagen404 from '../assets/img/404.png';

export const Error404 = () => {
    return (
        <div className="container bg-semitransparente rounded-4 text-center position-relative mt-5">
            <img src={urlImagen404} alt="404" className="img-fluid w-50" />

            {/* <h1 className="display-1 fw-bold text-warning">404</h1> */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x">
                <h3 className="text-light display-4 fw-bold my-3">
                    Página no encontada
                </h3>
                <Link to="/" className="btn btn-sm btn-warning mb-2">
                    Volver a home
                </Link>
            </div>
        </div>
    );
};
