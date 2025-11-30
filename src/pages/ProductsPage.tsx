import { useState } from "react";
import Navbar from "../components/molecules/Navbar";
import ProductCard, { type Product } from "../components/molecules/ProductCard";

type Props = {
    productos: Product[];
    usuario?: { nombre?: string } | null;
    carrito?: any[];
    categoria?: string;
    onCategoriaChange?: (c: string) => void;
    onAddToCart: (p: Product) => void;
    onViewCart?: () => void;
    onLogout?: () => void;
};

export default function ProductsPage({
                                         productos = [],
                                         usuario,
                                         carrito = [],
                                         onAddToCart,
                                         onViewCart,
                                         onLogout,
                                     }: Props) {
    const [categoriaSeleccionada, setCategoriaSeleccionada] =
        useState<string>("Todos");
    const [busqueda, setBusqueda] = useState("");

    // Contador carrito
    const cartCount = carrito.reduce(
        (total, item) => total + (item.cantidad || 0),
        0
    );

    // Categorías únicas
    const categorias = [
        "Todos",
        ...new Set(productos.map((p) => p.categoria || "Sin categoría")),
    ];

    // Filtro
    const productosFiltrados = productos.filter((p) => {
        const cumpleCategoria =
            categoriaSeleccionada === "Todos" ||
            p.categoria === categoriaSeleccionada;

        const cumpleBusqueda = (p.name || p.nombre || "")
            .toLowerCase()
            .includes(busqueda.toLowerCase());

        return cumpleCategoria && cumpleBusqueda;
    });

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
                onViewCart={onViewCart}
            />

            <main className="container py-5">
                {/* HEADER */}
                <div className="mb-5">
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <span style={{ fontSize: "3rem" }}>🎮</span>
                        <h2 className="display-4 fw-bold text-white mb-0">
                            PRODUCTOS GAMER
                        </h2>
                    </div>

                    {/* BUSCADOR */}
                    <div style={{ maxWidth: "500px" }}>
                        <input
                            type="text"
                            className="form-control form-control-lg bg-black text-white"
                            placeholder=" Buscar productos..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            style={{
                                border: "2px solid #a855f7",
                                outline: "none",
                            }}
                        />
                    </div>
                </div>

                {/* FILTROS */}
                <div className="mb-4">
                    <div className="d-flex gap-2 flex-wrap">
                        {categorias.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategoriaSeleccionada(cat)}
                                className={`btn fw-bold text-white ${
                                    categoriaSeleccionada === cat ? "" : "btn-dark"
                                }`}
                                style={
                                    categoriaSeleccionada === cat
                                        ? {
                                            background:
                                                "linear-gradient(to right, #22d3ee, #3b82f6)",
                                            border: "none",
                                        }
                                        : {
                                            border: "1px solid #4b5563",
                                        }
                                }
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CONTADOR */}
                <div className="mb-4">
                    <p className="fw-bold" style={{ color: "#fbbf24" }}>
                        ⚡ {productosFiltrados.length} productos encontrados
                    </p>
                </div>

                {/* GRID */}
                <div className="row g-4">
                    {productosFiltrados.length === 0 ? (
                        <div className="col-12 text-center py-5">
                            <div style={{ fontSize: "4rem" }} className="mb-3">

                            </div>
                            <p className="text-white fs-4">
                                No se encontraron productos
                            </p>
                            <p style={{ color: "#9ca3af" }}>
                                Intenta con otra búsqueda o categoría
                            </p>
                        </div>
                    ) : (
                        productosFiltrados.map((p) => (
                            <div key={p.id} className="col-12 col-md-6 col-lg-4">
                                <ProductCard product={p} onAdd={onAddToCart} />
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}
