import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDb } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      await connectToDb();
      const { email, name, picture } = profile;

      const UserExist = await User.findOne({
        email,
      });

      if (!UserExist) {
        await User.create({
          email: email,
          username: name.replace(" ", "").toLowerCase(),
          image: picture,
        });
      }

      return true;
    },

    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
  },
});

export { handler as GET, handler as POST };
