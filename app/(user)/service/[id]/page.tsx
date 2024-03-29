import ProductDetailComponent from '@/components/ProductDetailComponent'
import React from 'react'

type SearchParam = {
    params : {
        id : number
    }
}

type UrlId = {
    url : string,
    id : number,
}

const getData = async ({url,id} : UrlId) => {
    const res =  await fetch(`${url}/${id}`)
    const data = await res.json()
    return data
}

export default async function Page({ params }: SearchParam) {
    const url = "https://fakestoreapi.com/products";
   const data = await getData({url, id: params.id}) // Fix: Pass url and id as separate arguments
    return <div>

        <ProductDetailComponent   image={data.image} title={data.description} price={data.title}  />
    </div>
}


