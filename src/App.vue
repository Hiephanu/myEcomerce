<template>
  <component :is="layout">
    <RouterView class="font-nunito"/>
  </component>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
export default {
  name: 'App',
  components: {
  },
  setup(){
    const route=useRoute()
    return {
      layout:computed(()=>route.meta.layout || 'mainLayout')
    }
  }  
}
</script>

<style>
*{
  padding:0;
  margin: 0;
  font-family: sans-serif;
}
.main{
  background-color: black;
}
</style>
