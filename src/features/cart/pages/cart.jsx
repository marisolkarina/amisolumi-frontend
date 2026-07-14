import { useAuth } from "../../auth/hooks/use-auth";
import { usePostOrder } from "../../orders/hooks/use-post-order";
import { useDeleteItemCart } from "../hooks/use-delete-item-cart";
import { useGetCartByUserId } from "../hooks/use-get-cart-by-user-id";
import { useUpdateItemCart } from "../hooks/use-put-item-cart";
import { useNavigate } from "react-router";
import styles from "./cart.module.css";

export function CartPage() {

    const { user } = useAuth();
    const { cart, loading, error, refetch } = useGetCartByUserId({ usuarioId: user.id });

    const { removeItemCart } = useDeleteItemCart();
    const { updateItemCart } = useUpdateItemCart();
    const { createOrder } = usePostOrder();

    const navigate = useNavigate();

    async function handleRemoveItemCart(tejidoId) {
        try {

            await removeItemCart({
                carritoId: cart.id,
                tejidoId
            });

            console.log("Tejido eliminado del carrito");
            await refetch();

        } catch (error) {
            alert(error.message);
        }
    }

    async function handleUpdateItemCart(tejidoId, nuevaCantidad) {
        if (nuevaCantidad<1) return;
        try {
            await updateItemCart({
                carritoId: cart.id,
                tejidoId: tejidoId,
                cantidad: nuevaCantidad
            });

            console.log("Se actualizo cantidad del item del carrito");
            await refetch();

        } catch (error) {
            alert(error.message);
        }
    }

    async function handleCreateOrder() {
        try {
            const order = await createOrder();

            alert("Pedido registrado con éxito");
            navigate(`/orders/${order.id}`);

        } catch (error) {
            alert(error.message);
        }
    }


    if (error) return <h1>{error.message}</h1>;

    if (loading) return <h1>Cargando...</h1>;

    if (!cart || cart.items.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <h2>Tu carrito está vacío</h2>
                <p>Aún no has agregado ningún tejido.</p>
                <p>Explora nuestro catálogo y encuentra el amigurumi perfecto.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Mi carrito</h1>

            <div className={styles.total}>
                <span>Total:</span>
                <strong>S/. {cart.montoTotal.toFixed(2)}</strong>
            </div>

            <div className={styles.items}>

                {cart.items.map((item) => (

                    <div className={styles.item} key={item.id}>

                        <div className={styles.itemInfo}>
                            <h3>{item.nombreTejido}</h3>

                            <p>
                                <span>Precio:</span>
                                S/. {item.precioUnitario.toFixed(2)}
                            </p>

                            <div className={styles.quantityContainer}>
                                <span className={styles.label}>Cantidad:</span>

                                <div className={styles.quantityControls}>
                                    <button
                                        className={styles.quantityButton}
                                        onClick={() => handleUpdateItemCart(item.tejidoId, item.cantidad-1)}
                                    >
                                        −
                                    </button>

                                    <span className={styles.quantityValue}>
                                        {item.cantidad}
                                    </span>

                                    <button
                                        className={styles.quantityButton}
                                        onClick={() => handleUpdateItemCart(item.tejidoId, item.cantidad+1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <p className={styles.subtotal}>
                                Subtotal: S/. {(item.precioUnitario * item.cantidad).toFixed(2)}
                            </p>

                        </div>

                        <div className={styles.actions}>

                            <button
                                className={styles.deleteButton}
                                onClick={() => handleRemoveItemCart(item.tejidoId)}
                            >
                                Eliminar
                            </button>

                        </div>

                    </div>

                ))}

            </div>

            <button
                className={styles.checkoutButton}
                onClick={handleCreateOrder}
            >
                Finalizar compra
            </button>

        </div>
    );
}