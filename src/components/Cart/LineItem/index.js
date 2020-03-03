import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

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

const TotalPrice = line_item.variant.price * line_item.quantity

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => <div className="option_wrap"><span class="option_name">{option.name}:</span> <span>{option.value}</span></div>
      )
    : null

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
    <div className="cart_image_wrap">
      {variantImage}
      </div>
      <div className="cart_detail_wrap">
      <p>
        {line_item.title}
        {`  `}
        {line_item.variant.title === !'Default Title'
          ? line_item.variant.title
          : ''}
      </p>
      {selectedOptions}
      <div className="single_price">
        {line_item.variant.price === !'Default Title'
          ? TotalPrice
          : TotalPrice}
      </div>
      <div className="mini_quantity">
          <button onClick={changeQuantity} name="minus" className="qtyMinus"><FontAwesomeIcon icon={faMinus} /></button>
          <input type="number" value={quantity} onChange={handleQuantityChange} className="mini_quantity_input"/>
      <button onClick={changeQuantity} name="plus" className="qtyPlus"><FontAwesomeIcon icon={faPlus} /></button>
      </div>
      </div>
    </Wrapper>
  )
}

export default LineItem
