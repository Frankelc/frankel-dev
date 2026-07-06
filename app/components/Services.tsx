import Reveal from "./Reveal";
import { services } from "../data";

export default function Services() {
  return (
    <section className="block" id="services">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Ce que je livre</span>
          <h2>Des paiements Bitcoin qui marchent, testés de bout en bout.</h2>
          <p>
            De la boutique WooCommerce clé en main au checkout Lightning sur
            mesure. Auto-hébergé pour la souveraineté totale, ou managé si tu ne
            veux aucune maintenance.
          </p>
        </Reveal>
        <Reveal className="svc-grid">
          {services.map((s) => (
            <div className="svc" key={s.num}>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
