import InvoiceCard from "./InvoiceCard";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Calavi, Bénin · Disponible en freelance</span>
          <h1>
            J&apos;intègre le paiement{" "}
            <span className="hl">Bitcoin &amp; Lightning</span> sur ta boutique.
          </h1>
          <p className="lead">
            Développeur full-stack spécialisé dans les passerelles de paiement
            Bitcoin non-custodial. Les fonds arrivent direct dans ton wallet —
            sans intermédiaire, sans frais de plateforme, sans rejet.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Démarrer un projet →
            </a>
            <a href="#iris" className="btn btn-ghost">
              Voir IRIS ⚡
            </a>
          </div>
        </div>
        <InvoiceCard />
      </div>
    </header>
  );
}
