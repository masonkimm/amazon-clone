import React from 'react';
import { useStateValue } from '../../reactContext/StateProvider';
// import './CheckoutProduct.css';
import './CheckoutProduct.scss';

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
      <div className="CheckoutProduct__img">
        <img className="" src={image} alt={title} />
      </div>
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
        <button onClick={removeFromCart} aria-label="Remove">
          Remove from cart
        </button>
      </div>
    </div>
  );
}
