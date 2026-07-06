import Reveal from "./Reveal";
import { GITHUB_USER } from "../data";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  pushed_at: string;
};

// Curated labels/descriptions for repos whose GitHub metadata is empty.
const OVERRIDES: Record<string, { type?: string; desc?: string }> = {
  "frankel-dev": { type: "Next.js · TypeScript", desc: "Ce portfolio — Next.js 16, App Router, section GitHub live." },
  "baya-luxe": { type: "UI · TypeScript", desc: "Interface e-commerce haut de gamme en TypeScript." },
  "zone-x-launchpad": { type: "UI · TypeScript", desc: "Landing page / launchpad produit en TypeScript." },
  "zenith-business-template": { type: "Template · TypeScript", desc: "Template de site vitrine business en TypeScript." },
  "inspectorWi_fi": { type: "Python", desc: "Outil d'inspection et d'analyse réseau Wi-Fi." },
  "smart-haven-ui": { type: "UI · TypeScript", desc: "Interface en TypeScript — projet en exploration." },
  "gilded-moments": { type: "UI · TypeScript", desc: "Interface front-end en TypeScript." },
  "no-l-magique-cr-ateur": { type: "TypeScript", desc: "Expérimentation front-end en TypeScript." },
  site_dealer: { type: "Fork · JavaScript", desc: "Fork depuis Legeek117/site_dealer." },
  "wa-companion": { type: "Fork · TypeScript", desc: "Companion WhatsApp — fork expérimental." },
  "OLAMAR-SERVICE": { type: "Repository", desc: "Projet de service — forké par la communauté." },
  IFRI: { type: "Template", desc: "Support pour poser et documenter des problèmes." },
};

// Repos to hide (scratch/test repos not worth showcasing).
const HIDE = new Set(["essaie", "test-pro"]);

// How many repos to display in the grid.
const MAX_REPOS = 9;

// Static fallback so the build never fails when GitHub is unreachable.
const FALLBACK: Repo[] = [
  "frankel-dev",
  "baya-luxe",
  "zone-x-launchpad",
  "zenith-business-template",
  "smart-haven-ui",
  "gilded-moments",
  "no-l-magique-cr-ateur",
  "site_dealer",
  "inspectorWi_fi",
].map((name) => ({
  name,
  html_url: `https://github.com/${GITHUB_USER}/${name}`,
  description: null,
  language: name === "site_dealer" ? "JavaScript" : name === "inspectorWi_fi" ? "Python" : "TypeScript",
  stargazers_count: 0,
  forks_count: 0,
  fork: false,
  pushed_at: "",
}));

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 }, // refresh at most once per hour
      }
    );
    if (!res.ok) return FALLBACK;
    const data: Repo[] = await res.json();
    return data
      .filter((r) => !HIDE.has(r.name))
      .sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      )
      .slice(0, MAX_REPOS);
  } catch {
    return FALLBACK;
  }
}

export default async function GithubRepos() {
  const repos = await getRepos();

  return (
    <section className="block" id="github" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <Reveal
          className="sec-head"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16,
            maxWidth: "none",
          }}
        >
          <div>
            <span className="eyebrow">Dépôts publics</span>
            <h2>Ce qui est déjà sur GitHub.</h2>
            <p>
              IRIS, MPME OS, Thesigenix et TontineChain restent en dépôts privés
              pour l&apos;instant. Voici le reste — récupéré en direct depuis{" "}
              <b style={{ color: "var(--amber-soft)" }}>@{GITHUB_USER}</b>.
            </p>
          </div>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            className="btn btn-ghost"
            style={{ flexShrink: 0 }}
            target="_blank"
            rel="noopener"
          >
            Voir le profil ↗
          </a>
        </Reveal>

        <Reveal className="proj-grid">
          {repos.map((repo) => {
            const o = OVERRIDES[repo.name] ?? {};
            const type =
              o.type ?? (repo.fork ? `Fork · ${repo.language ?? "Repo"}` : repo.language ?? "Repository");
            const desc =
              repo.description ??
              o.desc ??
              `Projet ${repo.language ?? "logiciel"}.`;
            return (
              <a
                className="proj"
                href={repo.html_url}
                target="_blank"
                rel="noopener"
                key={repo.name}
              >
                <div className="ptop">
                  <span className="ptype">{type}</span>
                  <span className="proj-arrow">↗</span>
                </div>
                <h4>{repo.name}</h4>
                <p>{desc}</p>
                <div className="repo-meta">
                  {repo.language && (
                    <span>
                      <span className="repo-lang-dot" />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span>★ {repo.stargazers_count}</span>
                  )}
                  {repo.forks_count > 0 && <span>⑂ {repo.forks_count}</span>}
                </div>
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
