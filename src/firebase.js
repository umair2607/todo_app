import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB63zVhxvnixgxM_xyyzJcfhig88-d7v7k",
  authDomain: "todo-app-2104e.firebaseapp.com",
  projectId: "todo-app-2104e",
  storageBucket: "todo-app-2104e.appspot.com",
  messagingSenderId: "116161719985",
  appId: "1:116161719985:web:1d934cf36f4938a336bc90",
};

// to initialize app
const app = initializeApp(firebaseConfig);

// to get auth
const auth = getAuth();

// to create a user with email and paassword
export const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

// to Signin a user with email and paassword
export const SignInUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      console.log(user);
    }
  );
};