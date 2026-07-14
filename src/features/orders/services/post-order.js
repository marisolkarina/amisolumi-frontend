export async function postOrder({
    usuarioId,
    token
}) {
    const params = new URLSearchParams({
        usuarioId
    });

    const response = await fetch(
        `http://localhost:8080/api/v1/pedidos?${params}`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );

    if (!response.ok) {
        throw new Error("No se pudo crear el pedido");
    }

    return response.json();
}