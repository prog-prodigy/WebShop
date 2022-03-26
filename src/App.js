import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home";
import Login from "./components/Login-Register/Login";
import Register from "./components/Login-Register/Register";
import { authActions } from "./components/store/authSlice";
import { auth, authfirebase } from "./firebase";

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
  
  if (ShowCart && isLoggedIn && user) {
    return <Cart />;
  } else if (isLoggedIn && user?.email) {
    return <Home user={user?.email} />;
  } else if (form) {
    return <Login changeForm={changeForm} />;
  } else if (!form) {
    return <Register changeForm={changeForm} />;
  }
}

export default App;
