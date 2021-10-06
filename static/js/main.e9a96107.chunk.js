(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),s=c(25),n=c.n(s),r=c.p+"static/media/logo.6ce24c58.svg",l=(c(35),c(4)),o=(c(36),c(27)),j=c.n(o),d=c(28),m=c.n(d),u=c(11),b=c(0),h=Object(a.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(b.jsx)(h.Provider,{value:Object(a.useReducer)(t,c),children:i})},_=function(){return Object(a.useContext)(h)};function x(){var e=_(),t=Object(l.a)(e,2),c=t[0].cart;t[1];return Object(b.jsxs)("div",{className:"Header",children:[Object(b.jsx)(u.b,{to:"/amazon-clone","aria-label":"Home",children:Object(b.jsx)("img",{className:"Header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"amazon logo"})}),Object(b.jsxs)("div",{className:"Header__search",children:[Object(b.jsx)("input",{className:"Header__searchInput",type:"text",placeholder:"search Amazon"}),Object(b.jsx)(j.a,{className:"Header__searchIcon",style:{fontSize:"xx-large",color:"black"}})]}),Object(b.jsxs)("div",{className:"Header__nav",children:[Object(b.jsxs)("div",{className:"Header__navItem",children:[Object(b.jsx)("span",{children:"Hello, sign in"}),Object(b.jsx)("span",{children:"Account & Lists"})]}),Object(b.jsxs)("div",{className:"Header__navItem",children:[Object(b.jsx)("span",{children:"Returns"}),Object(b.jsx)("span",{children:"& Orders"})]}),Object(b.jsx)("div",{className:"Header__navCart",children:Object(b.jsxs)(u.b,{to:"/amazon-clone/checkout",className:"link","aria-label":"Cart",children:[Object(b.jsx)(m.a,{id:"shoppingCartIcon",style:{fontSize:"x-large"}}),Object(b.jsx)("span",{className:"header__nav__item__cart__count",children:null===c||void 0===c?void 0:c.length})]})})]})]})}c(47);function g(e){var t=e.id,c=e.title,a=e.price,i=e.rating,s=e.image,n=_(),r=Object(l.a)(n,2),o=r[0].cart,j=r[1];console.log("cart:",o);return Object(b.jsx)("div",{className:"Product",children:Object(b.jsxs)("div",{className:"Product__info",children:[Object(b.jsx)("p",{className:"Product__title",children:c}),Object(b.jsxs)("p",{className:"Product__price",children:[Object(b.jsx)("span",{children:"$"}),Object(b.jsx)("strong",{children:a})]}),Object(b.jsx)("div",{className:"Product__rating",children:Array(i).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\u2b50"},t)}))}),Object(b.jsx)("img",{className:"Product__image",src:s,alt:c}),Object(b.jsx)("button",{onClick:function(){j({type:"ADD_TO_CART",item:{id:t,title:c,image:s,price:a,rating:i}})},"aria-label":"add to cart",children:"Add to Cart"})]})})}c(48);function p(){return Object(b.jsx)("div",{className:"Home",children:Object(b.jsxs)("div",{className:"Home__container",children:[Object(b.jsx)("img",{className:"Home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"amazon prime advertisement banner"}),Object(b.jsxs)("div",{className:"Home__row",children:[Object(b.jsx)(g,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:12.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(b.jsx)(g,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:249.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(b.jsxs)("div",{className:"Home__row",children:[Object(b.jsx)(g,{id:"4903850",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:99.99,rating:1,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(b.jsx)(g,{id:"23445930",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:699.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(b.jsx)(g,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:689.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(b.jsx)("div",{className:"Home__row",children:Object(b.jsx)(g,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1299.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})}c(49);var v=c(29),C=c.n(v),f=c(8),N=c(12),S=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},k=function(e,t){switch(console.log(t),t.type){case"ADD_TO_CART":return Object(N.a)(Object(N.a)({},e),{},{cart:[].concat(Object(f.a)(e.cart),[t.item])});case"REMOVE_FROM_CART":var c=e.cart.findIndex((function(e){return e.id===t.id})),a=Object(f.a)(e.cart);return c>=0?a.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,"). Not Found")),Object(N.a)(Object(N.a)({},e),{},{cart:a});default:return e}};function z(){var e=_(),t=Object(l.a)(e,2),c=t[0].cart;t[1];return Object(b.jsx)("div",{className:"Subtotal",children:Object(b.jsx)(C.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h4",{children:["Subtotal (",c.length," items): ",Object(b.jsx)("strong",{children:e})]}),Object(b.jsxs)("small",{className:"Subtotal__giftOption",children:[Object(b.jsx)("input",{type:"checkbox"}),"This order contains a gift."]})]})},decimalScale:2,value:S(c),displayType:"text",thousandSeparator:!0,prefix:"$"})})}c(51);function A(e){var t=e.id,c=e.image,a=e.title,i=e.price,s=e.rating,n=_(),r=Object(l.a)(n,2),o=(r[0].cart,r[1]);return Object(b.jsxs)("div",{className:"CheckoutProduct",children:[Object(b.jsx)("div",{className:"CheckoutProduct__img",children:Object(b.jsx)("img",{className:"",src:c,alt:a})}),Object(b.jsxs)("div",{className:"CheckoutProduct__info",children:[Object(b.jsx)("p",{className:"CheckoutProduct__title",children:a}),Object(b.jsxs)("p",{className:"CheckoutProduct__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:i})]}),Object(b.jsx)("div",{className:"CheckoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\u2b50"},t)}))}),Object(b.jsx)("button",{onClick:function(){o({type:"REMOVE_FROM_CART",id:t})},"aria-label":"Remove",children:"Remove from cart"})]})]})}c(52);function H(){var e=_(),t=Object(l.a)(e,2),c=t[0].cart;t[1];return Object(b.jsxs)("div",{className:"Checkout",children:[Object(b.jsxs)("div",{className:"Checkout__left",children:[Object(b.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"amazon advertisement"}),Object(b.jsx)("div",{className:"Checkout__left__title",children:Object(b.jsx)("h2",{children:"Your shopping Cart"})}),c?c.map((function(e){return Object(b.jsx)(A,{id:e.id,title:e.title,price:e.price,rating:e.rating,image:e.image},e.id)})):null]}),Object(b.jsxs)("div",{className:"Checkout__right",children:[Object(b.jsx)(z,{}),Object(b.jsx)("button",{"aria-label":"Checkout",children:"Proceed to Checkout"})]})]})}var P=c(3);var y=function(){return Object(b.jsx)(u.a,{children:Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(x,{}),Object(b.jsxs)(P.c,{children:[Object(b.jsx)(P.a,{path:"/amazon-clone/checkout",children:Object(b.jsx)(H,{})}),Object(b.jsx)(P.a,{path:"/amazon-clone",children:Object(b.jsx)(p,{})})]}),Object(b.jsx)("img",{src:r,className:"app-logo",alt:"React logo"})]})})};c(53);n.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(O,{initialState:{cart:[]},reducer:k,children:Object(b.jsx)(y,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.e9a96107.chunk.js.map