import { useEffect, useState } from "react";
import styles from "./sign-in.module.css";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/use-auth";

export function SignInPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { login, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/my-account", { replace: true });
        }
    }, [isAuthenticated, navigate]);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await login({ username, password });
            navigate("/");

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>

                <h1>Iniciar sesión</h1>

                <p className={styles.subtitle}>
                    Inicia sesión en Amisolumi para adquirir nuestros tejidos 🧶
                </p>

                <div className={styles.field}>
                    <label>Usuario</label>

                    <input
                        type="text"
                        placeholder="Ingresa tu usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label>Contraseña</label>

                    <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">
                    Iniciar sesión
                </button>

                <p className={styles.register}>
                    ¿No tienes una cuenta?
                    <Link to="/sign-up" className={styles.linkRegister}>Regístrate</Link>
                </p>

            </form>
        </div>
    );
}