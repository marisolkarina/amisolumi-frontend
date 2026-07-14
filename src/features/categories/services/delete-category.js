export async function deleteCategory({
    categoriaId,
    token
}) {

    const response = await fetch(
        `http://localhost:8080/api/v1/categorias/${categoriaId}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    if (!response.ok) {
        throw new Error("No se pudo eliminar la categoría");
    }

}