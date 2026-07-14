import { Link, useNavigate } from "react-router";
import styles from "./navbar.module.css";
import { CircleUser, ShoppingCart } from "lucide-react";
import { useAuth } from "../../../features/auth/hooks/use-auth";

export function Navbar() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/", { replace: true });
    }

    const isAuthenticated = !!user?.token;

    return (
        <header>
            <nav className={styles.container}>

                <div className={styles.left}>
                    <Link to="/" className={styles.link}>Inicio</Link>
                    <Link to="/crochet-items" className={styles.link}>Tejidos</Link>
                    {isAuthenticated && user && user.rol === "ADMIN" && (
                        <Link
                            to="/admin"
                            className={styles.link}
                        >
                            Admin
                        </Link>
                    )}
                    {
                        isAuthenticated &&
                        <p className={styles.greeting}>
                          Hola, <span>{user.username}</span>
                        </p>
                    }
                </div>

                <div className={styles.right}>

                    {
                        isAuthenticated && (
                            <button
                                className={styles.logoutButton}
                                onClick={handleLogout}
                            >
                                Cerrar sesión
                            </button>
                        )
                    }

                    <Link
                        to={isAuthenticated ? "/my-account" : "/sign-in"}
                        className={styles.link}
                    >
                        <CircleUser size={24} />
                    </Link>

                    <Link to="/my-cart" className={styles.link}>
                        <ShoppingCart size={24} />
                    </Link>

                </div>

            </nav>
        </header>
    );
}