import { useAuth } from "../../auth/hooks/use-auth";
import { postCategory } from "../services/post-category";

export function usePostCategory(){

    const { user } = useAuth();

    async function createCategory({
        nombre,
        descripcion
    }){

        const response = await postCategory({
            nombre,
            descripcion,
            token:user.token
        });

        return response.data;

    }

    return{
        createCategory
    };

}