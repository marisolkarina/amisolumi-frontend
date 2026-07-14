import { useAuth } from "../../auth/hooks/use-auth";
import { postAddItemToCart } from "../services/post-add-item-to-cart";

export function useAddItemToCart() {
    const { user } = useAuth();

    async function addItemToCart({
        tejidoId,
        cantidad = 1
    }) {

        const response = await postAddItemToCart({
            usuarioId: user.id,
            tejidoId,
            cantidad,
            token: user.token
        });

        return response.data;
    }

    return {
        addItemToCart
    };
}