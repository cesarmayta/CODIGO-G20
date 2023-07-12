import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CourseAnnouncement from "../components/Course/CourseAnnouncement";
import CourseFaq from "../components/Course/CourseFaq";
import CourseReviews from "../components/Course/CourseReviews";
import Layout from "../layouts/Layout";
import Course, { loaderCourse } from "../pages/Course";
import Courses, { loaderCourses } from "../pages/Courses";
import Home from "../pages/Home";
import CourseOverview from "../components/Course/CourseOverview";
import CourseCurriculum from "../components/Course/CourseCurriculum";
import Login, { actionLogin } from "../pages/Auth/Login";
import Register, { actionRegister } from "../pages/Auth/Register";
import Auth from "../pages/Auth";
import Admin from "../pages/Admin";
import AdminCourses from "../components/Admin/AdminCourses";
import AdminAuthor from "../components/Admin/AdminAuthor";
import AdminLevels from "../components/Admin/AdminLevels";
import AdminCategories from "../components/Admin/AdminCategories";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route loader={loaderCourses} path="courses" element={<Courses />} />
        <Route loader={loaderCourse} path="course/:id" element={<Course />}>
          <Route path="overview" element={<CourseOverview />} />
          <Route path="curriculum" element={<CourseCurriculum />} />
          <Route path="faq" element={<CourseFaq />} />
          <Route path="announcement" element={<CourseAnnouncement />} />
          <Route path="reviews" element={<CourseReviews />} />
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route action={actionLogin} path="login" element={<Login />} />
          <Route
            action={actionRegister}
            path="register"
            element={<Register />}
          />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route path="courses" element={<AdminCourses />} />
          <Route path="author" element={<AdminAuthor />} />
          <Route path="levels" element={<AdminLevels />} />
          <Route path="categories" element={<AdminCategories />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
