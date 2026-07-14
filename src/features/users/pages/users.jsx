
import { useUsers } from "../hooks/use-get-users";
import styles from "./users.module.css";

export function UsersPage() {

    const { users, loading, error } = useUsers();

    if (loading) return <h1>Cargando...</h1>;

    if (error) return <h1>{error}</h1>;

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>
                Gestión de usuarios
            </h1>

            <div className={styles.users}>

                {
                    users.map(user => (

                        <div
                            key={user.id}
                            className={styles.card}
                        >

                            <h2>{user.username}</h2>

                            <p>
                                <strong>Nombre:</strong>{" "}
                                {user.nombres} {user.apellidos}
                            </p>

                            <p>
                                <strong>Email:</strong>{" "}
                                {user.email}
                            </p>

                            <p>
                                <strong>DNI:</strong>{" "}
                                {user.dni}
                            </p>

                            <p>
                                <strong>Celular:</strong>{" "}
                                {user.celular}
                            </p>

                            <p>
                                <strong>Dirección:</strong>{" "}
                                {user.direccion}
                            </p>

                            <p>
                                <strong>Rol:</strong>{" "}
                                {user.rol}
                            </p>

                            <p>
                                <strong>Fecha nacimiento:</strong>{" "}
                                {new Date(user.fechaNacimiento).toLocaleDateString()}
                            </p>

                        </div>

                    ))
                }

            </div>

        </div>
    );
}