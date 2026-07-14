export async function putCancelOrder({
    pedidoId,
    token
}) {

    const response = await fetch(
        `http://localhost:8080/api/v1/pedidos/${pedidoId}/cancelar`,
        {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );

    if (!response.ok) {
        throw new Error("No se pudo cancelar el pedido");
    }

    return response.json();
}