export async function postCreateCrochetItem({
    nombre,
    descripcion,
    precio,
    tiempoProduccion,
    imagen,
    categoriasId,
    usuarioId,
    token
}) {

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("precio", precio);
    formData.append("tiempoProduccion", tiempoProduccion);
    formData.append("usuarioId", usuarioId);
    formData.append("imagen", imagen);

    categoriasId.forEach((categoriaId) => {
        formData.append("categoriasId", categoriaId);
    });

    const response = await fetch(
        "http://localhost:8080/api/v1/tejidos",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData
        }
    );

    if (!response.ok) {
        throw new Error("No se pudo crear el tejido");
    }

    return response.json();
}