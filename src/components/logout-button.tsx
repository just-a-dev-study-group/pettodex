"use client";

import { Button } from "@/components/ui/button";
import APP_ROUTES from "@/constants/app-routes";
import logOut from "@/logic/log-out";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logOut();

    router.push(APP_ROUTES.LOGIN);
  };

  return <Button onClick={handleLogout}>Log out</Button>;
};

export default LogoutButton;
