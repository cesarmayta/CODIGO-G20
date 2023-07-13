import { useState } from "react";

export default function useCourses(url = "http://127.0.0.1:5000/curso") {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const getCourses = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setCourses(data);
    setLoading(false);
  };
  return {
    courses,
    loading,
    getCourses,
    setCourses,
  };
}
