import React, { useState } from 'react';
import ProductFormUI from './ProductFormUI'; // Importar el componente UI
import './ProductForm.css'; // Importar estilos
import api from '../../api';

const ProductForm = () => {
  const [product, setProduct] = useState({
    id: '',
    nombre: '',
    descripcion: '',
    id_categoria: '',
  });

  const handleSubmit = () => {
    const endpoint = '/productos'; // Endpoint único para agregar/actualizar
    api.post(endpoint, product)
      .then((response) => {
        console.log(
          product.id
            ? 'Producto actualizado:'
            : 'Producto agregado:',
          response.data
        );
        alert(
          product.id
            ? 'Producto actualizado con éxito'
            : 'Producto agregado con éxito'
        );
      })
      .catch((error) => {
        console.error('Error al guardar el producto:', error);
        alert(`Error: ${error.response?.data || 'No se pudo guardar el producto'}`);
      });
  };

  return (
    <ProductFormUI
      product={product}
      setProduct={setProduct}
      handleSubmit={handleSubmit}
    />
  );
};

export default ProductForm;
