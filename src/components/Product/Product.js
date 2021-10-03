import React from 'react';
import { useStateValue } from '../../reactContext/StateProvider';
import './Product.css';
export default function Item({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();
  console.log('cart:', cart);
  const addToCart = () => {
    // send info to data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="Product">
      <div className="Product__info">
        <p className="Product__title">{title}</p>

        <p className="Product__price">
          <span>$</span>
          <strong>{price}</strong>
        </p>

        <div className="Product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <img className="Product__image" src={image} alt="" />
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
