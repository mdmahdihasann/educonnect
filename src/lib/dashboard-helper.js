import { getCoursesDetailsByInstructor } from "@/queries/courses";
import { auth } from "../../auth";
import { getUserByEmail } from "@/queries/users";

export async function getInstructorDashboardData(dataType) {
    try {
        const session = await auth();
        const instructor = await getUserByEmail(session?.user?.email);
        
        const data = getCoursesDetailsByInstructor(instructor.id);
        // console.log(data.courses, "courses data");
        
        return data?.courses;
    } catch (error) {
        console.log(error.message);
        
    }
}