import { useAuth } from "../../auth/hooks/use-auth";
import { deleteCrochetItem } from "../services/delete-crochet-item";

export function useDeleteCrochetItem() {
    const { user } = useAuth();

    async function removeCrochetItem({
        tejidoId
    }) {

        const response = await deleteCrochetItem({
            tejidoId,
            token: user.token
        });

        return response.data;
    }

    return {
        removeCrochetItem
    };
}