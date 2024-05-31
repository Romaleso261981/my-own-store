import { addDoc, collection } from "firebase/firestore";

import { db } from "../../integations/firebase";
import { FirestoreData } from "../types/Types";

export const setFirestoreData = (data: FirestoreData, path: string) => {
  const collectionRef = collection(db, path);

  addDoc(collectionRef, data);
};
