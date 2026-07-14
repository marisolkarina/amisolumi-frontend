import { useEffect, useState } from "react";
import styles from "./crochet-item-form.module.css";

export function CrochetItemForm({
    initialValues = null,
    categories = [],
    onSubmit,
    buttonText
}) {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [tiempoProduccion, setTiempoProduccion] = useState("");
    const [imagen, setImagen] = useState(null);
    const [categoriasId, setCategoriasId] = useState([]);

    useEffect(() => {

        if (!initialValues) return;

        setNombre(initialValues.nombre);
        setDescripcion(initialValues.descripcion);
        setPrecio(initialValues.precio);
        setTiempoProduccion(initialValues.tiempoProduccion);
        setCategoriasId(initialValues.categoriasId ?? []);

    }, [initialValues]);

    function handleCategoria(id) {

        if (categoriasId.includes(id)) {
            setCategoriasId(
                categoriasId.filter(categoria => categoria !== id)
            );

        } else {
            setCategoriasId([
                ...categoriasId,
                id
            ]);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit({
            nombre,
            descripcion,
            precio,
            tiempoProduccion,
            imagen,
            categoriasId
        });

    }

    return (

        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >

            <h1>{buttonText === "Crear tejido" ? "Nuevo tejido" : "Editar tejido"}</h1>
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

            <div className={styles.row}>
                <div className={styles.field}>
                    <label>Precio</label>
                    <input
                        type="number"
                        min="1"
                        value={precio}
                        onChange={(e)=>setPrecio(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label>Días de producción</label>
                    <input
                        type="number"
                        min="1"
                        value={tiempoProduccion}
                        onChange={(e)=>setTiempoProduccion(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className={styles.field}>
                <label>Imagen</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e)=>setImagen(e.target.files[0])}
                />
            </div>

            <div className={styles.field}>

                <label>Categorías</label>
                <div className={styles.categories}>
                    {categories.map(categoria => (
                        <label
                            key={categoria.id}
                            className={styles.checkbox}
                        >
                            <input
                                type="checkbox"
                                checked={categoriasId.includes(categoria.id)}
                                onChange={() => handleCategoria(categoria.id)}
                            />

                            {categoria.nombre}

                        </label>
                    ))}
                </div>
            </div>

            <button
                className={styles.submit}
            >
                {buttonText}
            </button>

        </form>

    );

}