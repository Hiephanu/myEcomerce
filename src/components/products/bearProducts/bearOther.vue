<template>
    <div v-if="products.length!=0">
        <productCom categroryProp="Gấu bông > Gấu bông khác" :products="products"/>
    </div>
</template>
<script>
import productCom from '../productCom/productCom.vue';
import {ref,onMounted} from 'vue'
import store from '@/store';
export default {
    components:{
        productCom
    },
    setup(){
        const products=ref([])
        onMounted(()=>{
            const getApi=async ()=>{
            if(store.state.bearProducts.length==0){
                await store.dispatch("getBearProducts")
            }
           for(let i=8;i<12;i++){
           products.value.push(store.state.bearProducts[i])
           }
        }
        getApi()
        })
        return {
            products
        }
    }
}
</script>