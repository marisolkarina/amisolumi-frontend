import { Link } from "react-router";
import styles from "./crochet-item-card.module.css";
import { useAddItemToCart } from "../../../features/cart/hooks/use-add-item-to-cart";

export function CrochetItemCard({ crochetItem }) {

    const {
        id,
        nombre,
        descripcion,
        precio,
        imagen,
        tiempoProduccion
    } = crochetItem;

    const { addItemToCart } = useAddItemToCart();

    async function handleAddToCart() {
        try {

            await addItemToCart({
                tejidoId: id,
                cantidad: 1,
            });

            alert("Tejido agregado al carrito");

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className={styles.card}>

            <Link
                to={`/crochet-items/${id}`}
                className={styles.container}
            >
                <img src={`http://localhost:8080${imagen}`} alt={nombre}/>
            </Link>

            <h3>{nombre}</h3>
            <p className={styles.description}>{descripcion}</p>
            <p className={styles.price}>S/. {precio.toFixed(2)}</p>
            <p className={styles.production}>⌛ {tiempoProduccion} días de producción</p>

            <button
                className={styles.cartButton}
                onClick={handleAddToCart}
            >
                Agregar al carrito
            </button>

        </div>
    );
}