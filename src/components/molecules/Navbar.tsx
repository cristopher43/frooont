import Button from "../atoms/Button";
import { Package, ShoppingCart, LogOut } from "lucide-react";

type NavbarProps = {
    usuario?: { nombre?: string } | null;
    cartCount?: number;
    onLogout?: () => void;
    onViewCart?: () => void;
};

export default function Navbar({
                                   usuario,
                                   cartCount = 0,
                                   onLogout,
                                   onViewCart,
                               }: NavbarProps) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow"
             style={{ background: "linear-gradient(to right, #7e22ce, #2563eb)" }}>

            <div className="container">

                {/* LOGO */}
                <div className="d-flex align-items-center gap-2">
                    <Package size={36} />
                    <span className="navbar-brand fw-bold fs-4">GAMER STORE</span>
                </div>

                {/* BOTONES */}
                <div className="d-flex align-items-center gap-3">

                    {/* CARRITO */}
                    <button
                        onClick={onViewCart}
                        className="btn btn-warning d-flex align-items-center gap-2"
                    >
                        <ShoppingCart size={18} />
                        <span>Carrito ({cartCount})</span>
                    </button>

                    {/* USUARIO */}
                    {usuario ? (
                        <>
                            <div className="bg-light bg-opacity-25 px-3 py-2 rounded text-white">
                                {usuario.nombre}
                            </div>

                            <button
                                onClick={onLogout}
                                className="btn btn-danger d-flex align-items-center gap-2"
                            >
                                <LogOut size={16} />
                                Salir
                            </button>
                        </>
                    ) : (
                        <button className="btn btn-light text-primary fw-semibold">
                            Ingresar
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
