<template>
  <div>
    <h1 class="mt-12 text-xl text-primary font-bold">{{ categrory }}</h1>
    <div class="h-1 bg-primary mt-8"></div>
    <div class="grid grid-cols-4 gap-4 mt-8">
      <div
        v-for="(product, index) in productArr"
        :key="index"
        class="cursor-pointer"
      >
        <div class="w-full overflow-auto hover:overflow-hidden overflow-hidden h-72" @click="selectProduct(index)">
          <RouterLink to="/product">
            <img
              :src="product.img"
              alt=""
              class="w-full h-full hover:scale-125 cursor-pointer relative transform origin-center transition-transform duration-300"
            />
          </RouterLink>
        </div>
        <p class="mt-4">{{ product.name }}</p>
        <p class="mt-2">{{ product.description }}</p>
        <p class="mt-2">{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import store from '@/store.js'
export default {
  props: {
    categroryProp: String,
    products: Array,
  },
  setup(props) {
    const categrory = ref(props.categroryProp);
    const productArr = ref(props.products);
    const selectProduct = (index) => {
      store.dispatch("selectedProduct", productArr.value[index]);
    };
    return {
      categrory,
      productArr,
      selectProduct
    };
  },
};
</script>
