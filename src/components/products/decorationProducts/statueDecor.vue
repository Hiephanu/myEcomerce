<template>
    <div v-if="products.length!=0">
        <productCom categroryProp="Trang trí > Tượng" :products="products"/>
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
           for(let i=0;i<2;i++){
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