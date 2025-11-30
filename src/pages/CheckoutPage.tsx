import Navbar from "../components/molecules/Navbar";

type CartItemType = {
    id?: number | string;
    name?: string;
    nombre?: string;
    price: number;
    cantidad: number;
};

type Props = {
    carrito?: CartItemType[];
    onBack?: () => void;
};

export default function CheckoutPage({ carrito = [], onBack }: Props) {
    const total = carrito.reduce((s, i) => s + i.price * i.cantidad, 0);

    const handleFinalizarCompra = () => {
        alert("¡Compra finalizada! 🎉");
        // Aquí luego puedes llamar a tu backend
    };

    return (
        <div
            className="min-vh-100"
            style={{
                background:
                    "linear-gradient(135deg, #1f2937 0%, #7e22ce 50%, #1f2937 100%)",
            }}
        >
            <Navbar cartCount={carrito.length} />

            <div className="container py-5" style={{ maxWidth: "900px" }}>
                {/* HEADER */}
                <div className="d-flex align-items-center gap-3 mb-5">
                    <span style={{ fontSize: "3rem" }}>🛒</span>
                    <h1 className="display-4 fw-bold text-white mb-0">CHECKOUT</h1>
                </div>

                {/* CONTENEDOR PRINCIPAL */}
                <div
                    className="card bg-dark text-white border-2 p-4"
                    style={{ borderColor: "#a855f7" }}
                >
                    {/* RESUMEN */}
                    <div className="mb-4">
                        <h2 className="fs-3 fw-bold mb-4"> Resumen de Compra</h2>

                        {carrito.length === 0 ? (
                            <div className="text-center py-5">
                                <div style={{ fontSize: "4rem" }} className="mb-3">
                                    🛒
                                </div>
                                <p className="text-muted fs-5">Tu carrito está vacío</p>
                            </div>
                        ) : (
                            <div className="d-flex flex-column gap-3">
                                {carrito.map((item, index) => (
                                    <div
                                        key={item.id ?? index}
                                        className="card bg-black border p-3 text-white"
                                        style={{ borderColor: "#4b5563" }}
                                    >
                                        <div className="d-flex justify-content-between align-items-center">
                                            {/* NOMBRE + CANTIDAD */}
                                            <div>
                                                <p className="fw-bold mb-1 text-white">
                                                    {item.nombre || item.name || "Producto"}
                                                </p>
                                                <p className="mb-0 fw-semibold" style={{ color: "#22d3ee" }}>
                                                    Cantidad: {item.cantidad}
                                                </p>
                                            </div>

                                            {/* PRECIO TOTAL POR PRODUCTO */}
                                            <div className="text-end">
                                                <p
                                                    className="fs-4 fw-bold mb-0"
                                                    style={{ color: "#22d3ee" }}
                                                >
                                                    ${(item.price * item.cantidad).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
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

                    {/* TOTAL */}
                    <div
                        className="p-4 rounded mb-4"
                        style={{
                            background: "linear-gradient(to right, #fbbf24, #f97316)",
                        }}
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-3 fw-bold text-dark">TOTAL A PAGAR:</span>

                            <span className="display-3 fw-bold text-dark">
                ${total.toFixed(2)}
              </span>
                        </div>
                    </div>

                    {/* BOTONES */}
                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <button
                                onClick={onBack}
                                className="btn btn-lg btn-dark w-100 fw-bold"
                                style={{ border: "2px solid #4b5563" }}
                            >
                                ← Volver
                            </button>
                        </div>

                        <div className="col-12 col-md-6">
                            <button
                                onClick={handleFinalizarCompra}
                                disabled={carrito.length === 0}
                                className="btn btn-lg w-100 fw-bold"
                                style={
                                    carrito.length === 0
                                        ? {
                                            background: "#4b5563",
                                            color: "#9ca3af",
                                            border: "none",
                                            cursor: "not-allowed",
                                        }
                                        : {
                                            background: "linear-gradient(to right, #10b981, #059669)",
                                            border: "none",
                                            color: "white",
                                        }
                                }
                            >
                                ✓ Finalizar Compra
                            </button>
                        </div>
                    </div>

                    {/* SEGURIDAD */}
                    <div className="text-center mt-4">
                        <p
                            className="small mb-0"
                            style={{ color: "#facc15", fontWeight: "bold" }}
                        >
                            🔒 Pago seguro y protegido
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
