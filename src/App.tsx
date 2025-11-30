import React, { useState } from "react";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import WelcomePage from "./pages/WelcomePage";
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
    const [page, setPage] = useState<"welcome" | "products" | "cart" | "checkout">("welcome");
    const [usuario, setUsuario] = useState<{ nombre?: string } | null>(null);
    // ejemplo de productos iniciales
    const [productos] = useState<any[]>([
        { id: 1, name: "Mouse Gamer", price: 29.99, description: "Mouse RGB", stock: 10 },
        { id: 2, name: "Teclado Mecánico", price: 79.99, description: "Switch blue", stock: 5 },
    ]);
    const [carrito, setCarrito] = useState<any[]>([]);
    const [categoria, setCategoria] = useState("todo");

    const onAddToCart = (product: any) => {
        const exist = carrito.find((i) => i.id === product.id);
        if (exist) {
            setCarrito(carrito.map((i) => (i.id === product.id ? { ...i, cantidad: i.cantidad + 1 } : i)));
        } else {
            setCarrito([...carrito, { ...product, cantidad: 1 }]);
        }
    };

    const onRemoveFromCart = (product: any) => {
        const exist = carrito.find((i) => i.id === product.id);
        if (!exist) return;
        if (exist.cantidad === 1) {
            setCarrito(carrito.filter((i) => i.id !== product.id));
        } else {
            setCarrito(carrito.map((i) => (i.id === product.id ? { ...i, cantidad: i.cantidad - 1 } : i)));
        }
    };

    const onDeleteFromCart = (product: any) => {
        setCarrito(carrito.filter((i) => i.id !== product.id));
    };

    return (
        <>
            {page === "welcome" && <WelcomePage onLogin={() => { setUsuario({ nombre: "Usuario" }); setPage("products"); }} onRegister={() => setPage("products")} />}

            {page === "products" && (
                <ProductsPage
                    productos={productos}
                    usuario={usuario}
                    categoria={categoria}
                    onAddToCart={onAddToCart}
                    onViewCart={() => setPage("cart")}
                    onLogout={() => setUsuario(null)}
                />
            )}

            {page === "cart" && (
                <CartPage
                    carrito={carrito}
                    usuario={usuario}
                    onBack={() => setPage("products")}
                    onAdd={onAddToCart}
                    onRemove={onRemoveFromCart}
                    onDelete={onDeleteFromCart}
                    onCheckout={() => setPage("checkout")}
                    onLogout={() => setUsuario(null)}
                />
            )}

            {page === "checkout" && <CheckoutPage carrito={carrito} onBack={() => setPage("products")} />}
        </>
    );
}
