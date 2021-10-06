import React from 'react';
// import './Header.css';
import './Header.scss';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../reactContext/StateProvider';

export default function Header() {
  // eslint-disable-next-line
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="Header">
      <Link to="/amazon-clone" aria-label="Home">
        <img
          className="Header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="Header__search">
        <input
          className="Header__searchInput"
          type="text"
          placeholder="search Amazon"
        />

        <SearchIcon
          className="Header__searchIcon"
          style={{ fontSize: 'xx-large', color: 'black' }}
        />
      </div>

      <div className="Header__nav">
        <div className="Header__navItem">
          <span>Hello, sign in</span>
          <span>Account & Lists</span>
        </div>
        <div className="Header__navItem">
          <span>Returns</span>
          <span>& Orders</span>
        </div>
        <div className="Header__navCart">
          <Link to="/amazon-clone/checkout" className="link" aria-label="Cart">
            <ShoppingCartIcon
              id="shoppingCartIcon"
              style={{ fontSize: 'x-large' }}
            />

            <span className="header__nav__item__cart__count">
              {cart?.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
