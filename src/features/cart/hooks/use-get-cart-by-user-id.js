import { useCallback, useEffect, useState } from "react";
import { getCartByUserId } from "../services/get-cart-by-user-id";
import { useAuth } from "../../auth/hooks/use-auth";

export function useGetCartByUserId({ usuarioId }) {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useAuth();

  const fetchCart = useCallback(async () => {
    try {
      const response = await getCartByUserId(
        usuarioId,
        user.token
      );

      setCart(response.data);

    } catch (err) {
      if (err.message.includes("Error buscando el carrito")) {
      setCart({
        montoTotal: 0,
        items: []
      });
    } else {
      setError(err);
    }
    } finally {
      setLoading(false);
    }
  }, [usuarioId, user.token]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return {
    cart,
    loading,
    error,
    refetch: fetchCart
  };

}
