export async function deleteCrochetItem({
    tejidoId,
    token
}) {

    const response = await fetch(
        `http://localhost:8080/api/v1/tejidos/${tejidoId}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );

    if (!response.ok) {
        throw new Error("No se pudo eliminar el tejido");
    }

    return response.json();
}