export const GITHUB_USER = "Frankelc";

export const services = [
  {
    num: "01",
    title: "BTCPay + WooCommerce",
    body: "Passerelle non-custodial clé en main : VPS, SSL, node Lightning, connexion wallet et intégration WooCommerce. Livré et testé en 48h.",
  },
  {
    num: "02",
    title: "Checkout sur mesure",
    body: "Paiement Lightning intégré à ton app Next.js / React via Breez SDK ou LNbits. Pour les projets qui ne sont pas sur WooCommerce.",
  },
  {
    num: "03",
    title: "Maintenance & liquidité",
    body: "Monitoring du node, rééquilibrage des canaux, backups et mises à jour. Ton infra Lightning reste fiable et ne perd aucun paiement.",
  },
];

export const irisFlow = [
  { ic: "1", text: "<b>Employeur</b> valide les heures travaillées" },
  { ic: "2", text: "Le travailleur demande une <b>avance en sats</b>" },
  { ic: "⚡", text: "Règlement <b>Lightning</b> en moins d'une seconde" },
  { ic: "3", text: "Retrait en <b>monnaie locale</b> ou dépense directe" },
];

export const irisMeta = [
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "Next.js 14",
  "Breez SDK",
];

export const irisStats = [
  { v: "<1s", k: "règlement" },
  { v: "0", k: "compte bancaire requis" },
  { v: "3 j", k: "du concept au démo" },
];

export const projects = [
  {
    type: "Plateforme SaaS",
    title: "MPME OS",
    body: "Plateforme de gestion pour les PME béninoises : facturation, transactions, financement. Pensée pour la conformité et la traçabilité.",
    tech: ["Django REST · PostgreSQL", "JWT · RBAC · AES-256 · logs SHA-256 chaînés"],
  },
  {
    type: "Dashboard",
    title: "Thesigenix",
    body: "Tableau de bord académique orienté client : suivi, paramètres, interface soignée et responsive du premier au dernier pixel.",
    tech: ["Next.js (App Router) · Tailwind CSS", "React · Lucide · design system sur mesure"],
  },
  {
    type: "Smart contract",
    title: "TontineChain",
    body: "Digitalisation de la tontine — l'épargne rotative traditionnelle — en contrat intelligent transparent et vérifiable on-chain.",
    tech: ["Solidity · EVM", "MIABE Hackathon 2026"],
  },
];

export const stack = [
  {
    title: "Bitcoin / Lightning",
    items: ["BTCPay Server", "Breez SDK", "LNbits", "Lightning Network", "WooCommerce"],
  },
  {
    title: "Back-end",
    items: ["Django REST", "Node.js / Express", "Prisma", "PostgreSQL", "JWT · RBAC"],
  },
  {
    title: "Front-end",
    items: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Figma"],
  },
  {
    title: "Systèmes & réseau",
    items: ["C / POSIX", "Linux / WSL", "Solidity", "Embarqué (AVR, VHDL)", "Admin réseau"],
  },
];

export const experience = [
  {
    when: "2024 → présent",
    title: "Licence Informatique",
    org: "· IFRI, Université d'Abomey-Calavi",
    body: "Développement full-stack, systèmes & réseaux, systèmes embarqués, algorithmique.",
  },
  {
    when: "Stage",
    title: "SCB Lafarge",
    org: "· Développement web & administration réseau",
    body: "Développement d'applications web et administration de l'infrastructure réseau.",
  },
  {
    when: "En cours",
    title: "Quant Studio SARL",
    org: "· Stage — Développement",
    body: "Stage en cours : développement applicatif sur des projets clients.",
  },
];

export const marqueeItems = [
  { text: "BTCPay Server", bold: true },
  { text: "Lightning Network", bold: true },
  { text: "Breez SDK", bold: false },
  { text: "LNbits", bold: false },
  { text: "WooCommerce", bold: false },
  { text: "Next.js", bold: true },
  { text: "Django REST", bold: false },
  { text: "Node.js", bold: false },
  { text: "Prisma", bold: false },
  { text: "PostgreSQL", bold: false },
  { text: "Solidity", bold: false },
];

export const contact = {
  email: "frankelgnonlonfin@gmail.com",
  github: "https://github.com/Frankelc",
  whatsapp: "https://wa.me/2290195798425",
};
