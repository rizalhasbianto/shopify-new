import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px){
    grid-template-columns: repeat(1, 1fr);
  }
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