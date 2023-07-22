import { useState } from "react";

export default function useAuthors() {
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState([]);
  const getAuthors = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/autor");
    const data = await response.json();
    setAuthors(data.content);
    setLoading(false);
  };
  return {
    authors,
    loading,
    getAuthors,
    setAuthors,
  };
}
