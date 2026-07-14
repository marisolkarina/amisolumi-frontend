import { useAuth } from "../../auth/hooks/use-auth";
import { deleteCategory } from "../services/delete-category";

export function useDeleteCategory() {

    const { user } = useAuth();

    async function removeCategory(categoriaId) {

        await deleteCategory({
            categoriaId,
            token: user.token
        });

    }

    return {
        deleteCategory: removeCategory
    };

}