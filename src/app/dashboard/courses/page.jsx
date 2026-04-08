import { getCoursesDetailsByInstructor } from "@/queries/courses";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";


const CoursesPage = async () => {
  const courses = await getCoursesDetailsByInstructor();
  

  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
