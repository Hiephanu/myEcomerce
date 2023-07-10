<template>
  <div class="flex justify-center">
    <div class="w-3/5">
      <div>
        <input
          type="text"
          placeholder="  Nhập email hoặc tên đăng nhập"
          class="w-4/5 h-[45px] mt-8 ml-[10%] border-[1px] border-black"
          v-model="email"
        />
      </div>
      <div class="">
        <input
          type="password"
          placeholder="  Mật khẩu"
          class="w-4/5 h-[45px] mt-8 ml-[10%] border-[1px] border-black"
          v-model="password"
        />
      </div>
      <button
        class="text-center w-4/5 ml-[10%] h-12 bg-primary text-white mt-8 rounded cursor-pointer hover:bg-secondary"
        :class="{ pending: 'bg-gray' }"
        @click="login"
      >
        Đăng nhập
      </button>
      <div v-if="error">
        <p class="text-red-400 mt-4 text-center">{{ error }}</p>
      </div>
      <p class="text-center mt-4 cursor-pointer">Quên mật khẩu</p>
      <p class="text-center text-xl mt-4">Hoặc đăng nhập với</p>
      <p
        class="text-center mt-4 w-4/5 bg-blue-600 text-white pb-2 pt-2 ml-[10%] rounded cursor-pointer"
        @click="loginWithFacebook"
      >
        Đăng nhập với Facebook
      </p>
      <p
        class="text-center mt-4 w-4/5 bg-red-500 text-white pb-2 pt-2 ml-[10%] rounded cursor-pointer"
        @click="loginWithGoogle"
      >
        Đăng nhập với Google
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useSignIn } from "@/composable/useSignIn.js";
import router from "@/router/router";
import signInWithGoogle from "@/composable/loginWithGoogle";
import signInWithFacebook from "@/composable/loginWithFacebook"
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const { error, signIn, pending } = useSignIn();
    const login = async () => {
      await signIn(email.value, password.value);
      if (!error.value) {
        router.push("/");
      }
      setTimeout(() => {
        error.value = null;
      }, 4000);
    };
    const loginWithGoogle=async ()=>{
       await signInWithGoogle()
      router.push("/")
    }
    const loginWithFacebook=async ()=>{
      await signInWithFacebook()
      router.push("/Dang-nhap")
    }
    return {
      email,
      password,
      error,
      pending,
      login,
      loginWithGoogle,
      loginWithFacebook
    };
  },
};
</script>
