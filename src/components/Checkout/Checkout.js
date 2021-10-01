import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../reactContext/StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import Product from '../Product/Product';

import './Checkout.css';

export default function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="Checkout">
      <div className="Checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="Checkout__left__title">
          <h2>Your shopping Cart</h2>
        </div>
        {cart ? (
          <div className="Checkout__row">
            {cart.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="Checkout__right">
        <Subtotal />
        {/* <h3>SubTotal (2 items): $250.99</h3>
        <p>This order contains a gift</p>
        */}
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}
