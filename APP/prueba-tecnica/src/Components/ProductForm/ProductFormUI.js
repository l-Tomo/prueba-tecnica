import React from 'react';

const ProductFormUI = ({ product, setProduct, handleSubmit }) => {
  return (
    <div className="product-form-container">
      <h1 className="product-form-title">
        {product.id ? 'Actualizar Producto' : 'Agregar Producto'}
      </h1>
      <input
        type="text"
        placeholder="ID (solo para actualizar)"
        className="product-form-input"
        value={product.id}
        onChange={(e) => setProduct({ ...product, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Nombre"
        className="product-form-input"
        value={product.nombre}
        onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Descripción"
        className="product-form-input"
        value={product.descripcion}
        onChange={(e) => setProduct({ ...product, descripcion: e.target.value })}
      />
      <input
        type="text"
        placeholder="ID Categoría"
        className="product-form-input"
        value={product.id_categoria}
        onChange={(e) => setProduct({ ...product, id_categoria: e.target.value })}
      />
      <button
        className="product-form-button"
        onClick={handleSubmit}
      >
        {product.id ? 'Actualizar' : 'Agregar'}
      </button>
    </div>
  );
};

export default ProductFormUI;
