// src/api/courses.js
import { getCurrentUser } from "@/app/actions/user";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";
import { Module } from "@/model/modules-model";
import { Testimonial } from "@/model/testimonials-model";
import { User } from "@/model/user-model";

export async function getCoursesList() {
  const courses = await Course.find({})
    .select(['title', 'description', 'subtitle', 'thumbnail', 'price', 'instructor', 'modules', 'testimonials', "category"])
    // .populate({ path: "category", model: Category })
    .populate({ path: "instructor", model: User })
    .populate({ path: "modules", model: Module })
    .populate({ path: "testimonials", model: Testimonial })
    .lean();
  return replaceMongoIdInArray(courses);
}

export async function getCoursesDetails(id) {
  const courseDetails = await Course.findById(id)
    // .populate({ path: "category", model: Category })
    .populate({ path: "instructor", model: User })
    .populate({ path: "modules", model: Module })
    .populate({
      path: "testimonials", model: Testimonial, populate: {
        path: "userId",
        model: User
      }
    })
    .lean();
  return replaceMongoIdInObject(courseDetails);
}

export async function getCoursesDetailsByInstructor() {
  const userId = await getCurrentUser();
  const allCourses = await Course.find({ instructor: userId }).lean();
  return JSON.parse(JSON.stringify(allCourses));

  // const publishedCourses = await Course.find({ instructor: instructorId, active: true }).lean();
  // return publishedCourses;
}



export async function getCoursesEditData(id) {
  const courses = await Course.findOne({ _id: id }).lean();
  return JSON.parse(JSON.stringify(courses));
}


export async function create(courseData) {
  try {
    const course = await Course.create(courseData);
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
}