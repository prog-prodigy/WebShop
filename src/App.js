// import { onAuthStateChanged } from "firebase/auth";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
// import Cart from "./components/Cart/Cart";
// import Home from "./components/Home";
// import Login from "./components/Login-Register/Login";
// import Register from "./components/Login-Register/Register";
// import { authActions } from "./components/store/authSlice";
// import { fetchData } from "./components/store/cart-actions";
// import { auth, authfirebase } from "./firebase";
// let isFirstRender = true

// function App() {
//   const [form, setForm] = useState(true);
//   const [user, setUser] = useState({});
//   const dispatch = useDispatch();
//   onAuthStateChanged(authfirebase, (currentUser) => {
//     setUser(currentUser);
//     dispatch(authActions.login());
//   });
//   const changeForm = () => {
//     setForm((prev) => !prev);
//   };
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const ShowCart = useSelector((state) => state.cart.showCart);

//   useEffect(()=>{
//     dispatch(fetchData())
//   },[dispatch])

//   //firebasefunc to send data
//   const cart = useSelector(state=> state.cart)
//   useEffect(()=>{
//     if(isFirstRender){
//       isFirstRender=false
//       return;
//     }
//   if(cart.changed){
//     fetch('https://react-http-561b5-default-rtdb.firebaseio.com/cartItems.json',
//     {
//       method:'PUT',
//       body: JSON.stringify(cart)
//     })
//   }
//   },[cart])
//   if (ShowCart && isLoggedIn && user) {
//     return <Cart />;
//   } else if (isLoggedIn && user?.email) {
//     return <Home user={user?.email} />;
//   } else if (form) {
//     return <Login changeForm={changeForm} />;
//   } else if (!form) {
//     return <Register changeForm={changeForm} />;
//   }
// }

// export default App;
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home";
import Login from "./components/Login-Register/Login";
import Register from "./components/Login-Register/Register";
import { authActions } from "./components/store/authSlice";
import { fetchData } from "./components/store/cart-actions";
import { auth, authfirebase } from "./firebase";
let isFirstRender = true

function App() {
  const [form, setForm] = useState(true);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  onAuthStateChanged(authfirebase, (currentUser) => {
    setUser(currentUser);
    dispatch(authActions.login());
  });
  const changeForm = () => {
    setForm((prev) => !prev);
  };
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const ShowCart = useSelector((state) => state.cart.showCart);

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

  //firebasefunc to send data
  const cart = useSelector(state=> state.cart)
  useEffect(()=>{
    if(isFirstRender){
      isFirstRender=false
      return;
    }
  if(cart.changed){
    fetch('https://react-http-561b5-default-rtdb.firebaseio.com/cartItems.json',
    {
      method:'PUT',
      body: JSON.stringify(cart)
    })
   
  }
  },[cart,])
  if (ShowCart && user) {
    return <Cart />;
  } else if (user?.email) {
    return <Home user={user?.email} />;
  } else if (form) {
    return <Login user={user?.email}  changeForm={changeForm} />;
  } else if (!form) {
    return <Register user={user?.email} changeForm={changeForm} />;
  }
}

export default App;
