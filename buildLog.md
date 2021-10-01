## react context

- set up stateProvider.js
  - template
- set up reducer.js
  - set up reducer ( action.type)
- import into index.js
  ```
  <StateProvider initialState={initialState} reducer={reducer}>
  ```
- use it on various components
  ```
  const [{ cart }, dispatch] = useStateValue();
  ```
  - dispatching
  ```
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
  ```
