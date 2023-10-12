<template>
  <div class="flex justify-around mt-8 sm:block ">
    <div class="h-16 w-24  sm:w-16 sm:h-16 sm:m-auto">
      <RouterLink to="/">
        <img
          src="../../../assets/imgs/logo.png"
          alt=""
      /></RouterLink>
    </div>
    <searchBar class="mt-4"/>
    <div class="flex justify-between text-secondary text-xl font-semibold mt-2 mt-4">
      <div class="flex" v-if="!user">
        <RouterLink to="/Dang-ky" class="hover:text-primary mr-2"
          >Đăng ký</RouterLink
        >
        <p>|</p>
        <RouterLink to="/Dang-nhap" class="hover:text-primary ml-2"
          >Đăng nhập</RouterLink
        >
      </div>
      <div v-else class="mr-12 cursor-pointer sm:hidden">
        <div class="cursor-pointer">
          {{ user.displayName }}
        </div>
      </div>
      <div class="relative group ml-2 z-50 cursor-pointer sm:hidden" v-if="user">
        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        <p
          class="absolute top-[-12px] right-[-16px] text-xs p-2 bg-primary rounded-full"
        >
          {{ number }}
        </p>
        <div
          class="absolute bg-white w-80 top-2 left-[-270px] p-2 h-96 overflow-y-auto hidden group-hover:block"
        >
          <div
            v-for="(product, index) in cartData"
            :key="index"
            class="grid mt-2 border-t-[1px] pt-2 border-gray-200 grid-cols-2"
          >
            <img :src="product.docData.choseProduct.img" alt="" class="w-4/5 h-4/5" />
            <div>
              <p class="text-primary text-xl font-semibold">
                {{ product.docData.choseProduct.name }}
              </p>
              <p class="text-xs font-semibold">
                Đơn giá : {{ product.docData.choseProduct.price }}
              </p>
            </div>
          </div>
        </div>
        <div class="group-hover:block hidden absolute top-96 left-[-270px] w-80 h-18 bg-white pb-4">
          <RouterLink to="/cart"> <button class="mt-4 pt-4 pb-4 pl-8 pr-8 text-white bg-primary ml-[23%]">Xem giỏ hàng</button></RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { projectAuth } from "@/config/firebase";
import searchBar from "./searchBar.vue";
import { computed } from "vue";
import store from "@/store";
export default {
  components: {
    searchBar,
  },
  setup() {
    const user = projectAuth.currentUser;
    const getCart = async () => {
      await store.dispatch("getCartData");
    };
    getCart();
    const number = computed(() => {
      return store.state.cart.length;
    });
    const cartData = computed(() => {
      return store.state.cart;
    });
    return {
      user,
      number,
      cartData,
    };
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #a0a0a0;
  border-radius: 4px;
}

::-webkit-scrollbar-track {
  background-color: #f0f0f0;
}
</style>
