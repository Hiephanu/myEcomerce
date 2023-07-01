<template>
    <div>
        <headerAuth/>
        <slot/>
        <footerCom/>
    </div>
</template>
<script>
import headerAuth from '@/components/layoutComponent/authLayout/headerAuth.vue';
import footerCom from '@/components/layoutComponent/mainLayout/footerComp.vue'
export default{
    components:{
        headerAuth,
        footerCom
    }

}
</script>