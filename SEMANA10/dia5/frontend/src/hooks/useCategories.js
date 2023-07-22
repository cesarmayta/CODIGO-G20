import { useState } from "react";
import { API_URL } from "../constants/env"

export default function useCategories() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    setLoading(true);
    const response = await fetch(`${API_URL}/categories`);
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
