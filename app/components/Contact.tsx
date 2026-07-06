import Reveal from "./Reveal";
import { contact } from "../data";

export default function Contact() {
  return (
    <section className="block" id="contact" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <Reveal className="contact">
          <h2>Tu veux accepter du Bitcoin ?</h2>
          <p>
            Dis-moi ta plateforme (WooCommerce ou sur mesure) et si tu veux
            garder le contrôle total de tes fonds ou une solution sans
            maintenance. Je te réponds avec l&apos;approche exacte et le délai.
          </p>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`} className="btn btn-primary">
              {contact.email} ✎
            </a>
            <a href={contact.github} className="btn btn-ghost">
              GitHub
            </a>
            <a href={contact.whatsapp} className="btn btn-ghost">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
