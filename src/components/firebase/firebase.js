import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Import other Firebase products you need (e.g., getFirestore, getStorage)

const firebaseConfig = {
  apiKey: "AIzaSyCdT8PaLktNDgqqGyHyXfhT3lAqNSpEVc0",
  authDomain: "reduxlearn-56cbc.firebaseapp.com",
  projectId: "reduxlearn-56cbc",
  storageBucket: "reduxlearn-56cbc.appspot.com",
  messagingSenderId: "556832382364",
  appId: "1:556832382364:web:b9dd26d86c2a56ed447c59",
  measurementId: "G-RX16XZVZY0"
};

// Initialize the Firebase app **before** using any Firebase services
const app = initializeApp(firebaseConfig);

// Get the Auth instance after initializing the app


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };


// Export both app and auth for flexibility
// You can choose to export only auth or both depending on your needs.
