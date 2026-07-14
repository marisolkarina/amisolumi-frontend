import { useParams } from "react-router";
import styles from "./crochet-item.module.css";
import { useGetCrochetItemById } from "../../hooks/use-get-crochet-item-by-id";
import { Gift, Send, Spool } from "lucide-react";

export function CrochetItemPage() {
    const { id } = useParams();

    const { crochetItem, loading, error } = useGetCrochetItemById({ crochetItemId: id });

    if (error) return <h1>{error}</h1>;
    if (loading) return <h1>Loading...</h1>;

    const { nombre, descripcion, precio, imagen, tiempoProduccion } = crochetItem;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img
                    className={styles.image}
                    src={`http://localhost:8080${imagen}`}
                    alt={nombre}
                />

                <div className={styles.content}>
                    <h1 className={styles.title}>{nombre}</h1>

                    <p className={styles.price}>
                        S/. {precio.toFixed(2)}
                    </p>

                    <p className={styles.description}>
                        {descripcion}
                    </p>

                    <div className={styles.info}>
                        <p>
                            <span>Tiempo de producción:</span> ⌛ {tiempoProduccion} días
                        </p>
                    </div>

                    <button className={styles.cartButton}>
                        Agregar al carrito
                    </button>
                </div>

                <div className={styles.extraInfo}>
                    <div> <Spool size={20} color="#3670ce" /> <p>Elaborado completamente a mano.</p></div>
                    <div> <Gift size={20} color="#e0064f" strokeWidth={2} /> <p>Ideal para regalar.</p></div>
                    <div> <Send size={20} strokeWidth={2} /> <p>Envíos a todo el Perú.</p></div>
                </div>
            </div>
        </div>
    );
}