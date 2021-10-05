export const initialState = {
  cart: [],
};
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  // add to cart
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    // remove from cart
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex((cart) => cart.id === action.id);
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id}). Not Found`);
      }

      return { ...state, cart: newCart };
    //
    default:
      return state;
  }
};
export default reducer;