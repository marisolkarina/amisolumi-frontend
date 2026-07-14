import { useAuth } from "../../auth/hooks/use-auth";
import { putCategory } from "../services/put-category";

export function usePutCategory(){

    const { user } = useAuth();

    async function updateCategory({

        categoriaId,
        nombre,
        descripcion

    }){

        const response = await putCategory({

            categoriaId,
            nombre,
            descripcion,
            token:user.token

        });

        return response.data;

    }

    return{
        updateCategory
    };

}