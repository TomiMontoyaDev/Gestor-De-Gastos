// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv43fwfkDOqn0BWfHHPtQXBtpYH8s5_bo",
  authDomain: "gestor-de-gastos-6eaa3.firebaseapp.com",
  projectId: "gestor-de-gastos-6eaa3",
  storageBucket: "gestor-de-gastos-6eaa3.firebasestorage.app",
  messagingSenderId: "256004501104",
  appId: "1:256004501104:web:12689ce503e3c8ba3aceb5",
  measurementId: "G-XSD4SMK26V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const correo = document.getElementById("username").value.trim();
    const contrasena = document.getElementById("password").value.trim();

    try {
      await addDoc(collection(db, "usuarios"), {
        correo: correo,
        contrasena: contrasena, // ¡Solo para pruebas! ⚠️ No guardes contraseñas sin cifrar en producción.
      });
      alert("Datos enviados correctamente");
    } catch (error) {
      console.error("Error al guardar en Firestore:", error);
      alert("Error al enviar los datos");
    }
  });
