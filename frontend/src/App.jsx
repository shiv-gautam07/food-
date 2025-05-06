import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

// Pages
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Placeorder from "./pages/placeorder/placeorder";
import Checkout from "./pages/placeorder/checkout";
import Myorders from "./pages/myorders/Myorders";
import Verify from "./pages/verify/Verify";
import Support from "./pages/support/support";

// Chatbot
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

// Styles
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

// Utils
import { getAuthToken } from "./misc";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showChat, setShowChat] = useState(false); // Define showChat state
  const [isSignin, setIsSignin] = useState();
  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      setIsSignin(true);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      {showLogin ? (
        <LoginPopup setShowLogin={setShowLogin} onSuccess={setIsSignin} />
      ) : (
        <></>
      )}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} isSignIn={isSignin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/order"
            element={
              <Placeorder setShowLogin={setShowLogin} isSignIn={isSignin} />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/Myorders" element={<Myorders />} />
          <Route path="/support" element={<Support />} />
        </Routes>

        {/* Chatbot Button and Component */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <button
            style={{
              padding: "10px",
              background: "orange", // Changed color to orange as per your previous request
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => setShowChat(!showChat)} // Toggle chat visibility
          >
            {showChat ? "Close Chat" : "Chat with Us"}
          </button>
          {showChat && (
            <div style={{ width: "350px", height: "400px" }}>
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
