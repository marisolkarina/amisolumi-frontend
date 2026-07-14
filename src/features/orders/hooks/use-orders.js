import { useEffect, useState } from "react";
import { getOrders } from "../services/get-orders";
import { useAuth } from "../../auth/hooks/use-auth";

export function useOrders({ usernameParam }) {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState(usernameParam);
    const [estado, setEstado] = useState("");

    const { user } = useAuth();

    async function fetchOrders() {
        try {
            setLoading(true);
            setError(null);

            const response = await getOrders({
                username,
                estado,
                token: user.token
            });

            setOrders(response.data ?? []);

        } catch (error) {
            setError(error.message);
            setOrders([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [username, estado, user.token]);

    return {
        orders,
        error,
        loading,
        username,
        setUsername,
        estado,
        setEstado,
        refetch: fetchOrders
    };
}