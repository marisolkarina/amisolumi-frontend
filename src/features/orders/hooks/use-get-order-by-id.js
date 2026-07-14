import { useEffect, useState } from "react";
import { getOrderById } from "../services/get-order-by-id";
import { useAuth } from "../../auth/hooks/use-auth";

export function useGetOrderById({ orderId }) {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { user } = useAuth();

    useEffect(() => {
    getOrderById(orderId, user.token)
        .then((response) => { setOrder(response.data) })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [orderId, user.token]);

    return {
        order,
        loading,
        error
    }
}