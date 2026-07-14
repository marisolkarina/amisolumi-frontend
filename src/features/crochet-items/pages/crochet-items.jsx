import { CrochetItemCard } from "../../../common/components/crochet-item-card/crochet-item-card";
import { FilterCrochetItems } from "../../../common/components/filters-crochet-items/filter-crochet-items";
import { useCategories } from "../../categories/hooks/use-categories";
import { useCrochetItems } from "../hooks/use-crochet-items";
import styles from "./crochet-items.module.css";

export function CrochetItemsPage() {
    const { crochetItems, loading, error, nombre, setNombre, categoria, setCategoria, precioMax, setPrecioMax} = useCrochetItems();
    const { categoriesList } = useCategories();

    if (error) return <h1>{error}</h1>;

    if (loading) return <h1>Loading...</h1>;

    return (
        <>
            <FilterCrochetItems nombre={nombre}
                setNombre={setNombre}
                categoria={categoria}
                setCategoria={setCategoria}
                precioMax={precioMax}
                setPrecioMax={setPrecioMax}
                categoriesList={categoriesList}
            />

            <div className={styles.container}>
                {
                    crochetItems.map((crochetItem) => (
                        <CrochetItemCard key={crochetItem.id} crochetItem={crochetItem} />
                    ))
                }
            </div>
        </>
    );
}