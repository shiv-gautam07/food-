import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { Storecontext } from "../../context/Storecontext";
import { saveAuthToken } from "../../misc";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = ({ setShowLogin, isSignIn }) => {
  const [menu, setMenu] = useState("home");
  const [user, setUser] = useState(null);
  const { getTotalCartAmount } = useContext(Storecontext);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        saveAuthToken("");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
        <Link
          to="/support"
          onClick={() => setMenu("support")}
          className={menu === "support" ? "active" : ""}
        >
          Support
        </Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {user ? (
          <div className="navbar-user">
            {/* {user.photoURL && (
              // <img
              //   src={user.photoURL}
              //   alt="User"
              //   style={{ width: 25, height: 25, borderRadius: "50%", marginRight: 8 }}
              // />
            )} */}
            <span style={{ marginRight: 10 }}>{user.displayName || user.email}</span>
            <span
              style={{ cursor: "pointer", color: "red" }}
              onClick={handleLogout}
            >
              Logout
            </span>
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
