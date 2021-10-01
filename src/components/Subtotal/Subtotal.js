import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../reactContext/StateProvider';

export default function SubTotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="Subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h4>
              Subtotal ({cart.length} items): <strong>99.99</strong>
            </h4>
            <small className="Subtotal__giftOption">
              <input type="checkbox" />
              This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}
