import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";

export const uploadImage = () => {
  const _uploadImage = httpsCallable(functions, "uploadImage");
  _uploadImage().then((result) => {
    // Read result of the Cloud Function.
    /** @type {any} */
    // const data = result.data;
    // const sanitizedMessage = data.text;
    return;
  });
};
