"use server"

import { Course } from "@/model/course-model";
import { create } from "@/queries/courses"

export async function createCourse(data) {
    try {
        const course = await create(data);
        return course;
    } catch (e) {
        throw new Error(e)
    }
}

export async function updateCourse(id, data) {
    try {
        const course = await Course.findByIdAndUpdate(id, data, { new: true }).lean();
        return JSON.parse(JSON.stringify(course));
    } catch (error) {
        throw new Error(error)
    }
}
 