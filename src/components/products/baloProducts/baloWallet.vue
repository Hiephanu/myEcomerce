<template>
    <div v-if="products.length!=0">
        <productCom categroryProp="Balo > Ví" :products="products"/>
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
                await store.dispatch("getBaloProducts")
            }
           for(let i=6;i<8;i++){
           products.value.push(store.state.baloProducts[i])
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