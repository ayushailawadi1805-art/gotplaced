import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

export const getBlogs = async () => {
  const q = query(
    collection(db, "blogs"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};