import { useNavigate } from "react-router";
import { CrochetItemForm } from "../../../common/components/crochet-item-form/crochet-item-form";
import { useCategories } from "../../categories/hooks/use-categories";
import { useCreatePostCrochetItem } from "../hooks/use-create-crochet-item";

export function CreateCrochetItemPage(){
    const navigate = useNavigate();

    const { categoriesList } = useCategories();
    const { createCrochetItem } = useCreatePostCrochetItem();

    async function handleSubmit(data){
        try {

           await createCrochetItem(data);

            alert("Tejido creado correctamente");

            navigate("/admin/crochet-items");

        } catch (error) {
            alert(error.message);
        }
    }

    return(

        <CrochetItemForm
            categories={categoriesList}
            buttonText="Crear tejido"
            onSubmit={handleSubmit}
        />

    );

}