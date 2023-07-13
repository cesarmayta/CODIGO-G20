import { useState } from "react";

export default function useLevels(id) {
  const [loading, setLoading] = useState(true);
  const [levels, setLevels] = useState([]);
  const getLevels = async () => {
    setLoading(true);
    const response = await fetch(
      id ? `http://localhost:5000/nivelid/${id}` : "http://localhost:5000/nivel"
    );
    const data = await response.json();
    setLevels(data.content);
    setLoading(false);
  };
  return {
    levels,
    loading,
    getLevels,
    setLevels,
  };
}
