<template>
    <div v-if="products.length!=0">
        <productCom categroryProp="Đồ chơi > Tô tranh màu " :products="products"/>
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
            if(store.state.toyProducts.length==0){
                await store.dispatch("getToyProducts")
            }  
           products.value.push(store.state.toyProducts[2])
        }
        getApi()
        })
        return {
            products
        }
    }
}
</script>