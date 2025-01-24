import React from 'react';
import ProductList from '../Components/ProductList/ProductList';
import ProductDetail from '../Components/ProductDetail/ProductDetail';
import ProductForm from '../Components/ProductForm/ProductForm';
import DeleteProduct from '../Components/DeleteProduct/DeleteProduct';
import './App.css'; // Importar los estilos

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Gestión de Productos</h1>
        <h3 className="app-categories">
          Categorías:
          <br />
          1 = Perecedero
          <br />
          2 = No perecedero
        </h3>
      </header>
      <main className="app-main">
        <ProductList />
        <ProductDetail /> 
        <ProductForm />
        <DeleteProduct />
      </main>
    </div>
  );
}

export default App;
