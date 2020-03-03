import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrappers = styled.div`
  background: white;
  margin-bottom: 1.45rem;
  border-bottom:1px solid #e8e9eb;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background:black;
`

export const MenuLink = styled.div`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  font-weight: bold;
    position: relative;
    top: 6px;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const CartCounter = styled.span`
 color:white;
 font-size:14px;
`

export const MenuWrap = styled.div`
  background: white;
  color:black;
  text-transform:uppercase;
`

export const Links = styled.a`
  text-decoration:none;
  color:#fff;
  
`

    
     
        
          
            
              