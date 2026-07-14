import { Link } from "react-router";
import { useCrochetItems } from "../../crochet-items/hooks/use-crochet-items";
import styles from "./manage-crochet-items.module.css";
import { useDeleteCrochetItem } from "../hooks/use-delete-crochet-item";

export function ManageCrochetItemsPage() {

    const { crochetItems, loading, error, refetch } = useCrochetItems();
    const { removeCrochetItem } = useDeleteCrochetItem();


    async function handleEliminar(tejidoId) {
        try {

            await removeCrochetItem({
                tejidoId
            });

            const confirmar = confirm("Va a eliminar un tejido");
            if (!confirmar) return;
            await refetch();
        } catch (error) {
            alert(error.message);
        }
    }

    if (error) return <h1>{error}</h1>;

    if (loading) return <h1>Cargando...</h1>;

    return (
        <div className={styles.container}>

            <div className={styles.header}>

                <h1>Administrar tejidos</h1>

                <Link
                    to="/admin/crochet-items/create"
                    className={styles.createButton}
                >
                    + Crear tejido
                </Link>

            </div>

            <div className={styles.grid}>

                {crochetItems.map((item) => (

                    <div
                        key={item.id}
                        className={styles.card}
                    >

                        <img
                            src={`http://localhost:8080${item.imagen}`}
                            alt={item.nombre}
                            className={styles.image}
                        />

                        <div className={styles.content}>

                            <h2>{item.nombre}</h2>

                            <p className={styles.description}>
                                {item.descripcion}
                            </p>

                            <p>
                                <strong>Precio:</strong> S/. {item.precio.toFixed(2)}
                            </p>

                            <p>
                                <strong>Producción:</strong> {item.tiempoProduccion} días
                            </p>
                            <p>
                                <strong>Creado:</strong> {item.createdAt}
                            </p>

                        </div>

                        <div className={styles.actions}>

                            <Link
                                to={`/admin/crochet-items/edit/${item.id}`}
                                className={styles.editButton}
                            >
                                Editar
                            </Link>

                            <button
                                className={styles.deleteButton}
                                onClick={()=>handleEliminar(item.id)}
                            >
                                Eliminar
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}