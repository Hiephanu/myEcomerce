<template>
    <div v-if="products.length!=0">
        <productCom categroryProp="Phụ kiện thời trang" :products="products"/>
    </div>
</template>
<script>
import store from '@/store';
import productCom from '../productCom/productCom.vue';
import {ref} from 'vue'
import {useRoute} from 'vue-router'
export default{
    components:{
        productCom
    },
    setup(){
        const route=useRoute()
        const categrory=ref(route.path)
        const products=ref([])
        const getApi=async ()=>{
            await store.dispatch("getFashionProducts")
            products.value=store.state.fashionProducts
        }
        getApi()
        return {
            categrory,
            products
        }
    }
}
</script>