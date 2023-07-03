import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { projectAuth } from "@/config/firebase";
export async function deleteProduct( id) {
    try {
        const docRef = doc(db, "cart", "product", projectAuth.currentUser.displayName, id);
        await deleteDoc(docRef);
      } catch (error) {
        console.log(error);
        alert("Không thể xóa sản phẩm");
      }
}
