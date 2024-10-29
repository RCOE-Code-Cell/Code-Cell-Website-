import NextAuth from "next-auth/next"
import {authOptions} from "../../../../lib/auth"

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
