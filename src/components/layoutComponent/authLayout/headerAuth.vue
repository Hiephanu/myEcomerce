<template>
  <div class="flex justify-between">
    <div class="flex mt-4 ml-8">
      <RouterLink to="/"
        ><img
          src="https://img.cdn.vncdn.io/cdn-pos/cba2a3-7534/store/20230331_SR9LJplI.png"
          alt=""
          class="w-28 h-16"
      /></RouterLink>
      <h1 class="ml-8 mt-4 text-secondary text-3xl font-bold">Moji</h1>
    </div>
    <div class="mt-8 mr-8">Bạn cần trợ giúp ?</div>
  </div>
  <div class="flex justify-center">
    <div
      class="flex w-3/5 justify-around mt-8 border-[1px] border-gray drop-shadow-2xl"
    >
      <RouterLink to="/Dang-nhap"
        ><p
          class="text-3xl text-primary pb-2 pt-2"
          :class="{ 'border-primary border-b-4': checkRoute }"
          @click="check"
        >
          Đăng nhập
        </p></RouterLink
      >
      <RouterLink to="/Dang-ky">
        <p
          class="text-3xl text-primary pb-2 pt-2"
          :class="{ 'border-primary border-b-4': !checkRoute }"
          @click="check"
        >
          Đăng ký
        </p>
      </RouterLink>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();
    const checkRoute = computed(() => {
      return route.path === "/Dang-nhap";
    });

    const check = () => {
      console.log(checkRoute.value);
    };

    check();

    return {
      checkRoute,
      check
    };
  },
};
</script>
