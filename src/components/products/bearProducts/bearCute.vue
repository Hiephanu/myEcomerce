<template>
    <div v-if="products.length!=0">
        <productCom categroryProp="Gấu bông > Gấu bông cute" :products="products"/>
    </div>
</template>
<script>
import productCom from '@/components/products/productCom/productCom.vue'
import store from '@/store'
import {ref,onMounted} from 'vue'
export default{
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
           for(let i=0;i<4;i++){
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