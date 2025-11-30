import Navbar from "../components/molecules/Navbar";

type Props = {
    carrito?: never[];
    onBack?: () => void;
};

export default function CheckoutPage({ carrito = [], onBack }: Props) {
    const total = carrito.reduce((s, i) => s + (i.price * i.cantidad || 0), 0);
    return (
        <div>
            <Navbar cartCount={carrito.length} />
            <div className="max-w-4xl mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold mb-4">Checkout</h1>
                <p>Total a pagar: ${total.toFixed(2)}</p>

                <div className="mt-6">
                    <button onClick={onBack} className="px-4 py-2 bg-gray-200 rounded">
                        Volver
                    </button>
                </div>
            </div>
        </div>
    );
}
