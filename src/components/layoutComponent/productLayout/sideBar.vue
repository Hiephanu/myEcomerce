<template>
  <div class="w-4/5 ml-12 mt-12 mr-8">
    <h1 class="text-xl text-primary font-bold">Danh mục sản phẩm</h1>

    <p class="h-1 bg-primary mt-8 w-full"></p>
    <div>
      <div v-for="(type, index) in subType" :key="index">
        <RouterLink :to="routeArr[index]"
          ><div
            class="mt-8 cursor-pointer hover:text-primary"
            @click="addStyle(index)"
            :class="{ 'text-primary': index == number }"
          >
            {{ type }}
          </div></RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { RouterLink } from "vue-router";
export default {
  props: {
    subType: Array,
    routes: Array,
  },
  setup(props) {
    const number = ref();
    const addStyle = (index) => {
      number.value = index;
    };
    const routeArr=ref(props.routes)
    return {
      addStyle,
      number,
      routeArr
    };
  },
  components: { RouterLink },
};
</script>
