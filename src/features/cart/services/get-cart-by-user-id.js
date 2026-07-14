export const getCartByUserId = async (usuarioId, token) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/carritos/usuario/${usuarioId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Error buscando el carrito del usuario con id ${usuarioId}`);
  }

  return response.json();
};
