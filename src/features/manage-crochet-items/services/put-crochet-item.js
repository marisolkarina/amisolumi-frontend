export async function putCrochetItem({
    nombre,
    descripcion,
    precio,
    tiempoProduccion,
    imagen,
    categoriasId,
    usuarioId,
    token,
    tejidoId
}) {

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("precio", precio);
    formData.append("tiempoProduccion", tiempoProduccion);
    formData.append("usuarioId", usuarioId);
    if (imagen) {
        formData.append("imagen", imagen);
    }

    categoriasId.forEach((categoriaId) => {
        formData.append("categoriasId", categoriaId);
    });

    const response = await fetch(
        `http://localhost:8080/api/v1/tejidos/${tejidoId}`,
        {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData
        }
    );

    if (!response.ok) {
        throw new Error("No se pudo actualizar el tejido");
    }

    return response.json();
}