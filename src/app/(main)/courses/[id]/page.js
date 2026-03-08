import CourseInfo from "./_components/CourseInfo";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
import ReleatedCourse from "./_components/ReleatedCourse";
import { getCoursesDetails } from "@/queries/courses";

const SingleCoursePage = async (props) => {
  const params = await props.params;
  const id = params.id;
  const course = await getCoursesDetails(id);
  console.log(course);

  return (
    <>
      <CourseInfo title={course?.title} description={course?.description} thumbnail={course?.thumbnail} />
      <CourseDetails course={course} />
      <Testimonials course={course} />
      <ReleatedCourse course={course} />
    </>
  );
};

export default SingleCoursePage;