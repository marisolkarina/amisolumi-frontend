import { useEffect, useState } from "react";
import { getCrochetItems } from "../services/get-crochet-items";

export function useCrochetItems() {
    const [crochetItems, setCrochetItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precioMax, setPrecioMax] = useState(0.0);

    async function fetchCrochetItems() {
        setLoading(true);

        try {
            const data = await getCrochetItems({
                nombre,
                categoria,
                precioMax
            });

            setCrochetItems(data.data ?? []);
            setError(null);
        } catch (error) {
            setError(error.message);
            setCrochetItems([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCrochetItems();
    }, [nombre, categoria, precioMax]);

    return {
        error,
        loading,
        crochetItems,
        nombre,
        setNombre,
        categoria,
        setCategoria,
        precioMax,
        setPrecioMax,
        refetch: fetchCrochetItems
    };
}