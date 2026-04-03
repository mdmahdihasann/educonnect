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
                if (credentials === null) return null;

                try {
                    const user = await User.findOne({ email: credentials?.email });
                    if (user) {
                        const isMatch = await bcrypt.compare(user?.password, credentials?.password);
                        if (isMatch) {
                            return user;
                        } else {
                            console.error("password mismatch")
                            throw new Error("Check your password")
                        }
                    } else {
                        console.error("user mismatch")
                        throw new Error("User not found")
                    }

                } catch (error) {
                    console.log(error.message);

                }
            }
        })
    ]
})