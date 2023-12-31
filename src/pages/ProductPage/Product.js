
import React from "react";
import { useParams } from "react-router-dom";
import foodData from "../../Data/FoodItem.json";
import ProuctDescription from "../../Components/ProductDescription/ProductDescription";

function Product() {
    const { productId } = useParams();
    const favouriteItems=foodData.filter(food =>food.id===productId);
  return (
    <div className="Product-page">
     
       {favouriteItems.map(product=><ProuctDescription  key={product.id} product={product}/>)}

    </div>
  );
}

export default Product;
