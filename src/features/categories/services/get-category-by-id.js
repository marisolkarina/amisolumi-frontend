export async function getCategoryById(id){

    const response = await fetch(
        `http://localhost:8080/api/v1/categorias/${id}`
    );

    if(!response.ok){
        throw new Error("No se encontró la categoría");
    }

    return response.json();

}