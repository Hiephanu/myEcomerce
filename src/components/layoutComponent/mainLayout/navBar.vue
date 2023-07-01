<template>
  <div
    class="flex justify-around bg-primary pt-4 pb-2 text-secondary font-bold z-40 relative sm:hidden"
  >
    <div class="group relative">
      <RouterLink
        to="/Gau-bong"
        class="relative hover:text-hover h-full pb-2 bg-primary"
        >Gấu bông</RouterLink
      >
      <div class="hidden group-hover:block absolute top-[32px]">
        <div>
          <div
            v-for="(type, index) in bearCategrories"
            :key="index"
            class="relative z-50 bg-subCategrory pt-4 pb-2 border-[1px] border-white w-56 cursor-pointer font-normal hover:text-hover"
          >
            <RouterLink :to="bearFormat[index]">{{ type }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="group relative">
      <RouterLink
        to="/Balo"
        class="relative hover:text-hover h-full pb-2 bg-primary"
        >Balo</RouterLink
      >
      <div class="hidden group-hover:block absolute top-[32px]">
        <div>
          <div
            v-for="(type, index) in baloCategrories"
            :key="index"
            class="relative z-50 bg-subCategrory pt-4 pb-2 border-[1px] border-white w-56 cursor-pointer font-normal hover:text-hover"
          >
            <RouterLink :to="baloFormat[index]">{{ type }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="group relative">
      <RouterLink
        to="/Trang-tri"
        class="relative hover:text-hover h-full pb-2 bg-primary"
        >Trang trí</RouterLink
      >
      <div class="hidden group-hover:block absolute top-[32px]">
        <div>
          <div
            v-for="(type, index) in decorateCategrories"
            :key="index"
            class="relative z-50 bg-subCategrory pt-4 pb-2 border-[1px] border-white w-56 cursor-pointer font-normal hover:text-hover"
          >
            <RouterLink :to="decorFomat[index]">{{ type }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="group relative">
      <RouterLink
        to="/Phu-kien-thoi-trang"
        class="relative hover:text-hover h-full pb-2 bg-primary"
        >Phụ kiện thời trang</RouterLink
      >
      <div class="hidden group-hover:block absolute top-[32px]">
        <div>
          <div
            v-for="(type, index) in fashionCategrories"
            :key="index"
            class="relative z-50 bg-subCategrory pt-4 pb-2 border-[1px] border-white w-56 cursor-pointer font-normal hover:text-hover"
          >
            <RouterLink :to="fashionFomat[index]">{{ type }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="group relative">
      <RouterLink
        to="/Phu-kien-dien-thoai"
        class="relative hover:text-hover h-full pb-2 bg-primary"
        >Phụ kiện điện thoại</RouterLink
      >
      <div class="hidden group-hover:block absolute top-[32px]">
        <div>
          <div
            v-for="(type, index) in phoneCategrories"
            :key="index"
            class="relative z-50 bg-subCategrory pt-4 pb-2 border-[1px] border-white w-56 cursor-pointer font-normal hover:text-hover"
          >
            <RouterLink :to="phoneFormat[index]">{{ type }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="group relative">
      <RouterLink
        to="/Do-choi"
        class="relative hover:text-hover h-full pb-2 bg-primary"
        >Đồ chơi</RouterLink
      >
      <div class="hidden group-hover:block absolute top-[32px] left-[-160px]">
        <div>
          <div
            v-for="(type, index) in toyCategrories"
            :key="index"
            class="relative z-50 bg-subCategrory pt-4 pb-2 border-[1px] border-white w-56 cursor-pointer font-normal hover:text-hover"
          >
            <RouterLink :to="toyFormat[index]">{{ type }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { handleCategrories } from "@/services/categrories.js";
import formattedRoute from "@/composable/formattedRoute.js";
import { computed } from "vue";
export default {
  setup() {
    const {
      categrories,
      bearCategrories,
      baloCategrories,
      stationeryCategrories,
      decorateCategrories,
      fashionCategrories,
      phoneCategrories,
      toyCategrories,
    } = handleCategrories();
    const bearFormat = computed(() => {
      return formattedRoute(bearCategrories, "/Gau-bong");
    });
    const baloFormat = computed(() => {
      return formattedRoute(baloCategrories, "/Balo");
    });
    const decorFomat = computed(() => {
      return formattedRoute(decorateCategrories, "/Trang-tri");
    });
    const fashionFomat = computed(() => {
      return formattedRoute(fashionCategrories, "/Phu-kien-thoi-trang");
    });
    const phoneFormat = computed(() => {
      return formattedRoute(phoneCategrories, "/Phu-kien-dien-thoai");
    });
    const toyFormat = computed(() => {
      return formattedRoute(toyCategrories, "/Do-choi");
    });
    return {
      categrories,
      bearCategrories,
      baloCategrories,
      stationeryCategrories,
      decorateCategrories,
      fashionCategrories,
      phoneCategrories,
      toyCategrories,
      bearFormat,
      baloFormat,
      decorFomat,
      fashionFomat,
      phoneFormat,
      toyFormat,
    };
  },
};
</script>
