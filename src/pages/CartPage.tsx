import CartItem from "../components/molecules/CartItem";
import Navbar from "../components/molecules/Navbar";

type CartItemType = {
    id: number;
    price: number;
    cantidad: number;
};

type CartPageProps = {
    carrito: CartItemType[];
    usuario?: any;
    onBack?: () => void;
    onAdd: (item: CartItemType) => void;
    onRemove: (item: CartItemType) => void;
    onDelete: (item: CartItemType) => void;
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
    const total = carrito.reduce(
        (sum, item) => sum + item.price * item.cantidad,
        0
    );

    const cartCount = carrito.reduce(
        (s, item) => s + (item.cantidad || 0),
        0
    );

    return (
        <div
            className="min-vh-100"
            style={{
                background:
                    "linear-gradient(135deg, #1f2937 0%, #7e22ce 50%, #1f2937 100%)",
            }}
        >
            <Navbar
                usuario={usuario}
                cartCount={cartCount}
                onLogout={onLogout}
                onViewCart={() => {}}
            />

            <div className="container py-5" style={{ maxWidth: "900px" }}>
                {/* HEADER */}
                <div
                    className="card bg-dark text-white border-2 mb-4"
                    style={{ borderColor: "#a855f7" }}
                >
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                            <div className="d-flex align-items-center gap-3">
                                <span style={{ fontSize: "2.5rem" }}>🛒</span>
                                <h1 className="display-5 fw-bold mb-0">TU CARRITO</h1>
                            </div>

                            <button
                                onClick={onBack}
                                className="btn btn-dark fw-bold"
                                style={{ border: "2px solid #4b5563" }}
                            >
                                ← Seguir Comprando
                            </button>
                        </div>

                        {carrito.length > 0 && (
                            <div className="row g-3 mt-3">
                                <div className="col-6">
                                    <div className="card bg-black border-0 p-3 text-center">
                                        <p className="small mb-1 text-info">Items</p>
                                        <p className="fs-4 fw-bold mb-0 text-white">{cartCount}</p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="card bg-black border-0 p-3 text-center">
                                        <p className="small mb-1" style={{ color: "#a855f7" }}>
                                            Productos
                                        </p>
                                        <p className="fs-4 fw-bold mb-0 text-white">{carrito.length}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* CARRITO VACÍO */}
                {carrito.length === 0 ? (
                    <div
                        className="card bg-dark text-white border-2 p-5 text-center"
                        style={{ borderColor: "#4b5563" }}
                    >
                        <div style={{ fontSize: "4rem" }} className="mb-3">
                            🛒
                        </div>

                        <p className="fs-3 fw-bold mb-2">Tu carrito está vacío</p>
                        <p className="text-muted mb-4">
                            ¡Agrega algunos productos para comenzar!
                        </p>

                        <button
                            onClick={onBack}
                            className="btn btn-lg text-white fw-bold"
                            style={{
                                background: "linear-gradient(to right, #22d3ee, #3b82f6)",
                                border: "none",
                            }}
                        >
                            Ver Productos
                        </button>
                    </div>
                ) : (
                    <>
                        {/* LISTA DE ITEMS */}
                        <div className="mb-4">
                            {carrito.map((item) => (
                                <div
                                    key={item.id}
                                    className="card bg-dark text-white border-2 mb-3"
                                    style={{ borderColor: "#4b5563" }}
                                >
                                    <CartItem
                                        item={item}
                                        onAdd={onAdd}
                                        onRemove={onRemove}
                                        onDelete={onDelete}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* SEPARADOR */}
                        <hr
                            style={{
                                height: "3px",
                                background:
                                    "linear-gradient(to right, #22d3ee, #a855f7, #ec4899)",
                                border: "none",
                                margin: "2rem 0",
                            }}
                        />

                        {/* BLOQUE TOTAL COMPLETO */}
                        <div
                            className="card bg-dark text-white border-2 p-4"
                            style={{ borderColor: "#a855f7" }}
                        >
                            <div className="d-flex justify-content-between mb-2">
                                <span style={{ color: "#22d3ee" }}>Subtotal:</span>
                                <span style={{ color: "#22d3ee", fontWeight: "bold" }}>
                  ${total.toFixed(2)}
                </span>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <span style={{ color: "#a855f7" }}>Envío:</span>
                                <span style={{ color: "#22c55e", fontWeight: "bold" }}>
                  GRATIS
                </span>
                            </div>

                            <hr style={{ borderColor: "#4b5563" }} />

                            {/* TOTAL DESTACADO */}
                            <div
                                className="p-4 rounded mb-4 mt-4"
                                style={{
                                    background:
                                        "linear-gradient(to right, #fbbf24, #f97316)",
                                }}
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="fs-3 fw-bold text-dark">TOTAL:</span>
                                    <span className="display-4 fw-bold text-dark">
                    ${total.toFixed(2)}
                  </span>
                                </div>
                            </div>

                            {/* CHECKOUT */}
                            <button
                                onClick={onCheckout}
                                className="btn btn-lg w-100 text-white fw-bold mb-3"
                                style={{
                                    background:
                                        "linear-gradient(to right, #10b981, #059669)",
                                    border: "none",
                                    fontSize: "1.5rem",
                                    padding: "1rem",
                                }}
                            >
                                ✓ PROCESAR PAGO
                            </button>

                            {/* SEGURIDAD */}
                            <p
                                className="small mb-0 text-center"
                                style={{ color: "#facc15", fontWeight: "bold" }}
                            >
                                🔒 Pago 100% seguro y encriptado
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
