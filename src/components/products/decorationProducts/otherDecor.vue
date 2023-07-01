<template>
    <div v-if="products.length!=0">
        <productCom categroryProp="Trang trí > Trang trí khác" :products="products"/>
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
            if(store.state.decorationProducts.length==0){
                await store.dispatch("getDecorationProducts")
            }
           for(let i=7;i<=9;i++){
           products.value.push(store.state.decorationProducts[i])
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