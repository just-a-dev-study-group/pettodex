import { serverConfig } from "@/lib/firebase/firebase-server";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";

export async function validateAuth() {
  try {
    const tokens = await getTokens(cookies(), serverConfig);

    if (!tokens) {
      throw new Error("Forbidden");
    }

    return tokens;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
