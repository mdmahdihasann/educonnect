// src/api/courses.js
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";
import { Module } from "@/model/modules-model";
import { Testimonial } from "@/model/testimonials-model";
import { User } from "@/model/user-model";

export async function getCoursesList() {
  const courses = await Course.find({})
    .select(['title', 'description', 'subtitle', 'thumbnail', 'price', 'instructor', 'modules', 'testimonials', "category"])
    .populate({ path: "category", model: Category })
    .populate({ path: "instructor", model: User })
    .populate({ path: "modules", model: Module })
    .populate({ path: "testimonials", model: Testimonial })
    .lean();
  return replaceMongoIdInArray(courses);
}

export async function getCoursesDetails(id) {
  const courseDetails = await Course.findById(id)
    .populate({ path: "category", model: Category })
    .populate({ path: "instructor", model: User })
    .populate({ path: "modules", model: Module })
    .populate({ path: "testimonials", model: Testimonial })
    .lean();
  return replaceMongoIdInObject(courseDetails);
}