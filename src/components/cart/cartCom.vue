<template>
    <div>
        <div class="grid grid-cols-6 text-center mt-8 border-2 border-gray-200 w-[90%] m-auto p-4">
            <p>Sản phẩm</p>
            <p>Mô tả</p>
            <p>Đơn giá</p>
            <p>Số lượng </p>
            <p>Tổng</p>
            <p>Thao tác</p>
        </div>
        <div class="mt-8">
            <div v-for="product,index in cartProduct" :key="index" class="grid grid-cols-6 text-center mt-1 border-2 border-gray-200 w-[90%] m-auto p-4">
                <div>
                    {{ product.choseProduct.name }}
                    <img :src="product.choseProduct.img" alt="" class="w-4/5 h-24 m-auto mt-2">
                </div>
                <p class="">{{ product.choseProduct.description }}</p>
                <p>{{ product.choseProduct.price }}đ</p>
                <p>{{ product.choseNumber }}</p>
                <p>{{ sum(product.choseProduct.price, product.choseNumber) }}đ</p>
                <div>
                   <button class="bg-primary text-white pt-4 pb-4 pl-6 pr-6" @click="checkout(product)">Thanh toán</button><br/>
                    <button class="mt-2 bg-gray-400 text-white p-4 pl-12 pr-12">Xóa</button>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import router from '@/router/router.js'
export default{
setup(){
    const store=useStore()
    const cartProduct=store.state.cart
    const sum=(price,number)=>{
        return price*number
    }
    const checkout=(product)=>{
        store.dispatch("checkoutProduct",product)
        router.push("/checkout")
    }
    return{
        cartProduct,
        sum,
        checkout
    }
}    
}
</script>