import { initializeApp } from '@firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getReactNativePersistence,
  initializeAuth
} from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore'; // Uncomment if you use Firestore
// import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics"; // Uncomment if you use Analytics

// --- IMPORTANT: REPLACE WITH YOUR ACTUAL FIREBASE CONFIG VALUES ---
const firebaseConfig = {
  apiKey: "AIzaSyB3ehkZXBQMAndB07TqZnBmcFxGBtfF_zI",
  authDomain: "pestisafe-1bf4f.firebaseapp.com",
  projectId: "pestisafe-1bf4f",
  storageBucket: "pestisafe-1bf4f.firebasestorage.app",
  messagingSenderId: "879233375009",
  appId: "1:879233375009:web:c9cc95636d822e2d4e3c60",
  measurementId: "G-MYZ2W85V5W"
};
// --- END OF IMPORTANT CONFIG SECTION ---

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with React Native persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize other Firebase services if you use them
// const db = getFirestore(app);

// Example for conditionally initializing Analytics (if you use it)
// let analytics;
// isAnalyticsSupported().then((supported) => {
//   if (supported) {
//     analytics = getAnalytics(app);
//     console.log("Firebase Analytics initialized");
//   } else {
//     console.log("Firebase Analytics is not supported in this environment.");
//   }
// });

// Export the initialized services
export { app, auth }; // Add other services like db, analytics if you initialized them

