<template>
  <div class="z-0!">
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide>
      <img src="../../../assets/imgs/slide1.jpg" alt="Sample 1" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../../assets/imgs/slide2.jpeg" alt="Sample 2" />
    </SplideSlide>
    <SplideSlide>
        <img src="../../../assets/imgs/slide3.png" alt="">
    </SplideSlide>
  </Splide>
  </div>
</template>
<script>
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
