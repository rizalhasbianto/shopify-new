import React from 'react'
import { graphql } from 'gatsby'

import {
Img,
  Container,
} from '~/utils/styles'
import {
  Product,
  Title,
  PriceTag,
  Grid
} from './styles'

const Collection = ({ data }) => {
  const collection = data.shopifyCollection
  return (
     <>
      <Container>
      <Grid>
      {collection.products
        ? collection.products.map((product, id) => (
            <Product key={product.id} >
              <div className="img-col">
            {product.images.map((image, Index) => (
            <div className={'colimg ind'+Index}>
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
                className={"colImg "+Index}
              />
              </div>
            ))}
            </div>
            <Title>{product.title}</Title>
            <PriceTag>{id}</PriceTag>
          </Product>
        ))
        : <p>No Products found!</p>}
        </Grid>
         </Container>
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
      handle
      title
      images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
      }
    }
  }
`
export default Collection