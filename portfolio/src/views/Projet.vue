<script setup>
const projects = [
  {
    name: 'BrainBurst',
    status: 'Projet en équipe',
    description:
      'Plateforme de quiz et de gestion de candidats : modules de cours, gestion de mails et parcours guidés.',
    technologies: ['Laravel', 'Vue 3', 'TypeScript', 'PrimeVue'],
    links: [
      {
        label: 'Lien à ajouter',
        style: 'disabled',
      },
    ],
  },
  {
    name: 'Portfolio Développeur',
    status: 'En ligne',
    description:
      'Portfolio moderne pour présenter mes compétences et projets avec une interface fluide et responsive.',
    technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    links: [
      {
        label: 'Voir le site',
        href: 'https://portfolio-vrnn-2jfz36k2b-brechou-6830s-projects.vercel.app',
        style: 'primary',
      },
      {
        label: 'Code source',
        href: 'https://github.com/Brechou/Portfolio',
        style: 'outline',
      },
    ],
  },
  {
    name: 'Plateforme de Citations',
    status: 'Démo bientôt',
    description:
      'Application web pour publier, liker, commenter et enregistrer des citations, avec authentification.',
    technologies: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    links: [
      {
        label: 'Démo bientôt',
        style: 'disabled',
      },
      {
        label: 'Code source',
        href: 'https://github.com/Brechou/iconnexionDeReseau',
        style: 'outline',
      },
    ],
  },
  {
    name: "Gestion d'équipe de foot",
    status: 'Chef de projet',
    description:
      'Application PHP pour gérer une équipe de football, de la préparation aux matchs.',
    technologies: ['PHP', 'SQL'],
    links: [
      {
        label: 'Lien à ajouter',
        style: 'disabled',
      },
    ],
  },
  {
    name: 'Site E-commerce',
    status: 'En ligne',
    description:
      'Site e-commerce avec affichage dynamique des produits et gestion des interactions utilisateur.',
    technologies: ['Vue.js', 'JavaScript', 'CSS'],
    links: [
      {
        label: 'Voir le site',
        href: 'https://ecomm-tpdemort.vercel.app/',
        style: 'primary',
      },
      {
        label: 'Code source',
        href: 'https://github.com/Brechou/ecommTpdemort',
        style: 'outline',
      },
    ],
  },
]

const featuredProject = projects[0]
const otherProjects = projects.slice(1)

function isOnline(project) {
  return project.status === 'En ligne'
}
</script>

<template>
  <section class="projects-page">
    <div class="projects-container">
      <header class="projects-heading">
        <p class="eyebrow">Réalisations</p>
        <h1>Projets</h1>
        <p class="heading-description">
          Des projets concrets qui démontrent mes compétences en développement.
        </p>
      </header>

      <article class="featured-project">
        <div class="project-visual featured-visual" aria-hidden="true">
          <div class="visual-window">
            <div class="visual-toolbar">
              <span></span><span></span><span></span>
            </div>
            <div class="visual-content">
              <div class="visual-title"></div>
              <div class="visual-line visual-line-long"></div>
              <div class="visual-line visual-line-medium"></div>
              <div class="visual-line visual-line-short"></div>
              <div class="visual-blocks">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="featured-content">
          <span
            class="project-status"
            :class="featuredProject.status === 'Projet en équipe' ? 'status-team' : 'status-live'"
          >
            {{ featuredProject.status }}
          </span>
          <h2>{{ featuredProject.name }}</h2>
          <p>{{ featuredProject.description }}</p>

          <ul class="technology-list">
            <li v-for="technology in featuredProject.technologies" :key="technology">
              {{ technology }}
            </li>
          </ul>

          <div class="project-links">
            <template v-for="link in featuredProject.links" :key="link.label">
              <a
                v-if="link.href"
                :href="link.href"
                :class="['project-link', `project-link-${link.style}`]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.label }}
                <span aria-hidden="true">↗</span>
              </a>
              <button
                v-else
                type="button"
                class="project-link project-link-disabled"
                disabled
              >
                {{ link.label }}
              </button>
            </template>
          </div>
        </div>
      </article>

      <div class="project-grid">
        <article
          v-for="project in otherProjects"
          :key="project.name"
          class="project-card"
        >
          <div class="project-visual card-visual" aria-hidden="true">
            <div class="visual-card-title"></div>
            <div class="visual-line visual-line-medium"></div>
            <div class="visual-line visual-line-short"></div>
            <div class="visual-line visual-line-long"></div>
          </div>

          <div class="project-card-content">
            <span
              class="project-status"
              :class="{
                'status-live': isOnline(project),
                'status-soon': project.status === 'Démo bientôt',
                'status-team': project.status === 'Chef de projet',
              }"
            >
              {{ project.status }}
            </span>
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>

            <ul class="technology-list">
              <li v-for="technology in project.technologies" :key="technology">
                {{ technology }}
              </li>
            </ul>

            <div class="project-links">
              <template v-for="link in project.links" :key="link.label">
                <a
                  v-if="link.href"
                  :href="link.href"
                  :class="['project-link', `project-link-${link.style}`]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ link.label }}
                  <span aria-hidden="true">↗</span>
                </a>
                <button
                  v-else
                  type="button"
                  class="project-link project-link-disabled"
                  disabled
                >
                  {{ link.label }}
                </button>
              </template>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  min-height: calc(100vh - 5rem);
  padding: 2rem 1.5rem 4rem;
  background: #0f1720;
  color: #e7edf5;
}

.projects-container {
  width: min(100%, 920px);
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid rgb(41 56 73 / 45%);
  border-radius: 1.25rem;
  background: #0c1525;
}

.projects-heading {
  margin-bottom: 2rem;
  text-align: center;
}

.eyebrow {
  margin: 0 0 0.5rem;
  color: #2ee6d0;
  font-size: 0.95rem;
  font-weight: 600;
}

.projects-heading h1 {
  margin: 0;
  color: #f1f5f9;
  font-size: clamp(2.25rem, 5vw, 2.75rem);
  font-weight: 750;
  letter-spacing: -0.045em;
  line-height: 1.15;
}

.heading-description {
  margin: 0.625rem 0 0;
  color: #a9c5e3;
  font-size: 1.1rem;
  line-height: 1.6;
}

.featured-project,
.project-card {
  overflow: hidden;
  border: 1px solid #293849;
  border-radius: 1rem;
  background: #18232f;
  transition:
    transform 200ms ease,
    border-color 200ms ease;
}

.featured-project {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
  min-height: 19rem;
}

.featured-project:hover,
.project-card:hover {
  transform: translateY(-3px);
  border-color: #2ee6d0;
}

.project-visual {
  background: #102035;
}

.featured-visual {
  display: grid;
  min-height: 19rem;
  place-items: center;
  padding: 1.75rem;
}

.visual-window {
  width: min(100%, 17rem);
  overflow: hidden;
  border: 1px solid #293849;
  border-radius: 0.75rem;
  background: #152337;
  box-shadow: 0 1.5rem 3rem rgb(0 0 0 / 18%);
}

.visual-toolbar {
  display: flex;
  gap: 0.35rem;
  padding: 0.65rem 0.75rem;
  border-bottom: 1px solid #293849;
}

.visual-toolbar span {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: #405365;
}

.visual-toolbar span:first-child {
  background: #2ee6d0;
}

.visual-content {
  padding: 1rem;
}

.visual-title,
.visual-card-title {
  width: 42%;
  height: 0.55rem;
  margin-bottom: 0.8rem;
  border-radius: 999px;
  background: #2ee6d0;
}

.visual-line {
  height: 0.45rem;
  margin-top: 0.55rem;
  border-radius: 999px;
  background: #293d53;
}

.visual-line-long {
  width: 100%;
}

.visual-line-medium {
  width: 72%;
}

.visual-line-short {
  width: 52%;
}

.visual-blocks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
}

.visual-blocks span {
  height: 2.8rem;
  border: 1px solid #293849;
  border-radius: 0.4rem;
  background: #1d3046;
}

.featured-content,
.project-card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.featured-content {
  padding: 1.75rem;
}

.project-status {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.4;
}

.status-live {
  background: rgb(46 230 208 / 12%);
  color: #2ee6d0;
}

.status-soon {
  background: rgb(245 158 11 / 15%);
  color: #fbbf24;
}

.status-team {
  background: rgb(46 230 208 / 12%);
  color: #2ee6d0;
}

.featured-content h2,
.project-card-content h2 {
  margin: 0.75rem 0 0;
  color: #f1f5f9;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.35;
}

.featured-content > p,
.project-card-content > p {
  margin: 0.5rem 0 0;
  color: #a9c5e3;
  font-size: 0.95rem;
  line-height: 1.65;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.technology-list li {
  padding: 0.3rem 0.7rem;
  border: 1px solid #38516b;
  border-radius: 0.6rem;
  color: #c3d2e3;
  font-size: 0.85rem;
  line-height: 1.4;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-top: 1.125rem;
}

.project-link {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.55rem 0.9rem;
  border: 1px solid transparent;
  border-radius: 0.7rem;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
  text-decoration: none;
  font-family: inherit;
  transition:
    background-color 200ms ease,
    border-color 200ms ease,
    color 200ms ease;
}

.project-link-primary {
  background: #2ee6d0;
  color: #0f1720;
}

.project-link-primary:hover {
  background: #6cf0df;
}

.project-link-outline {
  border-color: #2ee6d0;
  color: #2ee6d0;
}

.project-link-outline:hover {
  background: rgb(46 230 208 / 10%);
}

.project-link-disabled {
  cursor: not-allowed;
  background: rgb(245 158 11 / 15%);
  color: #fbbf24;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.project-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.card-visual {
  min-height: 5.25rem;
  padding: 1rem 1.25rem;
}

.card-visual .visual-card-title {
  width: 32%;
  height: 0.5rem;
  margin-bottom: 0.6rem;
}

.card-visual .visual-line {
  height: 0.4rem;
  margin-top: 0.45rem;
}

.project-card-content {
  flex: 1;
  padding: 1.25rem;
}

.project-card-content h2 {
  font-size: 1.25rem;
}

.project-card-content > p {
  flex: 1;
}

@media (max-width: 700px) {
  .projects-page {
    padding: 1.25rem 1rem 3rem;
  }

  .projects-container {
    padding: 1.5rem;
  }

  .featured-project {
    grid-template-columns: 1fr;
  }

  .featured-visual {
    min-height: 14rem;
  }
}

@media (max-width: 520px) {
  .projects-container {
    padding: 1.125rem;
  }

  .projects-heading {
    margin-bottom: 1.5rem;
  }

  .heading-description {
    font-size: 1rem;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }

  .featured-content,
  .project-card-content {
    padding: 1.125rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .featured-project,
  .project-card,
  .project-link {
    transition: none;
  }

  .featured-project:hover,
  .project-card:hover {
    transform: none;
  }
}
</style>
