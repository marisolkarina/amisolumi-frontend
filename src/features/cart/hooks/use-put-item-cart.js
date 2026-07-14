import { useAuth } from "../../auth/hooks/use-auth";
import { putItemCart } from "../services/put-item-cart";

export function useUpdateItemCart() {
    const { user } = useAuth();

    async function updateItemCart({
        carritoId,
        tejidoId,
        cantidad
    }) {

        const response = await putItemCart({
            carritoId,
            tejidoId,
            cantidad,
            token: user.token
        });

        return response.data;
    }

    return {
        updateItemCart
    };
}