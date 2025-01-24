import React, { useEffect, useState } from 'react';
import ProductListUI from './ProductListUI'; // Importar el componente UI
import './ProductList.css'; // Importar estilos
import api from '../../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/productos')
      .then((response) => {
        console.log(response.data); // Verifica la respuesta completa en la consola
        setProducts(response.data.body); // Ajusta para acceder al array de productos
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        alert('Ocurrió un error al obtener la lista de productos.');
      });
  }, []);

  return (
    <ProductListUI products={products} />
  );
};

export default ProductList;
