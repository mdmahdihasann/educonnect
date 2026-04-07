import { User } from "@/model/user-model";

export async function GET() {
    const users = await User.find().lean();
    return Response.json(users)
}