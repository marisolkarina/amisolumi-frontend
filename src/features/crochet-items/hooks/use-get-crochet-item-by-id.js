import { useEffect, useState } from "react";
import { getCrochetItemById } from "../services/get-crochet-item-by-id";

export function useGetCrochetItemById({ crochetItemId }) {
  const [crochetItem, setCrochetItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCrochetItemById(crochetItemId)
      .then((response) => { setCrochetItem(response.data) })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [crochetItemId]);

  return {
    crochetItem,
    loading,
    error
  };
}
