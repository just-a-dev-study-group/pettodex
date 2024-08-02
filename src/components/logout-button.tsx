"use client";

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

  return <button onClick={handleLogout}>Log out</button>;
};

export default LogoutButton;
