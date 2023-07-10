<template>
    <h1 class="text-3xl text-primary font-semibold mt-16 mb-16 sm:text-center">Nội dung chi tiết sản phẩm</h1>
    <div class="flex justify-around w-full h-[100vh] sm:block">
        <div class="w-[60%] h-full sm:h-2/5 sm:w-full">
            <div class="h-full sm:m-auto">
                <img :src="product.img" alt="" class="w-[90%] h-full m-auto sm:w-4/5 sm:h-full">
            </div>
        </div>
        <div class="w-[40%] sm:w-full">
            <h1 class="font-bold text-4xl mt-4">{{ product.name }}</h1>
            <h2 class="text-xl mt-8">{{ product.description }}</h2>
            <h1 class="font-bold text-4xl mt-12">{{ product.price }}đ</h1>
            <div class="mt-12 flex">
                <p>Màu sắc: </p>
                <div class="flex ml-2 mt-[3px]">
                    <div class="w-4 h-4 bg-primary rounded-full"></div>
                    <div class="w-4 h-4 bg-secondary rounded-full ml-2">
                    </div>
                </div>
            </div>
            <div class="mt-12 flex">
                <p>Số lượng: </p>
                <div class="flex ml-4">
                    <div @click="decreaseNumber" class="pl-2 pr-2 border-[1px] border-gray-300 cursor-pointer">-</div>
                    <div class="pl-4 pr-4 border-[1px] border-gray-300">{{ number }}</div>
                    <div @click="increaseNumber" class="pl-2 pr-2 border-[1px] border-gray-300 cursor-pointer">+</div>
                </div>
            </div>
            <div class="flex mt-12">
                <button class="pt-4 pb-4 pl-10 pr-10 bg-primary text-white rounded sm:text-xs" @click="addCart">
                    Thêm vào giỏ hàng
                </button>
                <button class="pt-4 pb-4 pl-10 pr-10 bg-primary text-white rounded ml-16 sm:text-xs" @click="buyNow">
                    Mua ngay
                </button>
            </div>
            <div class="bg-gray-400 w-[100%] h-[6px] mt-12">

            </div>
            <div class="flex mt-12 text-xl">
                <font-awesome-icon :icon="['fas', 'truck-fast']" />
                <p class="ml-4">Giao hàng toàn quốc</p>
            </div>
            <div class="flex mt-12 text-xl">
                <font-awesome-icon :icon="['fas', 'money-bill']" />
                <p class="ml-4">Đổi trả trong vòng 24h</p>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store';
import { computed,ref} from 'vue'
import { projectAuth } from '@/config/firebase';
import router from '@/router/router';
export default{
    setup(){
        const product= computed(() => store.state.selectedProduct);
        const number=ref(1)
        const increaseNumber=()=>{
            number.value++
        }
        const decreaseNumber=()=>{
            if(number.value<=1){
                alert("Bạn đã đạt số lượng tối thiểu")
            }
            else {
                number.value--
            }
        }
        const addCart=async ()=>{
           if(projectAuth.currentUser==null){
                alert("Đăng nhập để thực hiện chức năng này")
                router.push("/Dang-nhap")
           }
           else {
            const choseProduct=product.value
            const choseNumber=number.value
            const productCart={choseProduct,choseNumber}
            await store.dispatch("addCart",productCart)
           }
        }
        return {
            product,
            number,
            increaseNumber,
            decreaseNumber,
            addCart
        }
    }
}
</script>