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
        <div
            className="card bg-black text-white border-2 p-3"
            style={{ borderColor: "#4b5563" }}
        >
            <div className="row align-items-center g-3">

                {/* INFO PRODUCTO */}
                <div className="col-12 col-md-4">
                    <h5 className="fw-bold mb-1">{item.name}</h5>
                    <p className="text-white mb-0">${item.price} c/u</p>
                </div>

                {/* CONTADOR */}
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center gap-3">
                    <button
                        onClick={() => onRemove(item)}
                        className="btn btn-sm btn-secondary"
                    >
                        <Minus size={16} />
                    </button>

                    {/* CANTIDAD VISIBLE */}
                    <span
                        className="fw-bold fs-4 px-3"
                        style={{ color: "#22d3ee" }}
                    >
                        {item.cantidad}
                    </span>

                    <button
                        onClick={() => onAdd(item)}
                        className="btn btn-sm btn-secondary"
                    >
                        <Plus size={16} />
                    </button>
                </div>

                {/* PRECIO */}
                <div className="col-12 col-md-3 text-center text-md-end">
                    <span
                        className="fw-bold fs-4 text-white"
                    >
                        ${(item.price * item.cantidad).toFixed(2)}
                    </span>

                </div>

                {/* ELIMINAR */}
                <div className="col-12 col-md-1 text-center">
                    <button
                        onClick={() => onDelete(item)}
                        className="btn btn-danger btn-sm"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
