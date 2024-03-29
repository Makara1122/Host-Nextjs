import ProductDetailComponent from "@/components/ProductDetailComponent";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type SearchParam = {
  params: {
    id: string;
  };
  searchParams:{
    [key:string]:string | string[] |undefined
  }
};

type UrlId = {
  url: string;
  id: string;
};

const getData = async ({ url, id }: UrlId) => {
  const res = await fetch(`${url}/${id}`);
  const data = await res.json();
  return data;
};

export async function generateMetadata(
    { params, searchParams }: SearchParam,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = params.id
   
    // fetch data
    const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
   
    // optionally access and extend (rather than replace) parent metadata
    
   
    return {
      title: product.title,
      description:product.description,
      openGraph: {
        images: product.image
      },
    }
  }

export default async function Page({ params }: SearchParam) {
  const url = "https://fakestoreapi.com/products";
  const data = await getData({ url, id: params.id }); // Fix: Pass url and id as separate arguments
  return (
    <div>
      <ProductDetailComponent 
        image={data.image}
        title={data.description}
        price={data.title}
      />
    </div>
  );

  
}
