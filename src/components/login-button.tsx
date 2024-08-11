"use client";

import { Button } from "@/components/ui/button";
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

  return <Button onClick={handleLogin}>Log in with Google</Button>;
};

export default LoginButton;
