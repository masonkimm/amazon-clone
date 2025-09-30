import React from 'react';
import './Subtotal.css';
import { NumericFormat } from "react-number-format";
import { useStateValue } from '../../reactContext/StateProvider';
import { getCartTotal } from '../../reactContext/Reducer';

export default function SubTotal() {
  // eslint-disable-next-line
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="Subtotal">
      <NumericFormat
        renderText={(value) => (
          <>
            <h4>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </h4>
            <small className="Subtotal__giftOption">
              <input type="checkbox" />
              This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}
