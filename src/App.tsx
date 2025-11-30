import React, { useState } from "react";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import WelcomePage from "./pages/WelcomePage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import './index.css';

export default function App() {
    const [page, setPage] = useState<"welcome" | "login" | "products" | "cart" | "checkout">("welcome");
    const [usuario, setUsuario] = useState<{ nombre?: string; email?: string } | null>(null);

    const [productos] = useState<any[]>([
        { id: 1, name: "Mouse Gamer RGB", price: 29.99, description: "Mouse gaming con iluminación RGB y 6 botones programables", stock: 10, categoria: "Periféricos", image: "" },
        { id: 2, name: "Teclado Mecánico", price: 79.99, description: "Teclado mecánico con switches blue y retroiluminación", stock: 5, categoria: "Periféricos", image: "" },
        { id: 3, name: "Headset 7.1", price: 59.99, description: "Auriculares gaming con sonido envolvente 7.1", stock: 8, categoria: "Audio", image: "" },
        { id: 4, name: "Monitor 144Hz", price: 249.99, description: "Monitor gaming 24' Full HD 144Hz 1ms", stock: 3, categoria: "Monitores", image: "" },
        { id: 5, name: "Silla Gamer Pro", price: 199.99, description: "Silla ergonómica con soporte lumbar y reposabrazos 4D", stock: 0, categoria: "Muebles", image: "" },
        { id: 6, name: "Mousepad XXL", price: 24.99, description: "Mousepad extended 90x40cm con base antideslizante", stock: 15, categoria: "Accesorios", image: "" },
    ]);

    const [carrito, setCarrito] = useState<any[]>([]);

    const onAddToCart = (product: any) => {
        if (product.stock === 0) return alert("⚠️ Producto sin stock disponible");

        const exist = carrito.find((i) => i.id === product.id);

        if (exist) {
            if (exist.cantidad >= product.stock) return alert(`⚠️ Solo hay ${product.stock} unidades disponibles`);
            setCarrito(carrito.map((i) => i.id === product.id ? { ...i, cantidad: i.cantidad + 1 } : i));
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
            setCarrito(carrito.map((i) =>
                i.id === product.id ? { ...i, cantidad: i.cantidad - 1 } : i
            ));
        }
    };

    const onDeleteFromCart = (product: any) => {
        setCarrito(carrito.filter((i) => i.id !== product.id));
    };


    const handleLogin = (userData: { nombre: string; email: string }) => {
        setUsuario(userData);
        setPage("products");
    };

    const handleRegister = () => {
        setUsuario({ nombre: "Nuevo Gamer", email: "nuevo@gamer.com" });
        setPage("login"); // ✅ ahora va a LOGIN
    };

    const handleLogout = () => {
        setUsuario(null);
        setPage("welcome");
        setCarrito([]);
    };

    return (
        <>
            {page === "welcome" && (
                <WelcomePage
                    onLogin={() => setPage("login")}
                    onRegister={() => setPage("login")} // ✅ YA NO DISPÁRA REGISTRO DIRECTO
                />
            )}

            {page === "login" && (
                <LoginPage
                    onLogin={handleLogin}
                    onBack={() => setPage("welcome")}
                />
            )}

            {page === "products" && (
                <ProductsPage
                    productos={productos}
                    usuario={usuario}
                    carrito={carrito}
                    onAddToCart={onAddToCart}
                    onViewCart={() => setPage("cart")}
                    onLogout={handleLogout}
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
                    onLogout={handleLogout}
                />
            )}

            {page === "checkout" && (
                <CheckoutPage
                    carrito={carrito}
                    onBack={() => setPage("cart")}
                />
            )}
        </>
    );
}
