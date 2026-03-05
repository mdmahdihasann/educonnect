import { getCourses } from "@/queries/courses";

export default async function Home() {
  const datas = await getCourses();
  console.log(datas, "data");
  
  return (
    <h2>Data Inable</h2>
  );
}
