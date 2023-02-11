
import { initializeApp } from "firebase/app";

// данные для подкчюения к бд firebase:
const firebaseConfig = {
      apiKey: "AIzaSyBZjKslnZrt3Rbm7sDyM2wXIHHkEY_9KJw",
      authDomain: "firetest-4fcbd.firebaseapp.com",
      databaseURL: "https://firetest-4fcbd-default-rtdb.firebaseio.com",
      projectId: "firetest-4fcbd",
      storageBucket: "firetest-4fcbd.appspot.com",
      messagingSenderId: "171830237030",
      appId: "1:171830237030:web:03f2c25cf60fa6a4931aa7",
      measurementId: "G-5C2JW9L3RG"
};



export const app = initializeApp(firebaseConfig);
