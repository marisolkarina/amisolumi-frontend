export async function getUsers(token) {

    const response = await fetch(
        "http://localhost:8080/api/v1/users",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    if (!response.ok) {
        throw new Error("No se pudieron obtener los usuarios");
    }

    return response.json();
}