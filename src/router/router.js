import { createWebHistory, createRouter } from "vue-router";
import homePage from "../view/homePage.vue";
import loginPage from "../view/loginPage.vue";
import registerPage from "../view/registerPage.vue";
import bearProducts from "../components/products/bearProducts/bearProducts.vue";
import baloProducts from "../components/products/baloProducts/baloProducts.vue";
import stationeryProducts from "../components/products/stationeryProducts/stationeryProducts.vue";
import decorationProducts from "../components/products/decorationProducts/decorationProducts.vue";
import fashionProducts from "../components/products/fashionProducts/fashionProducts.vue";
import phoneProducts from "../components/products/phoneProducts/phoneProducts.vue";
import toyProducts from "../components/products/toyProducts/toyProducts.vue";
import bearCute from "@/components/products/bearProducts/bearCute.vue";
import bearIdol from "@/components/products/bearProducts/bearIdol.vue";
import bearOther from "@/components/products/bearProducts/bearOther.vue";
import baloType from "@/components/products/baloProducts/baloType.vue";
import baloCrossBag from "@/components/products/baloProducts/baloCrossBag.vue"
import baloWallet from "@/components/products/baloProducts/baloWallet.vue"
import bannerDecor from "@/components/products/decorationProducts/bannerDecor.vue"
import ledDecor from "@/components/products/decorationProducts/ledDecor.vue"
import otherDecor from "@/components/products/decorationProducts/otherDecor.vue"
import statueDecor from "@/components/products/decorationProducts/statueDecor.vue"
import windDecor from "@/components/products/decorationProducts/windDecor.vue"
import accessoriesFashion from "@/components/products/fashionProducts/accessoriesFashion.vue"
import clothesFashion from "@/components/products/fashionProducts/clothesFashion.vue"
import casePhone from "@/components/products/phoneProducts/casePhone.vue"
import earPhone from "@/components/products/phoneProducts/earPhone.vue"
import otherPhone from "@/components/products/phoneProducts/otherPhone.vue"
import strapPhone from "@/components/products/phoneProducts/strapPhone.vue"
import modelToy from "@/components/products/toyProducts/modelToy.vue"
import paintingToy from "@/components/products/toyProducts/paintingToy.vue"
import puzzleToy from "@/components/products/toyProducts/puzzleToy.vue"
import productDetail from "@/components/productDetail/productDetail.vue"
import cart from '@/components/cart/cartCom.vue'
import checkout from '@/components/cart/checkOut.vue'
const routes = [
  { path: "/", component: homePage, meta: { layout: "mainLayout" } },
  { path: "/Dang-nhap", component: loginPage, meta: { layout: "authLayout" } },
  { path: "/Dang-ky", component: registerPage, meta: { layout: "authLayout" } },
  {path:"/Cart",component:cart,meta:{layout:"mainLayout"}},
  {path:"/checkout",component:checkout,meta:{layout:"mainLayout"}},
  {
    path:"/product",
    component:productDetail,
    meta:{
      layout:"mainLayout"
    }
  },
  {
    path: "/Gau-bong",
    component: bearProducts,
    meta: { layout: "productLayout" },
  },
  {
    path: "/Gau-bong/gau-bong-cute",
    component: bearCute,
    meta: { layout: "productLayout" },
  },
  {
    path: "/Gau-bong/gau-bong-idol",
    component: bearIdol,
    meta: {
      layout: "productLayout",
    },
  },
  {
    path: "/Gau-bong/gau-bong-khac",
    component: bearOther,
    meta: {
      layout: "productLayout",
    },
  },
  { path: "/Balo",
   component: baloProducts, 
   meta: { 
    layout: "productLayout"
   }
  },
  {
    path:"/Balo/balo",
    component:baloType,
    meta:{
      layout: "productLayout"
    }
  },
  {
    path:"/Balo/tui-đeo-cheo",
    component:baloCrossBag,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path:"/Balo/vi",
    component:baloWallet,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path: "/Van-phong-pham",
    component: stationeryProducts,
    meta: { layout: "productLayout" },
  },
  {
    path: "/Trang-tri",
    component: decorationProducts,
    meta: { layout: "productLayout" },
  },
  {
    path:"/Trang-tri/banner",
    component:bannerDecor,
    meta:{
      layout:"productLayout"
    }
  },
  { 
    path:"/Trang-tri/đen-ngu",
    component:ledDecor,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path:"/Trang-tri/tuong",
    component:statueDecor,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path:"/Trang-tri/chuong-gio",
    component:windDecor,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path:"/Trang-tri/đo-trang-tri-khac",
    component:otherDecor,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path: "/Phu-kien-thoi-trang",
    component: fashionProducts,
    meta: { layout: "productLayout" },
  },
  {
    path:"/Phu-kien-thoi-trang/phu-kien",
    component:accessoriesFashion,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path:"/Phu-kien-thoi-trang/quan-ao",
    component:clothesFashion,
    meta:{
      layout:"productlayout"
    }
  },
  {
    path: "/Phu-kien-dien-thoai",
    component: phoneProducts,
    meta: { layout: "productLayout" },
  },
  {
    path:"/Phu-kien-dien-thoai/op-đien-thoai",
    component:casePhone,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path:"/Phu-kien-dien-thoai/tai-nghe",
    component:earPhone,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path:"/Phu-kien-dien-thoai/san-pham-khac",
    component:otherPhone,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path:"/Phu-kien-dien-thoai/day-đeo-đien-thoai",
    component:strapPhone,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path: "/Do-choi",
    component: toyProducts,
    meta: { layout: "productLayout" },
  },
  {
    path:"/Do-choi/to-tranh-mau",
    component:paintingToy,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path:"/Do-choi/mo-hinh-nha",
    component:modelToy,
    meta:{
      layout:"productLayout"
    }
  },
  {
    path:"/Do-choi/đo-choi-xep-hinh",
    component:puzzleToy,
    meta:{
      layout:"productLayout"
    }
  }
];
// const routes = [
//   { path: "/", component: homePage, meta: { layout: "mainLayout" } },
//   { path: "/Dang-nhap", component: loginPage, meta: { layout: "authLayout" } },
//   { path: "/Dang-ky", component: registerPage, meta: { layout: "authLayout" } },
//   {
//     path: "/Gau-bong",
//     component: bearProducts,
//     meta: { layout: "productLayout" },
//     children: [
//       { path: "gau-bong-cute", component: bearCute },
//       { path: "gau-bong-idol", component: bearIdol },
//       { path: "gau-bong-khac", component: bearOther }
//     ]
//   },
//   {
//     path: "/Balo",
//     component: baloProducts,
//     meta: { layout: "productLayout" },
//     children: [
//       { path: "balo", component: baloType },
//       { path: "tui-đeo-cheo", component: baloCrossBag },
//       { path: "vi", component: baloWallet }
//     ]
//   },
//   {
//     path: "/Van-phong-pham",
//     component: stationeryProducts,
//     meta: { layout: "productLayout" }
//   },
//   {
//     path: "/Trang-tri",
//     component: decorationProducts,
//     meta: { layout: "productLayout" },
//     children: [
//       { path: "banner", component: bannerDecor },
//       { path: "đen-ngu", component: ledDecor },
//       { path: "tuong", component: statueDecor },
//       { path: "chuong-gio", component: windDecor },
//       { path: "đo-trang-tri-khac", component: otherDecor }
//     ]
//   },
//   {
//     path: "/Phu-kien-thoi-trang",
//     component: fashionProducts,
//     meta: { layout: "productLayout" },
//     children: [
//       { path: "phu-kien", component: accessoriesFashion },
//       { path: "quan-ao", component: clothesFashion }
//     ]
//   },
//   {
//     path: "/Phu-kien-dien-thoai",
//     component: phoneProducts,
//     meta: { layout: "productLayout" },
//     children: [
//       { path: "op-đien-thoai", component: casePhone },
//       { path: "tai-nghe", component: earPhone },
//       { path: "san-pham-khac", component: otherPhone },
//       { path: "day-đeo-đien-thoai", component: strapPhone }
//     ]
//   },
//   {
//     path: "/Do-choi",
//     component: toyProducts,
//     meta: { layout: "productLayout" },
//     children: [
//       { path: "to-tranh-mau", component: paintingToy },
//       { path: "mo-hinh-nha", component: modelToy },
//       { path: "đo-choi-xep-hinh", component: puzzleToy }
//     ]
//   }
// ];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
