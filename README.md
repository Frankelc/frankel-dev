# Portfolio — Frankel Gnonlonfin

Portfolio personnel construit en **Next.js 16 (App Router) + TypeScript**.
Intégration paiement Bitcoin & Lightning · développeur full-stack.

## Points clés

- **Design system porté** depuis la maquette HTML d'origine (thème sombre, accent amber, polices Space Grotesk / JetBrains Mono / Inter via `next/font`).
- **Section GitHub live** : `app/components/GithubRepos.tsx` récupère les dépôts publics via l'API GitHub (Server Component, revalidation horaire) — la liste reste à jour automatiquement, avec un fallback statique si l'API est indisponible.
- **Animations client** : carte facture Lightning qui « se règle » en boucle (`InvoiceCard.tsx`) et révélation au scroll (`Reveal.tsx`), respectant `prefers-reduced-motion`.
- Contenu centralisé dans `app/data.ts`.

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # sert le build
```

## Structure

```
app/
  layout.tsx          # polices + metadata SEO
  page.tsx            # assemblage des sections
  globals.css         # design system
  data.ts             # contenu (services, projets, stack, expérience…)
  components/
    Nav, Hero, InvoiceCard, Marquee, Services, Iris,
    Projects, GithubRepos, Stack, Experience, Contact, Footer, Reveal
```

## Déploiement

Optimisé pour **Vercel** (import du dépôt → déploiement automatique) ou tout hébergeur Node.
