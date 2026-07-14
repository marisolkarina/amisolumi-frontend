import { useOrders } from "../hooks/use-orders";
import styles from "./orders.module.css";

export function OrdersPage() {

    const {
        orders,
        loading,
        error,
        username,
        setUsername,
        estado,
        setEstado
    } = useOrders({ usernameParam: "" });

    if (loading) return <h1>Cargando...</h1>;

    if (error) return <h1>{error}</h1>;

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>
                Gestión de pedidos
            </h1>

            <div className={styles.filters}>
{/*}
                <div className={styles.filterGroup}>
                    <label>Usuario</label>

                    <input
                        type="text"
                        placeholder="Buscar por username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className={styles.filterGroup}>
                    <label>Estado</label>

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
                </div>*/}

            </div>

            {
                orders.length === 0 ? (

                    <div className={styles.empty}>
                        <h2>No se encontraron pedidos.</h2>
                    </div>

                ) : (

                    <div className={styles.orders}>

                        {
                            orders.map(order => (

                                <div
                                    key={order.id}
                                    className={styles.card}
                                >

                                    <div className={styles.header}>

                                        <div>
                                            <h2>Pedido</h2>
                                            <span className={styles.id}>
                                                #{order.id}
                                            </span>
                                        </div>

                                        <span className={styles.status}>
                                            {order.estado}
                                        </span>

                                    </div>

                                    <p>
                                        <strong>Total:</strong>
                                        {" "}
                                        S/. {order.total.toFixed(2)}
                                    </p>

                                    <p>
                                        <strong>Usuario:</strong>
                                        {" "}
                                        {order.usuarioId}
                                    </p>

                                    <p>
                                        <strong>Fecha:</strong>
                                        {" "}
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </p>
                                    <p>
                                        <strong>UsuarioId</strong>
                                        {" "}
                                        {order.usuarioId}
                                    </p>

                                    <div className={styles.details}>

                                        <h3>Productos</h3>

                                        {
                                            order.detalles.map(detalle => (

                                                <div
                                                    key={detalle.id}
                                                    className={styles.detail}
                                                >
                                                    <span>
                                                        {detalle.nombreTejido}
                                                    </span>

                                                    <span>
                                                        x{detalle.cantidad}
                                                    </span>

                                                    <span>
                                                        S/. {(detalle.precioUnitario * detalle.cantidad).toFixed(2)}
                                                    </span>

                                                </div>

                                            ))
                                        }

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                )
            }

        </div>
    );
}