import Reveal from "./Reveal";
import { irisFlow, irisMeta, irisStats } from "../data";

export default function Iris() {
  return (
    <section className="block" id="iris" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Projet phare</span>
          <h2>IRIS — le salaire versé en sats, à la seconde.</h2>
        </Reveal>
        <Reveal className="feat">
          <div className="feat-inner">
            <div className="feat-left">
              <span className="feat-tag">
                Bitcoin Mastermind Hackathon 2026 · Cotonou
              </span>
              <h3>IRIS</h3>
              <div className="sub">
                Earned-wage access sur Lightning · Team Évolutics
              </div>
              <p className="desc">
                Une plateforme d&apos;accès au salaire gagné pour les
                travailleurs informels d&apos;Afrique de l&apos;Ouest. Le
                travailleur reçoit ce qu&apos;il a déjà gagné, en sats, réglé
                instantanément sur Lightning — sans compte bancaire, sans
                attendre la fin du mois.
              </p>
              <div className="feat-meta">
                {irisMeta.map((m) => (
                  <span className="chip" key={m}>
                    {m}
                  </span>
                ))}
              </div>
              <div className="feat-stats">
                {irisStats.map((st) => (
                  <div className="st" key={st.k}>
                    <div className="v">{st.v}</div>
                    <div className="k">{st.k}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="feat-right">
              {irisFlow.map((step, i) => (
                <div key={i}>
                  <div className="flow-step">
                    <span className="ic">{step.ic}</span>
                    <span dangerouslySetInnerHTML={{ __html: step.text }} />
                  </div>
                  {i < irisFlow.length - 1 && <div className="flow-line" />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
