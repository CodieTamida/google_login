import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrnHwCRUhTg3vCskx_acWcRKS1Zh-LtTE",
  authDomain: "auth-362f8.firebaseapp.com",
  projectId: "auth-362f8",
  storageBucket: "auth-362f8.appspot.com",
  messagingSenderId: "632151579364",
  appId: "1:632151579364:web:139e58e01c82a0ff376af1",
  measurementId: "G-V8QJ1ZC3QC",
};

const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
export const auth = getAuth(app);
{
  /*
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(result);

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};


export default app;
*/
}
