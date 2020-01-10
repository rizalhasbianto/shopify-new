import styled from '@emotion/styled'

export const ProductTitle = styled.h1`
font-family: 'Open Sans Condensed', sans-serif;
font-size: 30px;
text-transform: uppercase;
color: #333333;
display: block;
letter-spacing: 0px;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
padding: 4px 0px 4px 0px;
margin:0 0 16px 0;
`

export const ProductDescription = styled.div`
  margin-top: 20px;
  font-weight: 300;
`
export const TwoColumnGrid = styled.div`
  margin-top: 40px;
  font-weight: 300;
  overflow:hidden;
`
export const GridLeft = styled.div`
  float:left;
  width:55%;
`
export const GridRight = styled.div`
  float:left;
  padding-left:20px;
  width:45%;
  box-sizing:border-box;
`
export const Price = styled.span`
  font-size:20px;
  margin-top:15px;
`
export const Thumbnail = styled.div`
  font-size:20px;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
`

export const PriceTag = styled.span`
  font-weight: 600;
  font-size: 1em;
  text-align: left;
  margin-top: 5px;
  color:#69727b

  :before {
    content: '- '
  }
`