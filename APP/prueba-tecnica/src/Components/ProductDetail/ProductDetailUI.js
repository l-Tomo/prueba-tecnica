import React from 'react';

const ProductDetailUI = ({ id, setId, product, fetchProduct }) => {
  return (
    <div className="product-detail-container">
      <h1 className="product-detail-title">Detalle de Producto</h1>
      <input
        type="text"
        placeholder="ID del producto"
        className="product-detail-input"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button
        className="product-detail-button"
        onClick={fetchProduct}
      >
        Buscar
      </button>
      {product ? (
        <div className="product-detail-result">
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Nombre:</strong> {product.nombre}</p>
          <p><strong>Descripción:</strong> {product.descripcion}</p>
        </div>
      ) : (
        <p className="product-detail-message">
          No se encontró el producto o aún no se ha buscado.
        </p>
      )}
    </div>
  );
};

export default ProductDetailUI;
