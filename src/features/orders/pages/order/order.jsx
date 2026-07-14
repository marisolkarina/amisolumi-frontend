import { Link, useParams } from "react-router";
import { useGetOrderById } from "../../hooks/use-get-order-by-id";
import styles from "./order.module.css";

export function OrderPage() {
    const { id } = useParams();

    const { order, loading, error } = useGetOrderById({ orderId: id });

    if (error) return <h1>{error.message}</h1>;
    if (loading) return <h1>Cargando...</h1>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Pedido</h1>

            <div className={styles.summary}>
                <div>
                    <span>#Orden</span>
                    <p>{order.id}</p>
                </div>

                <div>
                    <span>Estado</span>
                    <p className={styles.status}>
                        {order.estado}
                    </p>
                </div>

                <div>
                    <span>Total</span>
                    <p className={styles.total}>
                        S/. {order.total.toFixed(2)}
                    </p>
                </div>

            </div>

            <p className={styles.created}>Creado: {order.createdAt}</p>

            <h2 className={styles.subtitle}>
                Tejidos
            </h2>

            <div className={styles.items}>

                {order.detalles.map((detalle) => (

                    <div key={detalle.id} className={styles.item}>

                        <h3>{detalle.nombreTejido}</h3>

                        <p>
                            <strong>Precio:</strong>
                            {" "}S/. {detalle.precioUnitario.toFixed(2)}
                        </p>

                        <p>
                            <strong>Cantidad:</strong>
                            {" "}{detalle.cantidad}
                        </p>

                        <p className={styles.subtotal}>
                            Subtotal: S/. {(detalle.precioUnitario * detalle.cantidad).toFixed(2)}
                        </p>

                        <Link to={`/crochet-items/${detalle.tejidoId}`}>Ver producto</Link>

                    </div>

                ))}

            </div>

        </div>
    );
}