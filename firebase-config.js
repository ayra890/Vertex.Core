// Vertex Core Firebase Authentication configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxasK8QgcwfdN0-R1r0l5W_qoyFVDDQ10",
  authDomain: "my-website-app-4bb7e.firebaseapp.com",
  projectId: "my-website-app-4bb7e",
  storageBucket: "my-website-app-4bb7e.firebasestorage.app",
  messagingSenderId: "295840286448",
  appId: "1:295840286448:web:2948fa463ea9b115342435"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firebaseConfigured = !Object.values(firebaseConfig).some(value => String(value).startsWith("YOUR_"));
