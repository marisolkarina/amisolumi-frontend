export const getOrderById = async (orderId, token) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/pedidos/${orderId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Error buscando el pedido con id ${orderId}`);
  }

  return response.json();
};
