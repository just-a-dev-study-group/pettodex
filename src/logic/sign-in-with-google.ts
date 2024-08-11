import { clientApp, clientAuth } from "@/lib/firebase/firebase-client";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  useDeviceLanguage,
} from "firebase/auth";

const getGoogleProvider = (auth: any) => {
  const provider = new GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useDeviceLanguage(auth);
  provider.setCustomParameters({
    display: "popup",
  });

  return provider;
};

const signInWithGoogle = async () => {
  try {
    const credential = await signInWithPopup(
      getAuth(clientApp),
      getGoogleProvider(clientAuth)
    );

    const idToken = await credential.user.getIdToken();

    // Send the ID token to the server
    await fetch("/api/login", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default signInWithGoogle;
