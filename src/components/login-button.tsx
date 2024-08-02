"use client";

import APP_ROUTES from "@/constants/app-routes";
import signInWithGoogle from "@/logic/sign-in-with-google";
import { useRouter } from "next/navigation";
import React from "react";

const LoginButton = () => {
  const router = useRouter();

  const handleLogin = async () => {
    await signInWithGoogle();

    router.push(APP_ROUTES.HOME);
  };

  return <button onClick={handleLogin}>Log in with Google</button>;
};

export default LoginButton;
