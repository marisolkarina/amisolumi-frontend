import { useAuth } from "../../auth/hooks/use-auth";
import { postCreateCrochetItem } from "../services/post-create-crochet-item";


export function useCreatePostCrochetItem() {

    const { user } = useAuth();

    async function createCrochetItem({
        nombre,
        descripcion,
        precio,
        tiempoProduccion,
        imagen,
        categoriasId
    }) {

        const response = await postCreateCrochetItem({
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
        createCrochetItem
    };
}