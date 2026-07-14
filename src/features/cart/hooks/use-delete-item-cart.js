import { useAuth } from "../../auth/hooks/use-auth";
import { deletItemCart } from "../services/delete-item-cart";

export function useDeleteItemCart() {
    const { user } = useAuth();

    async function removeItemCart({
        carritoId,
        tejidoId
    }) {

        const response = await deletItemCart({
            carritoId,
            tejidoId,
            token: user.token
        });

        return response.data;
    }

    return {
        removeItemCart
    };
}