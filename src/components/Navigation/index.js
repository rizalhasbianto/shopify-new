import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import { 
	Wrappers,
	Container,
	CartCounter,
	MenuLink,
	MenuWrap,
	Links
} from './styles'

const countQuantity = lineItems => {
	let quantity = 0

	lineItems.forEach(item => {
		quantity = quantity + item.quantity
	});

	return quantity
}

const Navigation = ({ siteTitle, menuLinks }) => {
	const { store: {checkout} } = useContext(StoreContext)
	const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []))

	useEffect(() => {
		setQuantity(countQuantity(checkout ? checkout.lineItems : []))
	}, [checkout])

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })
  
	return(
		<Wrappers>
			<Container>
          <nav class='main-menu'>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `10px`,
                  }}
                >
                  <Links href={link.link}>
                    {link.name}
                  </Links>
                </li>
              ))}
            </ul>
          </nav>
          <div class="center_caption">
          <span>FREE SHIPPING ON ALL ORDERS OVER $100</span>
          </div>
          <div class="right-top">
          	<div class="login">LOGIN</div>
				<MenuLink to='/cart'>
					{quantity !== 0 &&
						<CartCounter>
							{quantity}
							<div className='miniCart'>
      {line_items}
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      <br />
      <button onClick={handleCheckout}>Check out</button>
    </div>
						</CartCounter>
					}
					<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-cart" viewBox="0 0 37 40"><path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path></svg>
				</MenuLink>
			</div>
			</Container>
			<div class="logo">
			<img src="https://cdn.shopify.com/s/files/1/0250/5690/3256/files/12s_logo_410x.jpg" />
			</div>
		</Wrappers>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
