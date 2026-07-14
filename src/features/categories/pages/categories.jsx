import { useState } from "react";
import { useCategories } from "../hooks/use-categories";
import { useDeleteCategory } from "../hooks/use-delete-category";
import styles from "./categories.module.css";
import { CategoryForm } from "../../../common/components/category-form/category-form";
import { usePostCategory } from "../hooks/use-post-category";
import { usePutCategory } from "../hooks/use-put-category";

export function CategoriesPage() {

    const {
        categoriesList,
        loading,
        error,
        refetch
    } = useCategories();

    const { deleteCategory } = useDeleteCategory();
    const { createCategory } = usePostCategory();
    const { updateCategory } = usePutCategory();

    const [showForm, setShowForm] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    if (loading) return <h1>Cargando...</h1>;

    if (error) return <h1>{error}</h1>;

    async function handleDelete(id) {

        const confirmar = window.confirm(
            "¿Seguro que deseas eliminar esta categoría?"
        );

        if (!confirmar) return;

        try {

            await deleteCategory(id);

            alert("Categoría eliminada");

            await refetch();

        } catch (error) {

            alert(error.message);

        }

    }

    async function handleSubmit(data) {

    try {

        if (selectedCategory) {

            await updateCategory({
                categoriaId: selectedCategory.id,
                ...data
            });

            alert("Categoría actualizada");

        } else {

            await createCategory(data);

            alert("Categoría creada");

        }

        setShowForm(false);
        setSelectedCategory(null);

        await refetch();

    } catch (error) {

        alert(error.message);

    }

}

    return (
        <div className={styles.container}>

            <div className={styles.header}>

                <h1>Categorías</h1>
                <button
                    className={styles.createButton}
                    onClick={() => {
                        setSelectedCategory(null);
                        setShowForm(true);
                    }}
                >
                    Crear categoría
                </button>

            </div>

            {
                showForm && (
                    <CategoryForm
                        initialValues={selectedCategory}
                        buttonText={
                            selectedCategory
                                ? "Actualizar categoría"
                                : "Crear categoría"
                        }
                        onSubmit={handleSubmit}
                    />
                )
            }

            <div className={styles.categories}>

                {categoriesList.map((category) => (
                    <div
                        key={category.id}
                        className={styles.card}
                    >
                        <div className={styles.info}>
                            <h2>{category.nombre}</h2>
                            <p>{category.descripcion}</p>
                            <p>
                                {new Date(category.createdAt)
                                    .toLocaleDateString()}
                            </p>
                        </div>

                        <div className={styles.actions}>

                            <button
                                className={styles.editButton}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setShowForm(true);
                                }}
                            >
                                Editar
                            </button>

                            <button
                                className={styles.deleteButton}
                                onClick={() => handleDelete(category.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}