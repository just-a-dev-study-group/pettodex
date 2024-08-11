"use server";

import { serverConfig } from "@/lib/firebase/firebase-server";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";

const sampleProtectedAction = async () => {
  const tokens = await getTokens(cookies(), serverConfig);

  if (!tokens) {
    throw new Error("Unauthorized");
  }

  return "Hello, World! (Protected)";
};

export default sampleProtectedAction;
