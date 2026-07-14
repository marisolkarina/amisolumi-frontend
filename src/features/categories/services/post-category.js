export async function postCategory({
    nombre,
    descripcion,
    token
}) {

    const response = await fetch(
        "http://localhost:8080/api/v1/categorias",
        {
            method:"POST",
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
        throw new Error("No se pudo crear la categoría");
    }

    return response.json();

}