import { marqueeItems } from "../data";

export default function Marquee() {
  // Duplicated once so the -50% scroll loops seamlessly.
  const track = [...marqueeItems, ...marqueeItems];
  return (
    <div className="strip">
      <div className="strip-track">
        {track.map((item, i) => (
          <span key={i}>{item.bold ? <b>{item.text}</b> : item.text}</span>
        ))}
      </div>
    </div>
  );
}
