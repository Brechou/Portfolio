<script setup>
const bgImage = new URL('../asserts/img/portfolio.jpeg', import.meta.url).href

const technologies = [
  {
    name: 'Laravel',
    icon: 'La',
    description: 'Framework PHP pour un backend robuste.',
  },
  {
    name: 'Vue.js',
    icon: 'V',
    description: 'Framework JavaScript pour des interfaces réactives.',
  },
  {
    name: 'C# / .NET',
    icon: 'C#',
    description: 'Backend fiable avec la plateforme Microsoft.',
  },
  {
    name: 'Node.js',
    icon: 'N',
    description: 'JavaScript côté serveur.',
  },
  {
    name: 'JavaScript',
    icon: 'JS',
    description: 'Langage essentiel du web, côté client et serveur.',
  },
  {
    name: 'Tailwind CSS',
    icon: 'Tw',
    description: 'Framework CSS utilitaire pour un design cohérent.',
  },
  {
    name: 'SQL',
    icon: 'SQL',
    description: 'MySQL, PostgreSQL et SQLite.',
    category: 'database',
  },
  {
    name: 'MongoDB',
    icon: 'DB',
    description: 'Base NoSQL orientée documents.',
    category: 'database',
  },
]
</script>

<template>
  <div class="home-page">
    <section
      class="hero"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div class="hero-overlay"></div>
      <div class="hero-glow hero-glow-top"></div>
      <div class="hero-glow hero-glow-bottom"></div>

      <div class="hero-content">
        <div class="availability">
          <span class="availability-dot"></span>
          <span>Disponible pour de nouveaux projets</span>
        </div>

        <h1>
          <span class="hero-greeting">Salut, moi c'est</span>
          <span class="hero-name">Breton Lokonon</span>
        </h1>

        <p class="hero-description">
          Développeur web fullstack : Laravel, Vue.js, Node.js et .NET. Je
          construis des applications web complètes, du backend à l’interface.
        </p>

        <div class="hero-stats" aria-label="Quelques chiffres">
          <div class="stat">
            <strong>13+</strong>
            <span>mois d'expérience</span>
          </div>
          <div class="stat">
            <strong>16+</strong>
            <span>projets réalisés</span>
          </div>
        </div>

        <div class="hero-actions">
          <router-link to="/projet" class="button button-primary">
            Voir mes projets
          </router-link>
          <router-link to="/contact" class="button button-secondary">
            Me contacter
          </router-link>
        </div>
      </div>
    </section>

    <section class="technology-section">
      <div class="technology-container">
        <header class="section-heading">
          <h2>Technologies que j'utilise</h2>
          <p>Les outils que je mobilise pour concevoir des applications web.</p>
        </header>

        <div class="technology-grid">
          <article
            v-for="technology in technologies"
            :key="technology.name"
            class="technology-card"
            :class="{ 'technology-card-database': technology.category === 'database' }"
          >
            <div class="technology-icon" aria-hidden="true">
              {{ technology.icon }}
            </div>
            <h3>{{ technology.name }}</h3>
            <p>{{ technology.description }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  min-height: calc(100vh - 5rem);
  overflow: hidden;
  background: #0f1720;
  color: #e7edf5;
}

.hero {
  position: relative;
  display: flex;
  min-height: min(760px, calc(100vh - 5rem));
  align-items: center;
  background-color: #0f1720;
  background-position: center;
  background-size: cover;
  isolation: isolate;
  padding: 5rem 1.5rem;
}

.hero-overlay,
.hero-glow {
  position: absolute;
  z-index: -1;
  pointer-events: none;
}

.hero-overlay {
  inset: 0;
  background: linear-gradient(90deg, rgb(15 23 32 / 96%) 0%, rgb(15 23 32 / 78%) 58%, rgb(15 23 32 / 56%) 100%);
}

.hero-glow {
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  background: #2ee6d0;
  filter: blur(100px);
  opacity: 0.12;
}

.hero-glow-top {
  top: -9rem;
  right: 7%;
}

.hero-glow-bottom {
  bottom: -13rem;
  left: 18%;
}

.hero-content,
.technology-container {
  width: min(100%, 920px);
  margin: 0 auto;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.availability {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.55rem 0.9rem;
  border: 1px solid rgb(46 230 208 / 28%);
  border-radius: 999px;
  background: rgb(24 35 47 / 75%);
  color: #a9c5e3;
  font-size: 0.875rem;
}

.availability-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #2ee6d0;
  box-shadow: 0 0 0.75rem rgb(46 230 208 / 75%);
}

.hero h1 {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin: 0;
  line-height: 1.1;
}

.hero-greeting {
  color: #e7edf5;
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 600;
  letter-spacing: -0.035em;
}

.hero-name {
  color: #2ee6d0;
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 750;
  letter-spacing: -0.055em;
}

.hero-description {
  max-width: 42rem;
  margin: 0;
  color: #a9c5e3;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.7;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat strong {
  color: #2ee6d0;
  font-size: 1.5rem;
  line-height: 1.2;
}

.stat span {
  color: #a9c5e3;
  font-size: 0.875rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  margin-top: 0.5rem;
}

.button {
  display: inline-flex;
  min-height: 3rem;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  font-weight: 650;
  text-decoration: none;
  transition:
    background-color 200ms ease,
    border-color 200ms ease,
    color 200ms ease,
    transform 200ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  background: #2ee6d0;
  color: #0f1720;
}

.button-primary:hover {
  background: #6cf0df;
}

.button-secondary {
  border-color: #405365;
  background: rgb(15 23 32 / 40%);
  color: #e7edf5;
}

.button-secondary:hover {
  border-color: #2ee6d0;
  color: #2ee6d0;
}

.technology-section {
  padding: 4.5rem 1.5rem 5rem;
  background: #0f1720;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  margin: 0;
  color: #e7edf5;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 750;
  letter-spacing: -0.045em;
  line-height: 1.2;
}

.section-heading p {
  margin: 0.75rem 0 0;
  color: #a9c5e3;
  font-size: 1.05rem;
  line-height: 1.6;
}

.technology-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.125rem;
}

.technology-card {
  min-width: 0;
  min-height: 15rem;
  padding: 1.375rem;
  border: 1px solid #293849;
  border-radius: 1rem;
  background: #18232f;
  transition:
    transform 200ms ease,
    border-color 200ms ease;
}

.technology-card:hover {
  transform: scale(1.02);
  border-color: #2ee6d0;
}

.technology-icon {
  display: grid;
  width: 3.5rem;
  height: 3.5rem;
  place-items: center;
  margin-bottom: 1.25rem;
  border: 1px solid rgb(46 230 208 / 28%);
  border-radius: 0.875rem;
  background: rgb(46 230 208 / 12%);
  color: #2ee6d0;
  font-size: 0.95rem;
  font-weight: 750;
}

.technology-card h3 {
  margin: 0 0 0.5rem;
  color: #f1f5f9;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.35;
}

.technology-card p {
  margin: 0;
  color: #a9c5e3;
  font-size: 0.95rem;
  line-height: 1.6;
}

.technology-card-database .technology-icon {
  border-color: rgb(46 230 208 / 28%);
  background: rgb(46 230 208 / 12%);
}

@media (max-width: 800px) {
  .technology-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .hero {
    min-height: calc(100vh - 5rem);
    padding: 4rem 1rem;
  }

  .hero-overlay {
    background: rgb(15 23 32 / 82%);
  }

  .hero-content {
    gap: 1.25rem;
  }

  .availability {
    font-size: 0.75rem;
  }

  .hero-stats {
    gap: 1.75rem;
  }

  .hero-actions {
    width: 100%;
  }

  .button {
    flex: 1 1 100%;
  }

  .technology-section {
    padding: 3.5rem 1rem;
  }

  .technology-grid {
    grid-template-columns: 1fr;
  }

  .technology-card {
    min-height: auto;
    padding: 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .button,
  .technology-card {
    transition: none;
  }

  .button:hover,
  .technology-card:hover {
    transform: none;
  }
}
</style>
