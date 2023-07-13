import { useState } from "react";

export default function useCategories() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategories(data.content);
    setLoading(false);
  };
  return {
    categories,
    loading,
    getCategories,
    setCategories,
  };
}
