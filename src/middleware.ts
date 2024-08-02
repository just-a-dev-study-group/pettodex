/**
 * Next.js Middleware
 *
 * Authentication middleware with next-firebase-auth-edge: https://next-firebase-auth-edge-docs.vercel.app/docs/usage/middleware
 */

import { NextRequest, NextResponse } from "next/server";
import {
  authMiddleware,
  redirectToHome,
  redirectToLogin,
} from "next-firebase-auth-edge";
import { serverConfig } from "@/libs/firebase/firebase-server";
import APP_ROUTES from "@/constants/app-routes";

const PUBLIC_PATHS: string[] = [APP_ROUTES.LOGIN];

export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    refreshTokenPath: "/api/refresh-token",
    apiKey: serverConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    cookieSerializeOptions: serverConfig.cookieSerializeOptions,
    serviceAccount: serverConfig.serviceAccount,
    handleValidToken: async ({ token, decodedToken }, headers) => {
      // Redirect authenticated users to the Home page ("/")
      if (PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
        return redirectToHome(request);
      }

      return NextResponse.next({
        request: {
          headers,
        },
      });
    },

    // Redirect unauthenticated users to the Login page ("/login")
    handleInvalidToken: async (reason) => {
      console.info("Missing or malformed credentials", { reason });

      return redirectToLogin(request, {
        path: APP_ROUTES.LOGIN,
        publicPaths: PUBLIC_PATHS,
      });
    },
    handleError: async (error) => {
      console.error("Unhandled authentication error", { error });

      return redirectToLogin(request, {
        path: APP_ROUTES.LOGIN,
        publicPaths: PUBLIC_PATHS,
      });
    },
  });
}

export const config = {
  matcher: [
    "/",
    "/((?!_next|api|.*\\.).*)",
    "/api/login",
    "/api/logout",
    "/api/refresh-token",
  ],
};
