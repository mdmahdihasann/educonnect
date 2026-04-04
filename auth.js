import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

import bcrypt from "bcryptjs"
import { User } from "@/model/user-model";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    Signout

} = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                try {
                    const user = await User.findOne({ email: credentials.email }).lean();
                    if (!user) {
                        console.error("User not found");
                        return null;
                    }

                    const isMatch = await bcrypt.compare(credentials.password, user.password);
                    if (!isMatch) {
                        console.error("Password mismatch");
                        return null;
                    }

                    return user;

                } catch (error) {
                    console.error(error);
                    return null;
                }
            }
        })
    ]
})