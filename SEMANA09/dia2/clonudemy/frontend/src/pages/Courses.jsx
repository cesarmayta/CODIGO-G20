import { useRef } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import CoursesContent from "../components/Courses/CoursesContent";
import CoursesFilters from "../components/Courses/CoursesFilters";

export const loaderCourses = (params) => {
  const url = new URL(params.request.url);
  const category = url.searchParams.get("category");
  const queries = { category };
  if (!category) {
    const params = [
      ["category", "all"],
      ["level", "beginner"],
      ["course-type", "free"],
      ["stars", 5],
      ["duration", "+5"],
    ];
    params.forEach((param) => url.searchParams.set(...param));
    return redirect(url);
  }
  url.searchParams.forEach((value, key) => Reflect.set(queries, key, value));
  return queries;
};

const Courses = () => {
  const { category, ...filters } = useLoaderData();
  return (
    <main className="main main--courses">
      <div className="container container--courses">
        <CoursesFilters category={category} />
        <CoursesContent category={category} filters={filters} />
      </div>
    </main>
  );
};

export default Courses;
