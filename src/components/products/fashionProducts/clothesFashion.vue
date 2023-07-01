<template>
    <div v-if="products.length!=0">
        <productCom categroryProp="Phụ kiện thời trang > Phụ kiện " :products="products"/>
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
            if(store.state.fashionProducts.length==0){
                await store.dispatch("getFashionProducts")
            }  
           products.value.push(store.state.fashionProducts[1])
        }
        getApi()
        })
        return {
            products
        }
    }
}
</script>