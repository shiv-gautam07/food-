// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1Gnd52Q_MZP41Lx0BcrZHXSNq0ItFWX4",
    authDomain: "foodwebsite-7b49f.firebaseapp.com",
    projectId: "foodwebsite-7b49f",
    storageBucket: "foodwebsite-7b49f.firebasestorage.app",
    messagingSenderId: "733389497305",
    appId: "1:733389497305:web:6550bb8ded77ea66dc2fc8",
    measurementId: "G-BJZKBL607S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
        try {
                const result = await auth.signInWithPopup(googleProvider);
                console.log(result.user);
        } catch (error) {
                console.error("Error during sign-in:", error);
        }
};

// Add auth state observer
const monitorAuthState = (callback) => {
        return onAuthStateChanged(auth, (user) => {
                if (user) {
                        // User is signed in
                        console.log("User is signed in:", user);
                        callback(user);
                } else {
                        // User is signed out
                        console.log("User is signed out");
                        callback(null);
                }
        });
};

export { auth, googleProvider, signInWithGoogle, monitorAuthState };