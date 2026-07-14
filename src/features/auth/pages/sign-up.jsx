import { useState } from "react";
import styles from "./sign-up.module.css";
import { Link, useNavigate } from "react-router";
import { useSignUp } from "../hooks/use-sign-up";

export function SignUpPage() {

    const navigate = useNavigate();

    const {signUp} = useSignUp();

    const [form, setForm] = useState({
        email: "",
        password: "",
        celular: "",
        direccion: "",
        dni: "",
        username: "",
        fechaNacimiento: ""
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {

            await signUp(form);

            alert("Usuario registrado. Ahora inicie sesión.");

            navigate("/sign-in");

        } catch (error) {

            alert(error.message);

        }
    }

    return (
        <div className={styles.container}>

            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >

                <h1>Crear cuenta</h1>

                <div className={styles.grid}>

                    <div className={styles.field}>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.field}>
                        <label>DNI</label>
                        <input
                            type="text"
                            name="dni"
                            value={form.dni}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Celular</label>
                        <input
                            type="text"
                            name="celular"
                            value={form.celular}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Fecha de nacimiento</label>
                        <input
                            type="date"
                            name="fechaNacimiento"
                            value={form.fechaNacimiento}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>

                <div className={styles.field}>
                    <label>Dirección</label>
                    <input
                        type="text"
                        name="direccion"
                        value={form.direccion}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={styles.button}
                >
                    Registrarme
                </button>

                <Link to="/sign-in">Inicia sesión</Link>
            </form>

        </div>
    );
}