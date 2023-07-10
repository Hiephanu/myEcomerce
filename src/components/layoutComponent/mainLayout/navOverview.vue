<template>
  <div
    class="flex justify-end bg-primary pt-2 pb-2 text-secondary font-semibold text-lg sm:text-xs"
  >
    <p class="mr-8">Hệ thống cửa hàng</p>
    <p class="mr-8">Tuyển dụng</p>
  </div>
</template>
<script>
import {check} from '@/composable/checkNameCart.js' 
export default {
  setup(){
    check("Balo gấu")
  }
};
</script>
