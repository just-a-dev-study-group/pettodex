/**
 * Code reference: https://github.com/awinogrodzki/next-firebase-auth-edge/blob/main/examples/next-typescript-minimal/app/HomePage.tsx#L14
 */

import { clientAuth } from "@/libs/firebase/firebase-client";
import { signOut } from "firebase/auth";

const logOut = async () => {
  try {
    await signOut(clientAuth);

    await fetch("/api/logout", {
      method: "GET",
    });
  } catch (error) {
    console.error(error);
  }
};

export default logOut;
