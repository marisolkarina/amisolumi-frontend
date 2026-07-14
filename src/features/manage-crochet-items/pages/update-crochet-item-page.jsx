import { useNavigate, useParams } from "react-router";
import { CrochetItemForm } from "../../../common/components/crochet-item-form/crochet-item-form";
import { useCategories } from "../../categories/hooks/use-categories";
import { usePutCrochetItem } from "../hooks/use-put-crochet-item";
import { useGetCrochetItemById } from "../../crochet-items/hooks/use-get-crochet-item-by-id";

export function UpdateCrochetItemPage(){
    const navigate = useNavigate();

    const { id } = useParams();

    const { crochetItem, loading } = useGetCrochetItemById({ crochetItemId: id });
    const { categoriesList } = useCategories();
    const { updateCrochetItem } = usePutCrochetItem();

    if (loading) return <h1>Cargando datos...</h1>

    async function handleUpdate(data){
        try {

           await updateCrochetItem({
                tejidoId: id,
                ...data
           });

            alert("Tejido actualizado correctamente");
            navigate("/admin/crochet-items");

        } catch (error) {
            alert(error.message);
        }
    }

    return(

        <CrochetItemForm
            initialValues={crochetItem}
            categories={categoriesList}
            buttonText="Guardar cambios"
            onSubmit={handleUpdate}
        />

    );

}