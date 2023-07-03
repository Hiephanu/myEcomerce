import store from "@/store";
export function check(name) {
    let array = store.state.cart;
    let value = true;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i].docData.choseProduct.name === name) {
        value = false;
        break; // Thoát khỏi vòng lặp nếu tìm thấy tên sản phẩm khớp
      }
    }
  
    return value;
  }