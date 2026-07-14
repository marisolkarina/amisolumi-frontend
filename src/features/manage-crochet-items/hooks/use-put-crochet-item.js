import { useAuth } from "../../auth/hooks/use-auth";
import { putCrochetItem } from "../services/put-crochet-item";

export function usePutCrochetItem() {

    const { user } = useAuth();

    async function updateCrochetItem({
        tejidoId,
        nombre,
        descripcion,
        precio,
        tiempoProduccion,
        imagen,
        categoriasId
    }) {

        const response = await putCrochetItem({
            tejidoId,
            nombre,
            descripcion,
            precio,
            tiempoProduccion,
            imagen,
            categoriasId,
            usuarioId: user.id,
            token: user.token
        });

        return response.data;
    }

    return {
        updateCrochetItem
    };
}