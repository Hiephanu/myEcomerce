<template>
  <div>
    <h1 class="mt-12 font-bold text-secondary text-3xl">Sản phẩm mới</h1>
    <div class="grid grid-cols-4 gap-8 mt-12 ml-12 mr-12 font-sans sm:grid sm:grid-cols-2">
      <div v-for="(product, index) in newProducts" :key="index">
        <div class="relative" @click="selectProduct(index)">
          <div class="group">
            <div class="w-full overflow-auto hover:overflow-hidden overflow-hidden">
              <RouterLink to="/product">
              <img
                :src="product.img"
                alt=""
                class="w-full h-full  hover:scale-125 cursor-pointer relative transform origin-center transition-transform duration-300"
              />
            </RouterLink>
            </div>
          </div>
          <p class="absolute top-0 left-0 p-4 bg-primary text-white">New</p>
        </div>
        <p class="mt-2 font-bold text-xl hover:text-primary cursor-pointer">
          {{ product.name }}
        </p>
        <p class="hover:text-primary text-xl w-full cursor-pointer sm:hidden">
          {{ product.description }}
        </p>
        <p class="font-bold mt-2">{{ product.price }}đ</p>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { ref } from "vue";
export default {
  setup() {
    const newProducts = ref([]);
    const getApi = async () => {
      await store.dispatch("getNewProducts");
      newProducts.value = store.state.newProducts;
    };
    getApi();
    const selectProduct = (index) => {
      store.dispatch("selectedProduct", newProducts.value[index]);
    };
    return {
      newProducts,
      selectProduct,
    };
  },
};
</script>
