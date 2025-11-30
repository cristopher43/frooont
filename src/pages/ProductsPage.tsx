import Navbar from "../components/molecules/Navbar";
import ProductCard, {type Product } from "../components/molecules/ProductCard";

type Props = {
    productos: Product[];
    usuario?: { nombre?: string } | null;
    carrito?: never[];
    categoria?: string;
    onCategoriaChange?: (c: string) => void;
    onAddToCart: (p: Product) => void;
    onViewCart?: () => void;
    onLogout?: () => void;
};

export default function ProductsPage({
                                         productos = [],
                                         usuario,
                                         onAddToCart,
                                         onViewCart,
                                         onLogout,
                                     }: Props) {
    return (
        <div>
            <Navbar usuario={usuario} cartCount={0} onLogout={onLogout} onViewCart={onViewCart} />
            <main className="max-w-6xl mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-6">Productos</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {productos.length === 0 ? (
                        <p>No hay productos cargados.</p>
                    ) : (
                        productos.map((p) => <ProductCard key={p.id} product={p} onAdd={onAddToCart} />)
                    )}
                </div>
            </main>
        </div>
    );
}
