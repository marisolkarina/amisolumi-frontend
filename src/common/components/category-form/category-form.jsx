import { useEffect, useState } from "react";
import styles from "./category-form.module.css";

export function CategoryForm({
    initialValues = null,
    buttonText,
    onSubmit
}) {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    useEffect(() => {

        if (!initialValues) return;

        setNombre(initialValues.nombre);
        setDescripcion(initialValues.descripcion);

    }, [initialValues]);

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ nombre, descripcion });
    }

    return (

        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <h1>{buttonText}</h1>

            <div className={styles.field}>
                <label>Nombre</label>
                <input
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    required
                />
            </div>

            <div className={styles.field}>
                <label>Descripción</label>
                <textarea
                    rows={5}
                    value={descripcion}
                    onChange={(e)=>setDescripcion(e.target.value)}
                    required
                />
            </div>

            <button className={styles.button}>
                {buttonText}
            </button>

        </form>

    );

}