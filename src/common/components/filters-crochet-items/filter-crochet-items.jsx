import styles from "./filter-crochet-items.module.css";

export function FilterCrochetItems({
  nombre,
  setNombre,
  categoria,
  setCategoria,
  precioMax,
  setPrecioMax,
  categoriesList
}) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Buscar tejido..."
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="">Todos</option>
        {categoriesList.map((category) => (
          <option key={category.id} value={category.nombre}>{category.nombre}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Precio máx..."
        value={precioMax}
        onChange={(e) => setPrecioMax(e.target.value)}
      />

    </div>
  );
}