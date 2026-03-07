export const Footer = () => {
    const fecha = new Date().getFullYear();

    return (
        <div className="w-100 bg-semitransparente">
            <div className="container d-flex justify-content-between bg-semitransparente text-warning p-2">
                <p className="m-0">Copyright &copy; {fecha}</p>
                <p className="m-0">By: Jhonyes04</p>
            </div>
        </div>
    );
};
