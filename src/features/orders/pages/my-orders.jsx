import { Link } from "react-router";
import { useAuth } from "../../auth/hooks/use-auth";
import { useOrders } from "../hooks/use-orders";
import styles from "./my-orders.module.css";
import { useCancelOrder } from "../hooks/use-cancel-order";

export function MyOrdersPage() {

    const { user } = useAuth();
    const { orders, loading, error, estado, setEstado, refetch } = useOrders({ usernameParam: user.username });
    const { cancelOrder } = useCancelOrder();

    async function handleCancelar(pedidoId) {
        const confirmar = window.confirm( "¿Seguro que quiere cancelar el pedido?");

        if (!confirmar) return;

        try {
            await cancelOrder({ pedidoId });
            alert("Pedido cancelado");
            await refetch();

        } catch (error) {
            alert(error.message);
        }
    }

    if (error) return <h1>{error}</h1>;

    if (loading) return <h1>Cargando...</h1>;

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>
                Mis pedidos
            </h1>

            <div className={styles.filters}>

                <label>Estado:</label>

                <select
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="REGISTRADO">Registrado</option>
                    <option value="EN_PRODUCCION">En producción</option>
                    <option value="TERMINADO">Terminado</option>
                    <option value="CANCELADO">Cancelado</option>
                </select>

            </div>

            {
                orders.length===0 ? (
                    <div className={styles.empty}>
                        <h2>No tienes pedidos registrados.</h2>
                    </div>
                ) : (

                    <div className={styles.orders}>

                        {orders.map(order => (

                            <div key={order.id}className={styles.card}>

                                <div className={styles.header}>
                                    <h2>Pedido</h2>
                                    <span>#{order.id}</span>
                                    <span className={styles.status}>
                                        {order.estado}
                                    </span>
                                </div>

                                <p>
                                    <strong>Total:</strong> S/. {order.total.toFixed(2)}
                                </p>

                                <p>
                                    <strong>Fecha:</strong>{" "}
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </p>

                                <div className={styles.details}>

                                    <h3>Productos</h3>

                                    {order.detalles.map(detalle => (

                                        <div
                                            key={detalle.id}
                                            className={styles.detail}
                                        >
                                            <span>{detalle.nombreTejido}</span>
                                            <span>x{detalle.cantidad}</span>
                                            <span> S/. {(detalle.precioUnitario * detalle.cantidad).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.actions}>
                                    <Link
                                        to={`/orders/${order.id}`}
                                        className={styles.detailButton}
                                    >
                                        Ver detalle
                                    </Link>

                                    {
                                        order.estado==="CANCELADO" ? <p></p> :
                                            <button className={styles.cancelButton} onClick={()=>handleCancelar(order.id)}>Cancelar pedido</button>
                                        }
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}