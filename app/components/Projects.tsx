import Reveal from "./Reveal";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="block" id="projets" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Autres travaux</span>
          <h2>Du back-end sécurisé au smart contract.</h2>
          <p>
            Au-delà des paiements, je construis des plateformes complètes — API,
            authentification, chiffrement, blockchain.
          </p>
        </Reveal>
        <Reveal className="proj-grid">
          {projects.map((p) => (
            <div className="proj" key={p.title}>
              <div className="ptop">
                <span className="ptype">{p.type}</span>
                <span className="proj-arrow">↗</span>
              </div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
              <div className="ptech">
                {p.tech.map((t, i) => (
                  <span key={i}>
                    {t}
                    {i < p.tech.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
