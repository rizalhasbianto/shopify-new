import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'

const LineItem = props => {
  const { line_item } = props
  
  const {
    updateLineItem,
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
        {(line_item.variant.selectedOptions.length != 1) ? (index == 0 ? ' / ' : '') : ''}
        </>
        )
      )
    : null
    
  
 const TotalPrice = line_item.variant.price * line_item.quantity
 
 const changeQuantity = ({ target }) => {
 switch (target.name) {
      case 'plus':
      setQuantity(line_item.quantity + 1)
        updateLineItem(client, checkout.id, line_item.id, line_item.quantity + 1)
        break;
      case 'minus':
      setQuantity(line_item.quantity - 1)
        updateLineItem(client, checkout.id, line_item.id, line_item.quantity - 1)
        break;
      default:
        break;
    }
  }
  const [quantity, setQuantity] = React.useState(line_item.quantity);
  const handleQuantityChange = ({ target }) => {
  setQuantity(target.value)
    updateLineItem(client, checkout.id, line_item.id, target.value)
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
      </p>
                {line_item.price}
        {`  `}
        <div className="miniprice">
        {line_item.variant.price === !'Default Title'
          ? TotalPrice
          : TotalPrice}
          <button onClick={changeQuantity} name="minus">Minus</button>
          <input type="number" value={quantity} onChange={handleQuantityChange} />
      <button onClick={changeQuantity} name="plus">PLus</button>
      </div>
    </Wrapper>
  )
}

export default LineItem
