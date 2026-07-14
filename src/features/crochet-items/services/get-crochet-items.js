export const getCrochetItems = async ({
  nombre = "",
  categoria = "",
  precioMax = 0.0
}) => {

  const params = new URLSearchParams({
    ...(nombre && { nombre }),
    ...(categoria && { categoria }),
    ...(precioMax && { precioMax })
  });

  const res = await fetch(
    `http://localhost:8080/api/v1/tejidos?${params}`
  );

  if (!res.ok) {
    throw new Error("Tejidos no encontrados");
  }

  return res.json();
};