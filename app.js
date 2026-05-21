import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcKxbx1xIZdRRCQkTaWP_xKrZnTUepUVM",
  authDomain: "hello-world-take-2.firebaseapp.com",
  projectId: "hello-world-take-2",
  storageBucket: "hello-world-take-2.firebasestorage.app",
  messagingSenderId: "505035118485",
  appId: "1:505035118485:web:24f1a1978f9ab9402ac89c",
  measurementId: "G-BJ1XK2TSYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// DOM elements
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loggedOutView = document.getElementById('logged-out-view');
const loggedInView = document.getElementById('logged-in-view');
const welcomeMsg = document.getElementById('welcome-msg');

// Auth state listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        welcomeMsg.textContent = `Hi, ${user.displayName}! Welcome to my app!`;
        loggedOutView.classList.add('hidden');
        loggedInView.classList.remove('hidden');
    } else {
        // User is signed out
        loggedOutView.classList.remove('hidden');
        loggedInView.classList.add('hidden');
    }
});

// Login
loginBtn.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .catch((error) => {
            console.error("Error during sign-in:", error);
        });
});

// Logout
logoutBtn.addEventListener('click', () => {
    signOut(auth)
        .catch((error) => {
            console.error("Error during sign-out:", error);
        });
});
