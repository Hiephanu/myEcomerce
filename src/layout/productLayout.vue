<template>
  <component :is="layout">
    <div class="flex">
      <sideBar :subType="typeArray" :routes="routeArr" class="w-[25%]" />
      <slot class="w-[75%]" />
    </div>
  </component>
</template>
<script>
import { ref, watch } from "vue";
import { handleCategrories } from "@/services/categrories.js";
import sideBar from "@/components/layoutComponent/productLayout/sideBar.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    sideBar,
  },
  setup() {
    const layout = ref("mainLayout");
    const {
      bearCategrories,
      baloCategrories,
      stationeryCategrories,
      decorateCategrories,
      fashionCategrories,
      phoneCategrories,
      toyCategrories,
      routeBear,
      routeBalo,
      routeDecor,
      routeFashion,
      routePhone,
      routeToy,
    } = handleCategrories();
    const route = useRoute();
    const routeArr = ref([]);
    const typeArray = ref([]);
    switch (true) {
      case route.path.includes("/Gau-bong"):
        typeArray.value = bearCategrories;
        routeArr.value = routeBear;
        break;
      case route.path.includes("/Balo"):
        typeArray.value = baloCategrories;
        routeArr.value = routeBalo;
        break;
      case route.path.includes("/Van-phong-pham"):
        typeArray.value = stationeryCategrories;
        routeArr.value=[]
        break;
      case route.path.includes("/Trang-tri"):
        typeArray.value = decorateCategrories;
        routeArr.value=routeDecor
        break;
      case route.path.includes("/Phu-kien-thoi-trang"):
        typeArray.value = fashionCategrories;
        routeArr.value=routeFashion
        break;
      case route.path.includes("/Phu-kien-dien-thoai"):
        typeArray.value = phoneCategrories;
        routeArr.value=routePhone
        break;
      case route.path.includes("/Do-choi"):
        typeArray.value = toyCategrories;
        routeArr.value=routeToy
        break;
    }
    watch(
      () => route.path,
      (newPath) => {
        switch (true) {
          case newPath.includes("/Gau-bong"):
            typeArray.value = bearCategrories;
            routeArr.value = routeBear;
            break;
          case newPath.includes("/Balo"):
            typeArray.value = baloCategrories;
            routeArr.value = routeBalo;
            break;
          case newPath.includes("/Van-phong-pham"):
            typeArray.value = stationeryCategrories;
            routeArr.value=[]
            break;
          case newPath.includes("/Trang-tri"):
            typeArray.value = decorateCategrories;
            routeArr.value=routeDecor
            break;
          case newPath.includes("/Phu-kien-thoi-trang"):
            typeArray.value = fashionCategrories;
            routeArr.value=routeFashion
            break;
          case newPath.includes("/Phu-kien-dien-thoai"):
            typeArray.value = phoneCategrories;
            routeArr.value=routePhone
            break;
          case newPath.includes("/Do-choi"):
            typeArray.value = toyCategrories;
            routeArr.value=routeToy
            break;
        }
      }
    );

    return {
      layout,
      typeArray,
      routeArr,
    };
  },
};
</script>
