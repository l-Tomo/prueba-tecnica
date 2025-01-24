import React, { useState } from 'react';
import ProductDetailUI from './ProductDetailUI'; // Importar el componente UI
import './ProductDetail.css'; // Importar los estilos
import api from '../../api';

const ProductDetail = () => {
  const [id, setId] = useState('');
  const [product, setProduct] = useState(null);

  const fetchProduct = () => {
    if (!id) {
      alert('Por favor, ingresa un ID válido.');
      return;
    }

    api.get(`/productos/${id}`)
      .then((response) => {
        console.log(response.data); // Verifica la respuesta completa en la consola
        const productData = response.data.body[0]; // Extrae el primer elemento del array
        setProduct(productData); // Guarda solo el producto
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        alert('No se pudo obtener el producto. Verifica el ID.');
      });
  };

  return (
    <ProductDetailUI
      id={id}
      setId={setId}
      product={product}
      fetchProduct={fetchProduct}
    />
  );
};

export default ProductDetail;
