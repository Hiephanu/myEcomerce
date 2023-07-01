import {ref} from 'vue'
import { projectAuth } from '@/config/firebase'
const error=ref('')
const pending=ref(false)

async function signIn(email,password){
    error.value=null
    pending.value=true
    try{
        const res =await projectAuth.signInWithEmailAndPassword(email,password)
        console.log(res);
        console.log(projectAuth.currentUser);
    }
    catch(err){
        error.value=err.message
    }
    finally{
        pending.value=false
    }
}
export function useSignIn(){
    return {error,pending,signIn}
}