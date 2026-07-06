"use client";

import { useEffect, useState } from "react";

export default function InvoiceCard() {
  const [paid, setPaid] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      setPaid(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    const settle = () => {
      setPaid(true);
      setFlash(true);
      timers.push(setTimeout(() => setFlash(false), 500));
    };
    const reset = () => setPaid(false);

    const cycle = () => {
      timers.push(setTimeout(settle, 1600));
      timers.push(setTimeout(reset, 5200));
    };

    cycle();
    const interval = setInterval(cycle, 6400);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="invoice">
      <div className={`flash ${flash ? "go" : ""}`} />
      <div className="inv-top">
        <span className="lbl">Facture Lightning</span>
        <span className="inv-net">⚡ Lightning Network</span>
      </div>
      <div className="inv-amount">
        21 000<span className="unit">sats</span>
      </div>
      <div className="inv-fiat">≈ 12,60 € · règlement instantané</div>
      <div className="inv-str">
        <b>lnbc</b>210u1p3k9f2xpp5q7m…dtx8w4rf9<b>2vh0</b>fqz
      </div>
      <div className="inv-status">
        <div className={`status-pill ${paid ? "status-paid" : "status-pending"}`}>
          <span className="dot" />
          <span>{paid ? "Réglé ⚡" : "En attente du paiement"}</span>
        </div>
        <span className="settle-time">
          {paid ? (
            <>
              confirmé en <b>0,4 s</b>
            </>
          ) : (
            ""
          )}
        </span>
      </div>
    </div>
  );
}
