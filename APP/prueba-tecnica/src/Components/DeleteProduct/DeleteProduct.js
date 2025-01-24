import React, { useState } from 'react';
import DeleteProductUI from './DeleteProductUI'; // Importar el componente UI
import './DeleteProduct.css'; // Importar estilos
import api from '../../api';

const DeleteProduct = () => {
  const [id, setId] = useState('');

  const deleteProduct = () => {
    if (!id) {
      alert('Por favor, ingresa un ID válido.');
      return;
    }

    // Confirmación antes de eliminar
    if (!window.confirm(`¿Estás seguro de que deseas eliminar el producto con ID ${id}?`)) {
      return;
    }

    // Enviar solicitud de eliminación
    api.delete('/productos', { data: { id } })
      .then(() => {
        console.log('Producto eliminado');
        alert('Producto eliminado con éxito.');
        setId(''); // Limpiar el campo ID
      })
      .catch((error) => {
        console.error('Error eliminando producto:', error);
        alert('Ocurrió un error al intentar eliminar el producto.');
      });
  };

  return (
    <DeleteProductUI
      id={id}
      setId={setId}
      deleteProduct={deleteProduct}
    />
  );
};

export default DeleteProduct;
