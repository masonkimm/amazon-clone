import React from 'react';
import { useStateValue } from '../../reactContext/StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
// import './Checkout.css';
import './Checkout.scss';

export default function Checkout() {
  // eslint-disable-next-line
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="Checkout">
      <div className="Checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon advertisement"
        />
        <div className="Checkout__left__title">
          <h2>Your shopping Cart</h2>
        </div>
        {cart
          ? cart.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))
          : null}
      </div>
      <div className="Checkout__right">
        <Subtotal />
        <button aria-label="Checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
}
