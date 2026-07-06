import Reveal from "./Reveal";
import { stack } from "../data";

export default function Stack() {
  return (
    <section className="block" id="stack" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Boîte à outils</span>
          <h2>Ce avec quoi je construis.</h2>
        </Reveal>
        <Reveal className="stack-grid">
          {stack.map((col) => (
            <div className="stack-col" key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
