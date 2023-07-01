<template>
    <div v-if="products.length!=0">
        <productCom categroryProp="Đồ chơi" :products="products"/>
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
            await store.dispatch("getToyProducts")
            products.value=store.state.toyProducts
        }
        getApi()
        return {
            categrory,
            products
        }
    }
}
</script>