import useGlobalReducer from '../hooks/useGlobalReducer';
import { Card } from './Card';

export const CardList = ({ titulo, elementos }) => {
    return (
        <div className="container my-4">
            {/* <div className="card bg-transparent border-0"> */}
            <div className="card-header border-0">
                <h1 className="card-title text-center text-warning fw-bold bg-title mb-4">
                    {titulo}
                </h1>
            </div>
            {elementos.length > 0 ? (
                <div className="card-body row row-cols-4 g-4">
                    {elementos.map((elemento) => (
                        <Card key={elemento._id} elemento={elemento} />
                    ))}
                </div>
            ) : (
                <h2 className="bg-title p-5 text-center text-warning fw-bold mt-5">
                    Aún no tienes favoritos
                </h2>
            )}
            {/* </div> */}
        </div>
    );
};
