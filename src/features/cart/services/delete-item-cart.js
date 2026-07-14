export async function deletItemCart({
    carritoId,
    tejidoId,
    token
}) {

    const response = await fetch(
        `http://localhost:8080/api/v1/items/carrito/${carritoId}/tejido/${tejidoId}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );

    if (!response.ok) {
        throw new Error("No se pudo eliminar el tejido del carrito");
    }

    return response.json();
}