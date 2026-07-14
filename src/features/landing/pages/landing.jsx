import styles from "./landing.module.css";

export function LandingPage() {
  return (
    <div className={styles.container}>
        <h1>Amisolumi</h1>
        <h2>Tejidos a crochet hechos a mano con mucho amor.</h2>
        <p>Amigurumis de personajes, ramos de flores tejidos, llaveros y mucho más.</p>
        <p>Encuentra el regalo perfecto para quienes más quieres.</p>
        <p>🧸 🌸 🧶 💕</p>
        <img src="/osito.jpg" alt="portada de osito" className={styles.image}/>
    </div>
  );
}