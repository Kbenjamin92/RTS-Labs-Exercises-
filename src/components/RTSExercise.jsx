import React, { useState, useEffect } from 'react';
import './App.css';


//  this is the solution for the rts labs interview technical question
const RTSExercise = () => {  
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    ApiUtils.getAllInventory()
    .then((items) => {
      setInventory(items);
    });
  }, []);

  const inventoryList = inventory.map((item, keys) => {
    return (
      <div key={keys}>
        <p>{item}</p>
        <button onClick={() => addToCart(item)}>Add To Cart</button>
      </div>  
    );
  });

  const cartList = cart.map((item, keys) => {
    return (
      <div key={keys}>
        <p>{item}</p>
        <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
      </div>  
    )
  })

  const addToCart = (id) => {
    let grabItem = inventory.filter(item => item !== id);
    setCart(prevState => [id, ...prevState]);
    setInventory(grabItem);
  }

  const removeFromCart = (id) => {
    let grabItem = cart.filter(item => item !== id);
    setInventory(prevState => [id, ...prevState]);
    setCart(grabItem);
  }

  return (
    <div className="App">
      <h1>Inventory</h1>
      {inventoryList}
      <h1>Cart</h1>
      {cartList}
    </div>
  );
}

export default RTSExercise;


class ApiUtils {
  static getAllInventory() {
    return new Promise((resolve) => {
      resolve(["apples", "oranges", "bananas"]);
    });
  }
}