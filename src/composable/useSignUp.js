import { ref } from "vue";
import { projectAuth, db } from "@/config/firebase.js";
import { setDoc, doc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);


async function signUp(email, password, username) {
  isPending.value = true;
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    if (!res) {
      throw new Error("Can not create a new user");
    }

    await updateProfile(res.user, {
      displayName: username,
    });
    console.log(res.user);
    const newUser = doc(db, "users", res.user.uid);
    const dataUser = {
      name: username,
      id: res.user.uid,
      email: email,
    };
    await setDoc(newUser, dataUser);

    return res;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signUp };
}