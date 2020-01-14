import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
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
    
    

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
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
          ? line_item.variant.price
          : line_item.variant.price}
      <button onClick={handleRemove}>Remove</button>
      </div>
    </Wrapper>
  )
}

export default LineItem
