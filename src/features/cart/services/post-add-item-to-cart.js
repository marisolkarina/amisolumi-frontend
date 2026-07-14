export async function postAddItemToCart({
    usuarioId,
    tejidoId,
    cantidad = 1,
    token
}) {
    const params = new URLSearchParams({
        usuarioId,
        tejidoId,
        cantidad
    });

    const response = await fetch(
        `http://localhost:8080/api/v1/items?${params}`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );

    if (!response.ok) {
        throw new Error("No se pudo agregar el tejido al carrito");
    }

    return response.json();
}