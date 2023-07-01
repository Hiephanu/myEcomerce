import { createStore } from "vuex";
import { db } from "@/config/firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { projectAuth } from "@/config/firebase.js";
import { ref } from "vue";
const store = createStore({
  state() {
    return {
      newProducts: [],
      bearProducts: [],
      baloProducts: [],
      decorationProducts: [],
      stationeryProducts: [],
      fashionProducts: [],
      phoneProducts: [],
      toyProducts: [],
      selectedProduct: {},
      cart: [],
      checkoutProduct: [],
    };
  },
  mutations: {
    setNewProducts(state, newProducts) {
      state.newProducts = newProducts;
    },
    setBearProducts(state, products) {
      state.bearProducts = products;
    },
    setBaloProducts(state, products) {
      state.baloProducts = products;
    },
    setDecorationProducts(state, products) {
      state.decorationProducts = products;
    },
    setStationeryProducts(state, products) {
      state.stationeryProducts = products;
    },
    setFashionProducts(state, products) {
      state.fashionProducts = products;
    },
    setPhoneProducts(state, products) {
      state.phoneProducts = products;
    },
    setToyProducts(state, products) {
      state.toyProducts = products;
    },
    selectedProduct(state, data) {
      state.selectedProduct = data;
    },
    setCartData(state, data) {
      state.cart = data;
    },
    checkoutProduct(state, data) {
      state.checkoutProduct = data;
    },
  },
  actions: {
    async getNewProducts({ commit }) {
      const newProducts = [];
      const newProductsRef = collection(db, "newProducts");
      try {
        const snapshots = await getDocs(newProductsRef);
        snapshots.forEach((doc) => {
          newProducts.push(doc.data());
        });
        commit("setNewProducts", newProducts);
      } catch (error) {
        console.log(error);
      }
    },
    async getBearProducts({ commit }) {
      try {
        const collections = [
          "teddybear-cute",
          "teddybear-idol",
          "teddybear-other",
        ];
        const products = [];
        for (const collectionName of collections) {
          const collectionRef = collection(
            db,
            "products",
            "teddybear",
            collectionName
          );
          const querySnapshot = await getDocs(collectionRef);
          querySnapshot.forEach((doc) => {
            const product = doc.data();
            products.push(product);
          });
        }
        commit("setBearProducts", products);
      } catch (error) {
        console.log(error);
      }
    },
    async getCuteBear({ commit }) {
      try {
        const products = [];
        const collectionRef = collection(
          db,
          "products",
          "teddybear",
          "teddybear-cute"
        );
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
          const product = doc.data();
          products.push(product);
        });
        commit("setCuteBear", products);
      } catch (error) {
        console.log(error);
      }
    },
    async getIdolBear({ commit }) {
      try {
        const products = [];
        const collectionRef = collection(
          db,
          "products",
          "teddybear",
          "teddybear-idol"
        );
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
          const product = doc.data();
          products.push(product);
        });
        commit("setIdolBear", products);
      } catch (error) {
        console.log(error);
      }
    },
    async getOtherBear({ commit }) {
      try {
        const products = [];
        const collectionRef = collection(
          db,
          "products",
          "teddybear",
          "teddybear-other"
        );
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
          const product = doc.data();
          products.push(product);
        });
        commit("setOtherBear", products);
      } catch (error) {
        console.log(error);
      }
    },
    async getBaloProducts({ commit }) {
      try {
        const collections = ["balo", "crossbody-bag", "walletr"];
        const products = [];
        for (const collectionName of collections) {
          const collectionRef = collection(
            db,
            "products",
            "balo",
            collectionName
          );
          const querySnapshot = await getDocs(collectionRef);
          querySnapshot.forEach((doc) => {
            const product = doc.data();
            products.push(product);
          });
        }
        commit("setBaloProducts", products);
      } catch (error) {
        console.log(error);
      }
    },
    async getDecorationProducts({ commit }) {
      try {
        const collections = [
          "decorative-statues",
          "wind-chimes",
          "banner",
          "led-lights",
          "other",
        ];
        const products = [];
        for (const collectionName of collections) {
          const collectionRef = collection(
            db,
            "products",
            "decorations",
            collectionName
          );
          const querySnapshot = await getDocs(collectionRef);
          querySnapshot.forEach((doc) => {
            const product = doc.data();
            products.push(product);
          });
        }
        commit("setDecorationProducts", products);
      } catch (error) {
        console.log(error);
      }
    },
    async getStationeryProducts({ commit }) {
      try {
        const collections = [
          "pencil-case",
          "calenders",
          "notebooks",
          "pen",
          "ruler",
        ];
        const products = [];
        for (const collectionName of collections) {
          const collectionRef = collection(
            db,
            "products",
            "stationery",
            collectionName
          );
          const querySnapshot = await getDocs(collectionRef);
          querySnapshot.forEach((doc) => {
            const product = doc.data();
            products.push(product);
          });
        }
        commit("setStationeryProducts", products);
      } catch (error) {
        console.log(error);
      }
    },
    async getFashionProducts({ commit }) {
      try {
        const collections = ["accessories", "clothes"];
        const products = [];
        for (const collectionName of collections) {
          const collectionRef = collection(
            db,
            "products",
            "fashion-accessories",
            collectionName
          );
          const querySnapshot = await getDocs(collectionRef);
          querySnapshot.forEach((doc) => {
            const product = doc.data();
            products.push(product);
          });
        }
        commit("setFashionProducts", products);
      } catch (error) {
        console.log(error);
      }
    },
    async getPhoneProducts({ commit }) {
      try {
        const collections = [
          "earphones",
          "phone-strap",
          "phone-cases",
          "phone-other",
        ];
        const products = [];
        for (const collectionName of collections) {
          const collectionRef = collection(
            db,
            "products",
            "phone-accessories",
            collectionName
          );
          const querySnapshot = await getDocs(collectionRef);
          querySnapshot.forEach((doc) => {
            const product = doc.data();
            products.push(product);
          });
        }
        commit("setPhoneProducts", products);
      } catch (error) {
        console.log(error);
      }
    },
    async getToyProducts({ commit }) {
      try {
        const collections = ["colored-paintings", "home-models", "puzzles"];
        const products = [];
        for (const collectionName of collections) {
          const collectionRef = collection(
            db,
            "products",
            "toys",
            collectionName
          );
          const querySnapshot = await getDocs(collectionRef);
          querySnapshot.forEach((doc) => {
            const product = doc.data();
            products.push(product);
          });
        }
        commit("setToyProducts", products);
      } catch (error) {
        console.log(error);
      }
    },
    selectedProduct({ commit }, data) {
      commit("selectedProduct", data);
    },
    async addCart(context, data) {
      try {
        const username = projectAuth.currentUser.displayName;
        const docRef = collection(db, "cart", "product", username);
        await addDoc(docRef, data);
        alert("Đã thêm sản phẩm vào giỏ hàng");
      } catch (error) {
        alert(" Có lỗi đã xảy ra : ", error);
        console.log(error);
      }
    },
    async getCartData({ commit }) {
      try {
        const products = ref([]);
        const cartRef = collection(
          db,
          "cart",
          "product",
          projectAuth.currentUser.displayName
        );

        onSnapshot(cartRef, (snapshot) => {
          products.value.length = 0;
          snapshot.forEach((doc) => {
            const product = doc.data();
            products.value.push(product);
          });
        });
        console.log(products);
        commit("setCartData", products);
      } catch (error) {
        console.log(error);
      }
    },
    checkoutProduct({ commit }, data) {
      commit("checkoutProduct", data);
    },
    async deleteProduct(collectionName, fieldName, fieldValue) {
      const q = query(collectionName, where(fieldName, "==", fieldValue));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
    },
  },
});

export default store;
