import React from "react";
import Button from "../atoms/Button";
import Badge from "../atoms/ErrorAlert"; // if you prefer a small badge, replace with Badge component; using ErrorAlert only if not available
import { Package } from "lucide-react";

export type Product = {
    id: number | string;
    name: string;
    price: number;
    description?: string;
    image?: string;
    stock?: number;
};

type Props = {
    product: Product;
    onAdd: (p: Product) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border">
            <div className="h-40 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
                {product.image ? (
                    <img src={product.image} alt={product.name} className="max-h-36 object-contain" />
                ) : (
                    <Package className="w-20 h-20 text-purple-600" />
                )}
            </div>

            <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mb-3">{product.description}</p>

            <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                <span className="text-sm text-gray-500">Stock: {product.stock ?? 0}</span>
            </div>

            <Button onClick={() => onAdd(product)} className="w-full bg-purple-600 text-white">
                Agregar al Carrito
            </Button>
        </div>
    );
}
