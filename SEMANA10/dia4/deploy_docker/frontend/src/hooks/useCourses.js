import { useState } from "react";
import { API_URL } from "../constants/env"

export default function useCourses(url = `${API_URL}/course`) {
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
