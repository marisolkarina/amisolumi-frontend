export async function putCategory({
    categoriaId,
    nombre,
    descripcion,
    token
}){

    const response = await fetch(

        `http://localhost:8080/api/v1/categorias/${categoriaId}`,

        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
            },
            body:JSON.stringify({
                nombre,
                descripcion
            })
        }

    );

    if(!response.ok){
        throw new Error("No se pudo actualizar la categoría");
    }

    return response.json();

}