import React from 'react'
import {getAllProducts, getProduct} from "../../lib/shopify"
import { IAllProductNode, ISingleProduct } from "../../utils/interface"
import ProductPageContent from "../../components/ProductPageContent"

interface IProps{
  product: ISingleProduct
}

export default function ProductPage ({ product }: IProps) {
  return (
    <div>
      <ProductPageContent product={product}/>
    </div>
  )
}

export async function getStaticPaths(){
  const products:IAllProductNode[] = await getAllProducts()

  const paths = products.map(item => {
    const product = String(item.node.handle)

    return {
      params:{ product }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: {product:string} }) {
  const product:ISingleProduct = await getProduct(params.product)
  
  return {
    props:{product} //will be passes to the page component as props
  }
  
}