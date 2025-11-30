import React from "react";

export type Product = {
    nombre?: any;
    categoria?: string;
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
    const sinStock = (product.stock ?? 0) === 0;

    return (
        <div className="card bg-dark text-white h-100 border-2"
             style={{
                 borderColor: '#4b5563',
                 transition: 'all 0.3s'
             }}
             onMouseEnter={(e) => e.currentTarget.style.borderColor = '#a855f7'}
             onMouseLeave={(e) => e.currentTarget.style.borderColor = '#4b5563'}>

            {/* Imagen del producto */}
            <div className="position-relative"
                 style={{
                     height: '200px',
                     background: 'linear-gradient(135deg, #7e22ce 0%, #3b82f6 100%)',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                 }}>
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid p-3"
                        style={{ maxHeight: '180px', objectFit: 'contain' }}
                    />
                ) : (
                    <span style={{ fontSize: '5rem', color: '#a855f7' }}>📦</span>
                )}

                {/* Badge de categoría */}
                {product.categoria && (
                    <span className="badge position-absolute top-0 start-0 m-2"
                          style={{ background: '#22d3ee', fontSize: '0.7rem' }}>
                        {product.categoria}
                    </span>
                )}

                {/* Badge de stock */}
                {sinStock && (
                    <span className="badge bg-danger position-absolute top-0 end-0 m-2"
                          style={{ fontSize: '0.7rem' }}>
                        SIN STOCK
                    </span>
                )}
            </div>

            {/* Contenido */}
            <div className="card-body d-flex flex-column">

                {/* Nombre */}
                <h5 className="card-title fw-bold text-truncate mb-2">
                    {product.name}
                </h5>

                {/* Descripción */}
                <p className="card-text text-muted small mb-3"
                   style={{
                       height: '40px',
                       overflow: 'hidden'
                   }}>
                    {product.description || "Sin descripción disponible"}
                </p>

                {/* Separador */}
                <hr style={{
                    height: '1px',
                    background: 'linear-gradient(to right, #22d3ee, #a855f7)',
                    border: 'none',
                    margin: '1rem 0'
                }} />

                {/* Precio y stock */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="display-6 fw-bold" style={{ color: '#fbbf24' }}>
                        ${product.price}
                    </span>
                    <span className={`badge ${sinStock ? 'bg-danger' : 'bg-success'}`}>
                        {sinStock ? 'Agotado' : `Stock: ${product.stock}`}
                    </span>
                </div>

                {/* Botón agregar */}
                <button
                    onClick={() => onAdd(product)}
                    disabled={sinStock}
                    className="btn btn-lg w-100 fw-bold mt-auto"
                    style={sinStock ? {
                        background: '#4b5563',
                        color: '#9ca3af',
                        border: 'none',
                        cursor: 'not-allowed'
                    } : {
                        background: 'linear-gradient(to right, #9333ea, #3b82f6)',
                        border: 'none',
                        color: 'white'
                    }}
                >
                    {sinStock ? '⚠️ No Disponible' : '🛒 Agregar al Carrito'}
                </button>
            </div>
        </div>
    );
}