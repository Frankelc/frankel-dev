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
  IFRI: { type: "Template", desc: "Support pour poser et documenter des problèmes." },
  "OLAMAR-SERVICE": { type: "Repository", desc: "Projet de service — forké par la communauté." },
  "no-l-magique-cr-ateur": { type: "TypeScript", desc: "Expérimentation front-end en TypeScript." },
  site_dealer: { type: "Fork · JavaScript", desc: "Fork depuis Legeek117/site_dealer." },
  "smart-haven-ui": { type: "TypeScript", desc: "Interface en TypeScript — projet en exploration." },
  "gilded-moments": { type: "TypeScript", desc: "Projet TypeScript — détails à venir." },
  "wa-companion": { type: "Fork · TypeScript", desc: "Companion WhatsApp — fork expérimental." },
};

// Repos to hide (scratch/test repos).
const HIDE = new Set(["essaie"]);

// Static fallback so the build never fails when GitHub is unreachable.
const FALLBACK: Repo[] = [
  "IFRI",
  "OLAMAR-SERVICE",
  "no-l-magique-cr-ateur",
  "site_dealer",
  "smart-haven-ui",
  "gilded-moments",
].map((name) => ({
  name,
  html_url: `https://github.com/${GITHUB_USER}/${name}`,
  description: null,
  language: OVERRIDES[name]?.type?.includes("Java") ? "JavaScript" : "TypeScript",
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
      .slice(0, 6);
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
            const desc = repo.description ?? o.desc ?? "Dépôt public.";
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
