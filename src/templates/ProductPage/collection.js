import React from 'react'
import { graphql } from 'gatsby'
const Collection = ({ data }) => {
  const collection = data.shopifyCollection
  return (
     <>
      {collection.products
        ? collection.products.map((product) => (
            <div>{product.title}</div>
        ))
        : <p>No Products found!</p>}
    </>
  )
}
export const query = graphql`
  query($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      id
      title
      handle
      description
      descriptionHtml
      shopifyId
      products {
      title
      }
    }
  }
`
export default Collection