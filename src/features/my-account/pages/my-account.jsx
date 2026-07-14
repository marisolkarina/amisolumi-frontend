import { Link } from "react-router";
import { useAuth } from "../../auth/hooks/use-auth";
import styles from "./my-account.module.css";

export function MyAccountPage() {
    const { user } = useAuth();

    return (
        <div className={styles.container}>

            <div className={styles.card}>

                <h1 className={styles.title}>Mi cuenta</h1>

                <p className={styles.subtitle}>
                    Aquí puedes consultar la información de tu cuenta.
                </p>

                <div className={styles.info}>

                    <div className={styles.row}>
                        <span>Nombres completos</span>
                        <strong>{user.nombre} {user.apellidos}</strong>
                    </div>

                    <div className={styles.row}>
                        <span>DNI</span>
                        <strong>{user.dni}</strong>
                    </div>

                    <div className={styles.row}>
                        <span>Usuario</span>
                        <strong>{user.username}</strong>
                    </div>

                    <div className={styles.row}>
                        <span>Correo electrónico</span>
                        <strong>{user.email}</strong>
                    </div>

                    <div className={styles.row}>
                        <span>Rol</span>
                        <strong>{user.rol}</strong>
                    </div>

                    <div className={styles.row}>
                        <span>Dirección</span>
                        <strong>{user.direccion}</strong>
                    </div>

                    <div className={styles.row}>
                        <span>Fecha de nacimiento</span>
                        <strong>{user.fechaNacimiento}</strong>
                    </div>

                </div>

                <Link
                    to="/my-orders"
                    className={styles.button}
                >
                    Ver mis pedidos
                </Link>

            </div>

        </div>
    );
}