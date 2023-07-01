<template>
    <div v-if="products.length!=0">
        <productCom categroryProp="Kiện điện thoại > Tai nghe " :products="products"/>
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
            if(store.state.phoneProducts.length==0){
                await store.dispatch("getPhoneProducts")
            }  
           products.value.push(store.state.phoneProducts[0])
        }
        getApi()
        })
        return {
            products
        }
    }
}
</script>