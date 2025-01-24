import React from 'react';
// toda la parte de renderizacion de informacion HTML
const DeleteProductUI = ({ id, setId, deleteProduct }) => {
  return (
    <div className="delete-product-container">
      <h1 className="delete-product-title">Eliminar Producto</h1>
      <input
        type="text"
        placeholder="ID del producto"
        className="delete-product-input"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button
        className="delete-product-button"
        onClick={deleteProduct}
      >
        Eliminar
      </button>
    </div>
  );
};

export default DeleteProductUI;
