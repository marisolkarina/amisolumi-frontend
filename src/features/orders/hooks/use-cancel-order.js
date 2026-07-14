import { useAuth } from "../../auth/hooks/use-auth";
import { putCancelOrder } from "../services/put-cancel-order";

export function useCancelOrder() {
    const { user } = useAuth();

    async function cancelOrder({ pedidoId }) {

        const response = await putCancelOrder({
            pedidoId,
            token: user.token
        });

        return response.data;
    }

    return {
        cancelOrder
    };
}