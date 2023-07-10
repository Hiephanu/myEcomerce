import { auth,provider } from "@/config/firebase";
import { signInWithPopup } from "firebase/auth";
async function signInWithGoogle(){
    await signInWithPopup(auth,provider)
    .then((data)=>{
        const value=data.user.email
        localStorage.setItem("email",value)
    })
}
export default signInWithGoogle