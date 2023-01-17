import React from 'react'
import { ISingleProduct } from "../utils/interface"

interface IProps{
  product: ISingleProduct
}

export default function ProductPageContent({ product }: IProps) {
  return (
    <div>
      {product.title}
    </div>
  )
}
