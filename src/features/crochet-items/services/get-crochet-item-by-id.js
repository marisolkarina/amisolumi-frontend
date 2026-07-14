export const getCrochetItemById = async (crochetItemId) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/tejidos/${crochetItemId}`,
  );

  if (!response.ok) {
    throw new Error(`Error buscando el tejido con id ${crochetItemId}`);
  }

  return response.json();
};
