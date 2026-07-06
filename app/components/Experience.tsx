import Reveal from "./Reveal";
import { experience } from "../data";

export default function Experience() {
  return (
    <section className="block" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Parcours</span>
          <h2>Formation &amp; expérience.</h2>
        </Reveal>
        <Reveal>
          {experience.map((e, i) => (
            <div className="exp-row" key={i}>
              <div className="when">{e.when}</div>
              <div>
                <h4>
                  {e.title} <span>{e.org}</span>
                </h4>
                <p>{e.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
