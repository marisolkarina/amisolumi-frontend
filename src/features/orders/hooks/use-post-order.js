import { useAuth } from "../../auth/hooks/use-auth";
import { postOrder } from "../services/post-order";

export function usePostOrder() {
    const { user } = useAuth();

    async function createOrder() {

        const response = await postOrder({
            usuarioId: user.id,
            token: user.token
        });

        return response.data;
    }

    return {
        createOrder
    };
}