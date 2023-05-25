import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { getServerSession } from "next-auth";

const adminEmails = ["vaibhavmali537@gmail.com"];

export const authConfig = {
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: ({ session, token, user }) => {
      if (adminEmails.includes(session?.user?.email)) {
        return session;
      } else {
        return false;
      }
    },
  },
};

export async function isAdminRequest(req, res) {
  const session = await getServerSession(req, res, authConfig);
  if (!adminEmails.includes(session?.user?.email)) {
    res.status(401);
    res.end();
    throw "Not An Admin";
  }
}
