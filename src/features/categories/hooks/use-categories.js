import { useEffect, useState } from "react";
import { getCategories } from "../services/get-categories";

export function useCategories() {

  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCategories() {

    setLoading(true);
    setError(null);

    try {
      const data = await getCategories();
      setCategoriesList(data.data ?? []);
    } catch (error) {
      setError(error.message);
      setCategoriesList([]);
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categoriesList,
    loading,
    error,
    refetch: fetchCategories
  };

}