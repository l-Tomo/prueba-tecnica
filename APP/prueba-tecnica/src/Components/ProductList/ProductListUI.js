import React from 'react';

const ProductListUI = ({ products }) => {
  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Lista de Productos</h1>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div className="product-list-item" key={product.id}>
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Nombre:</strong> {product.nombre}</p>
          </div>
        ))
      ) : (
        <p className="product-list-message">No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ProductListUI;
