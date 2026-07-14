export const getCategories = async () => {
  const res = await fetch("http://localhost:8080/api/v1/categorias");

  if (!res.ok) {
    throw new Error("Error buscando categorias");
  }

  return res.json();
};
