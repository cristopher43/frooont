import Button from "../atoms/Button";
import { Package, ShoppingCart, LogOut } from "lucide-react";

type NavbarProps = {
    usuario?: { nombre?: string } | null;
    cartCount?: number;
    onLogout?: () => void;
    onViewCart?: () => void;
};

export default function Navbar({ usuario, cartCount = 0, onLogout, onViewCart }: NavbarProps) {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Package className="w-10 h-10" />
                    <div>
                        <h1 className="text-2xl font-black">GAMER STORE</h1>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button onClick={onViewCart} className="bg-yellow-400 text-gray-900 flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        <span>Carrito ({cartCount})</span>
                    </Button>

                    {usuario ? (
                        <>
                            <div className="bg-white/10 px-4 py-2 rounded-lg">{usuario.nombre}</div>
                            <Button onClick={onLogout} className="bg-red-500 text-white">
                                <LogOut className="w-4 h-4" />
                                Salir
                            </Button>
                        </>
                    ) : (
                        <Button className="bg-white text-purple-600">Ingresar</Button>
                    )}
                </div>
            </div>
        </nav>
    );
}
