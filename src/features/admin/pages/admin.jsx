import { Link } from "react-router";
import styles from "./admin.module.css";

export function AdminPage() {
    return (
        <div className={styles.container}>

            <h1 className={styles.title}>
                Panel de Administración
            </h1>

            <p className={styles.subtitle}>
                Selecciona el módulo que deseas administrar.
            </p>

            <div className={styles.grid}>

                <Link
                    to="/admin/users"
                    className={styles.card}
                >
                    <span className={styles.icon}>👤</span>
                    <h2>Usuarios</h2>
                    <p>Gestiona los usuarios registrados.</p>
                </Link>

                <Link
                    to="/admin/categories"
                    className={styles.card}
                >
                    <span className={styles.icon}>📂</span>
                    <h2>Categorías</h2>
                    <p>Crear, editar y eliminar categorías.</p>
                </Link>

                <Link
                    to="/admin/crochet-items"
                    className={styles.card}
                >
                    <span className={styles.icon}>🧸</span>
                    <h2>Tejidos</h2>
                    <p>Administrar el catálogo de tejidos.</p>
                </Link>

                <Link
                    to="/admin/orders"
                    className={styles.card}
                >
                    <span className={styles.icon}>📦</span>
                    <h2>Pedidos</h2>
                    <p>Revisar y actualizar pedidos.</p>
                </Link>

            </div>

        </div>
    );
}