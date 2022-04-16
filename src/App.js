import { useState, useEffect } from "react";
import "./App.css";
//import Product from "./components/Product/Product";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:8000/products");
      const responseData = await response.json();
      setProducts(responseData);
    };
    sendRequest();
  }, []);

  const AddProductHandler = async (title) => {

    const response = await fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(title)
    })

   const responseData = await response.json()

    //const id = Math.floor(Math.random() * 10000);
    //const newProduct = { id, ...title };
    //setProducts([...products, newProduct]);

    setProducts([...products, responseData])
  };

  const deleteHandler = async (id) => {

    await fetch(`http://localhost:8000/products/${id}`, {
     method: 'DELETE',
  }
   )
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <Form onAdd={AddProductHandler} />
      <ProductList products={products} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
