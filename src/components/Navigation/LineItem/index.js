import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'

const LineItem = props => {
  const { line_item } = props
  
  const {
    setLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        (option, index, arr) => (
        <>
        {option.value}
        {(index == 0) ? ' / ' : ''}
        </>
        )
      )
    : null
    
  
 const TotalPrice = line_item.variant.price * line_item.quantity
 
 const handleQuantityPlus = ({ target }) => {
    setLineItem(line_item.quantity)
  }
 
  return (
    <Wrapper>
      <div className="miniimage">{variantImage}</div>
      <p>
        {line_item.title}
        {`  `}
        {line_item.variant.title === !'Default Title'
          ? line_item.variant.title
          : ''}
      -
      <span className="selectedoptions"> &nbsp;{selectedOptions}</span>
      {line_item.quantity}
      </p>
                {line_item.price}
        {`  `}
        <div className="miniprice">
        {line_item.variant.price === !'Default Title'
          ? TotalPrice
          : TotalPrice}
      <button onClick={handleQuantityPlus}>PLus</button>
      </div>
    </Wrapper>
  )
}

export default LineItem
