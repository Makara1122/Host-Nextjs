"use client";

import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { isKeyObject } from "util/types";

export default function CardProduct() {
  type ProductProp = {
    image: string;
    price: number;
    description: string;
    id : number;
  };

  const [products, setProduct] = useState<ProductProp[]>([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-1 m-auto mt-20 ">
      {products.map((product, index) => (
        <CardComponent
          key={index} 
          onClick={`/service/${product.id}`}
           
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}
