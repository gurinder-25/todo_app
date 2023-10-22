import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCyl1pAsEPudkc9cnhu6FAJAgFK8W4k748",
    authDomain: "todo-crud-c2ba6.firebaseapp.com",
    projectId: "todo-crud-c2ba6",
    storageBucket: "todo-crud-c2ba6.appspot.com",
    messagingSenderId: "280643622877",
    appId: "1:280643622877:web:a152334824e1a4d74a4834",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };