import { Minus, Plus, Trash2 } from "lucide-react";

type Item = {
    id: number | string;
    name: string;
    price: number;
    cantidad: number;
};

type Props = {
    item: Item;
    onAdd: (item: Item) => void;
    onRemove: (item: Item) => void;
    onDelete: (item: Item) => void;
};

export default function CartItem({ item, onAdd, onRemove, onDelete }: Props) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-3 flex items-center gap-4">
            <div className="flex-1">
                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className="text-gray-600">${item.price} c/u</p>
            </div>

            <div className="flex items-center gap-2">
                <button onClick={() => onRemove(item)} className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Minus className="w-4 h-4" />
                </button>

                <span className="font-bold text-xl w-12 text-center">{item.cantidad}</span>

                <button onClick={() => onAdd(item)} className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Plus className="w-4 h-4" />
                </button>
            </div>

            <p className="font-bold text-purple-600 text-xl w-28 text-right">${(item.price * item.cantidad).toFixed(2)}</p>

            <button onClick={() => onDelete(item)} className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center">
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    );
}
