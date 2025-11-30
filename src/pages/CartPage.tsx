import Button from "../components/atoms/Button";
import CartItem from "../components/molecules/CartItem";
import { ShoppingCart } from "lucide-react";
import Navbar from "../components/molecules/Navbar";

type CartPageProps = {
    carrito: never[];
    usuario?: never;
    onBack?: () => void;
    onAdd: (item: never) => void;
    onRemove: (item: never) => void;
    onDelete: (item: never) => void;
    onCheckout: () => void;
    onLogout?: () => void;
};

export default function CartPage({
                                     carrito = [],
                                     usuario,
                                     onBack,
                                     onAdd,
                                     onRemove,
                                     onDelete,
                                     onCheckout,
                                     onLogout,
                                 }: CartPageProps) {
    const total = carrito.reduce((sum, item) => sum + item.price * item.cantidad, 0);
    const cartCount = carrito.reduce((s, item) => s + (item.cantidad || 0), 0);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar usuario={usuario} cartCount={cartCount} onLogout={onLogout} onViewCart={() => {}} />

            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-4xl font-bold text-gray-800">Tu Carrito</h1>
                        <Button onClick={onBack} className="bg-gray-200 hover:bg-gray-300 text-gray-800">
                            ← Seguir Comprando
                        </Button>
                    </div>
                </div>

                {carrito.length === 0 ? (
                    <div className="bg-white p-12 rounded-xl text-center shadow-lg">
                        <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                        <p className="text-2xl text-gray-500">Tu carrito está vacío</p>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            {carrito.map((item) => (
                                <CartItem key={item.id} item={item} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} />
                            ))}
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-3xl font-bold">TOTAL:</span>
                                <span className="text-5xl font-bold text-purple-600">${total.toFixed(2)}</span>
                            </div>

                            <Button onClick={onCheckout} className="w-full bg-green-600 hover:bg-green-700 text-white text-2xl py-6">
                                PROCESAR PAGO
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
