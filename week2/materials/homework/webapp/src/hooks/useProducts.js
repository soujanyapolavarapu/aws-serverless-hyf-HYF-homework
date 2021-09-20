import { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Fruits",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Wonderful fruits from all over the world",
    price: "50",
    currency: "DKK",
  },
  {
    id: 2,
    name: "Vegetables",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Wonderful vegetables from all over the world",
    price: "50",
    currency: "DKK",
  },
  {
    id: 3,
    name: "Juice Box",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Great box for your juicer",
    price: "50",
    currency: "DKK",
  },
];

let initialProducts = productsData.map((item) => {
  return { ...item, selected: false };
});

function useProducts() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  // const [priceSum, setPriceSum] = useState()

  const addProduct = (product) => {
    let newCart = cart.concat(product);
    setCart(newCart);
  };

  const calculateSum = ()=> { 
    // let totalPriceOfProduct= 0;
    // let totalProducts= 
    return cart.reduce((carry, product)=>{
      return carry + parseInt(product.price)
    },0);

    //   parseInt(product.price), totalPriceOfProduct);
    // setCart(totalProducts);
    
  }

  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.id != product.id));
  };

  return { products, cart, addProduct, removeProduct, Total: calculateSum() };
}

export default useProducts;
