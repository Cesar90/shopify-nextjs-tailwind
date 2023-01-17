import React from 'react'
import { ISingleProduct } from "../utils/interface"
import Image from 'next/image'
import ProductForm from './ProductForm'

interface IProps{
  product: ISingleProduct
}

export default function ProductPageContent({ product }: IProps) {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11-12 mx-auto">
      <div className="w-full max-x-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
        <div className="relative h-96 w-full">
          <Image 
            layout="fill"
            objectFit="cover"
            src={product.images.edges[0].node.url} 
            alt={product.images.edges[0].node.altText} />
        </div>
      </div>
      <ProductForm product={product} />
    </div>
  )
}
