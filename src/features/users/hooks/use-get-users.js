import { useEffect, useState } from "react";
import { useAuth } from "../../auth/hooks/use-auth";
import { getUsers } from "../services/get-users";

export function useUsers() {

    const { user } = useAuth();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function refetch() {

        setLoading(true);

        try {

            const response = await getUsers(user.token);

            setUsers(response.data ?? []);

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {
        refetch();
    }, [user.token]);

    return {
        users,
        loading,
        error,
        refetch
    };
}