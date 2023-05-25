import { authConfig } from "@/config/authConfig";
import NextAuth from "next-auth";

export default NextAuth(authConfig);
