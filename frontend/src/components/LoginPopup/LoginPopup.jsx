import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { getBaseApiUrl, saveAuthToken } from "../../misc";
import { toast } from "react-toastify";
import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../../firebase"; // Ensure Firebase is initialized
import googleIcon from "../../assets/google.svg"

const Login = ({ onSuccess, setCurrState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    if (!email) {
      setError("Please provide email to login");
      setLoading(false);
      return;
    }
    if (!password) {
      setError("Please provide password to login");
      setLoading(false);
      return;
    }
    try {
      const result = await axios.post(getBaseApiUrl() + "/signin", {
        email,
        password,
      });
      console.log("Login result", result);
      const resp = result.data || {};
      if (resp.success) {
        saveAuthToken(resp.data.token);
        toast.success(resp.message);
        onSuccess(false);
        setEmail("");
        setPassword("");
      } else {
        setError(resp.message);
        saveAuthToken(null);
      }
    } catch (e) {
      console.log("Login failed", e);
      setError("Login failed!");
      saveAuthToken(null);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Login Success", user);
      toast.success("Logged in with Google!");
      onSuccess(false);
    } catch (e) {
      console.log("Google Login failed", e);
      setError("Google Login failed!");
    }
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      <input
        type="email"
        placeholder="Your email"
        required
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <button type="button" onClick={handleLogin}>
        {loading ? "Please wait..." : "Login"}
      </button>
      <button type="button" className="googleSignup" onClick={handleGoogleLogin}>
        <img src={googleIcon} alt="Google icon" width="20" />
        Log in with Google
      </button>
      <p>
        Create a new account?{" "}
        <span onClick={() => setCurrState("Sign Up")}>Click here</span>
      </p>
    </>
  );
};

const Register = ({ onSuccess, setCurrState }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    setError("");

    if (!firstName) {
      setError("Please provide first name");
      setLoading(false);
      return;
    }
    if (!lastName) {
      setError("Please provide last name");
      setLoading(false);
      return;
    }
    if (!email) {
      setError("Please provide email");
      setLoading(false);
      return;
    }
    if (!password) {
      setError("Please provide password");
      setLoading(false);
      return;
    }
    if (!confirmPassword) {
      setError("Please confirm your password");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const result = await axios.post(getBaseApiUrl() + "/signup", {
        fname: firstName,
        lname: lastName,
        email,
        password,
        confirmPassword,
      });
      console.log("Register result", result);
      const resp = result.data || {};
      if (resp.success) {
        toast.success(resp.message);
        onSuccess(false, true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setError(resp.message);
      }
    } catch (e) {
      console.log("Registration failed", e);
      setError("Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Signup Success", user);
      toast.success("Signed up with Google!");
      onSuccess(false, true);
    } catch (e) {
      console.log("Google Signup failed", e);
      setError("Google Signup failed!");
    }
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        placeholder="Your first name"
        required
        value={firstName}
        onChange={(evt) => setFirstName(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Your last name"
        required
        value={lastName}
        onChange={(evt) => setLastName(evt.target.value)}
      />
      <input
        type="email"
        placeholder="Your email"
        required
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        required
        value={confirmPassword}
        onChange={(evt) => setConfirmPassword(evt.target.value)}
      />
      <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>By continuing, I agree to the terms of use & privacy policy.</p>
      </div>
      <button type="button" onClick={handleRegister}>
        {loading ? "Please wait..." : "Create account"}
      </button>
      <button type="button" className="googleSignup" onClick={handleGoogleSignup}>
        <img src={googleIcon} alt="Google icon" width="20" />
        Sign up with Google
      </button>
      <p>
        Already have an account?{" "}
        <span onClick={() => setCurrState("Login")}>Login here</span>
      </p>
    </>
  );
};

const LoginPopup = ({ onSuccess, setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <Login
              setCurrState={setCurrState}
              onSuccess={(status, isSignIn) => {
                setShowLogin(status);
                onSuccess(isSignIn);
              }}
            />
          ) : (
            <Register
              setCurrState={setCurrState}
              onSuccess={(status) => setShowLogin(status)}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
