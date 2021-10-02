import React from 'react';
import { useStateValue } from '../../reactContext/StateProvider';
import './CheckoutProduct.css';

export default function CheckoutProduct({ id, image, title, price, rating }) {
  // eslint-disable-next-line
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct__img" src={image} alt="" />
      <div className="CheckoutProduct__info">
        <p className="CheckoutProduct__title">{title}</p>
        <p className="CheckoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Basket</button>
      </div>
    </div>
  );
}
