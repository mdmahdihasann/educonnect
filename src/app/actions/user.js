"use server"
import { User } from "@/model/user-model";
import { auth } from "../../../auth";

export async function getCurrentUser() {
    const session = await auth();
    if (!session?.user?.email) return null;

    const user = await User.findOne({ email: session.user.email }).lean();
    return JSON.parse(JSON.stringify(user));
}