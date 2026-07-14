export async function postSignUp({
    email,
    password,
    celular,
    direccion,
    dni,
    username,
    fechaNacimiento
}) {

    const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
                celular,
                direccion,
                dni,
                username,
                fechaNacimiento,
                rol: "USER"
            })
        }
    );

    if (!response.ok) {
        throw new Error("No se pudo registrar el usuario");
    }

    return response.json();
}