export async function putItemCart({
    carritoId,
    tejidoId,
    cantidad,
    token
}) {
    const params = new URLSearchParams({
        cantidad
    });

    const response = await fetch(
        `http://localhost:8080/api/v1/items/carrito/${carritoId}/tejido/${tejidoId}?${params}`,
        {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );

    if (!response.ok) {
        throw new Error("No se pudo agregar actualizar la cantidad del item del carrito");
    }

    return response.json();
}