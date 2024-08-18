import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { serverConfig } from "./firebase-server";

if (getApps().length === 0) {
  initializeApp({
    credential: cert(serverConfig.serviceAccount),
  });
}

export const db = getFirestore();
