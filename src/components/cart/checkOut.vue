<template>
  <div class="pb-16">
    <div class="grid grid-cols-3 mt-16 ">
      <div class="border-r-4 border-primary">
        <div class="flex">
          <p class="pt-2 pb-2 pr-4 pl-4 bg-primary text-white rounded-full">
            1
          </p>
          <h1 class="text-xl font-bold ml-8 mt-2">Thông tin người nhận</h1>
        </div>
        <div>
          <input
            type="text"
            :value="user.displayName"
            class="mt-12 w-4/5 border-primary border-2 h-10"
          /><br />
          <input
            type="text"
            placeholder="Điện thoại"
            class="mt-8 w-4/5 border-primary border-2 h-10"
          /><br />
          <input
            type="text"
            :value="user.email"
            class="mt-8 w-4/5 border-primary border-2 h-10"
          /><br />
          <input
            type="text"
            placeholder="Địa chỉ"
            class="mt-8 w-4/5 border-primary border-2 h-10"
          /><br />
        </div>
      </div>
      <div class="ml-2 border-r-4 border-primary">
        <div class="flex">
          <p class="pt-2 pb-2 pr-4 pl-4 bg-primary text-white rounded-full">
            2
          </p>
          <h1 class="text-xl font-bold ml-8 mt-2">Phương thức thanh toán</h1>
        </div>
        <div>
          <input type="radio" name="payment" value="bank" class="mt-12" />
          Thanh toán bằng tài khoản ngân hàng
          <br />
          <input type="radio" name="payment" value="cod" class="mt-8" />
          Thanh toán khi giao hàng
        </div>
      </div>
      <div class="ml-2">
        <div class="flex">
          <p class="pt-2 pb-2 pr-4 pl-4 bg-primary text-white rounded-full">
            3
          </p>
          <h1 class="text-xl font-bold ml-8 mt-2">Thông tin sản phẩm</h1>
        </div>
        <div class="grid grid-cols-2">
          <div class="font-bold">
            <div class="mt-12">
              <h2>{{ checkoutProduct.docData.choseProduct.name }}</h2>
              <p class="mt-4">
                Đơn giá: {{ checkoutProduct.docData.choseProduct.price }}đ
              </p>
              <p class="mt-4">Số lượng: {{ checkoutProduct.docData.choseNumber }}</p>
            </div>
            <p class="mt-4">Thành tiền: {{ total }}đ</p>
          </div>
          <div>
            <img :src="checkoutProduct.docData.choseProduct.img" alt="" class="mt-12" />
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <button class="p-4 bg-primary text-white border-[1px] border-primary font-xl hover:bg-white hover:text-primary absolute right-16 top-8" @click="buy">
        Hoàn tất thanh toán
      </button>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { computed, ref } from "vue";
import { projectAuth } from "@/config/firebase";
import { deleteProduct } from "@/services/deleteProduct";
import router from "@/router/router";
export default {
  setup() {
    const user = projectAuth.currentUser;
    const checkoutProduct = computed(() => {
      return store.state.checkoutProduct;
    });
    const total = ref(
      checkoutProduct.value.docData.choseProduct.price *
        checkoutProduct.value.docData.choseNumber
    );
    
    const buy=async()=>{
      deleteProduct(checkoutProduct.value.docId)
      alert("Sản phẩm đã được thanh toán")
      router.push("/")
    }
    return {
      checkoutProduct,
      user,
      total,
      buy
    };
  },
};
</script>
