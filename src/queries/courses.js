// src/api/courses.js
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";
import { Module } from "@/model/modules-model";
import { Testimonial } from "@/model/testimonials-model";
import { User } from "@/model/user-model";
import { getEnrollmentsForCourse } from "./enrollments";

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
    .populate({
      path: "testimonials", model: Testimonial, populate: {
        path: "userId",
        model: User
      }
    })
    .lean();
  return replaceMongoIdInObject(courseDetails);
}

export async function getCoursesDetailsByInstructor(instructorId) {
  const courses = await Course.find({ instructor: instructorId }).lean();
  const enrollments = await Promise.all(
    courses.map(async (course) => {
      const enrollment = await getEnrollmentsForCourse(course._id.toString());
      return enrollment;
    })
  )

  console.log(enrollments);
  console.log(courses);


  const totalEnrollments = enrollments.reduce((item, currentValue) => {
    return item.length + currentValue.length;
  });



  return courses;
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