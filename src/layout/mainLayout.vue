<template>
  <div class=""> 
    <navOverView/>
    <authSearch class="h-[15vh]"/>
    <navBar/>
    <slot />
    <footerComp class="mt-24"/>
  </div>
</template>
<script>
import navOverView from '@/components/layoutComponent/mainLayout/navOverview.vue'
import authSearch from '@/components/layoutComponent/mainLayout/authSearch.vue';
import navBar from '@/components/layoutComponent/mainLayout/navBar.vue';
import footerComp from '@/components/layoutComponent/mainLayout/footerComp.vue';
export default {
  components: {
    navOverView,
    authSearch,
    navBar,
    footerComp
  },
  setup() {},
};
</script>
