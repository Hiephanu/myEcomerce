import { auth,provider } from "@/config/firebase";
import { signInWithPopup ,FacebookAuthProvider} from "firebase/auth";
async function signInWithFacebook(){
    signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(user);
      const accessToken = credential.accessToken;
        localStorage.setItem("token",accessToken)
      // IdP data available using getAdditionalUserInfo(result)
    })
    .catch((error) => {
     console.log(error);
   })
}
export default signInWithFacebook