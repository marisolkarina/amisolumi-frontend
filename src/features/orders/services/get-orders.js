export const getOrders = async ({
    username = "",
    estado = "",
    token
}) => {

    const params = new URLSearchParams({
        ...(username && { username }),
        ...(estado && { estado })
    });

    const res = await fetch(
        `http://localhost:8080/api/v1/pedidos?${params}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    if (!res.ok) {
        throw new Error("Pedidos no encontrados");
    }

    return res.json();
};