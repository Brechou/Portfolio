<script setup>
const skillGroups = [
  {
    title: 'Backend',
    icon: 'backend',
    sections: [
      {
        title: 'Langages',
        skills: [
          { name: 'PHP' },
          { name: 'C#' },
          { name: 'Python' },
          { name: 'JavaScript' },
        ],
      },
      {
        title: 'Frameworks',
        skills: [
          { name: 'Laravel', detail: 'PHP' },
          { name: '.NET', detail: 'C#' },
          { name: 'Express.js', detail: 'Node.js' },
          { name: 'FastAPI', detail: 'Python' },
        ],
      },
      {
        title: "Environnement d'exécution",
        skills: [{ name: 'Node.js' }],
      },
    ],
  },
  {
    title: 'Frontend',
    icon: 'frontend',
    sections: [
      {
        title: 'Langages web',
        skills: [
          { name: 'HTML', detail: 'balisage' },
          { name: 'CSS', detail: 'styles' },
          { name: 'JavaScript' },
        ],
      },
      {
        title: 'Frameworks et bibliothèques',
        skills: [
          { name: 'Vue.js', detail: 'framework' },
          { name: 'React.js', detail: 'bibliothèque' },
        ],
      },
      {
        title: 'Framework CSS',
        skills: [{ name: 'Tailwind CSS' }],
      },
    ],
  },
  {
    title: 'Bases de données',
    icon: 'database',
    sections: [
      {
        title: 'Relationnelles (SQL)',
        skills: [
          { name: 'MySQL' },
          { name: 'PostgreSQL' },
          { name: 'SQLite' },
        ],
      },
      {
        title: 'NoSQL',
        skills: [{ name: 'MongoDB', detail: 'orientée documents' }],
      },
    ],
  },
]
</script>

<template>
  <section class="skills-page">
    <div class="skills-container">
      <header class="skills-heading">
        <h1>Compétences</h1>
        <p>
          Une stack complète, du serveur à l'interface, avec les langages
          distingués des frameworks.
        </p>
      </header>

      <div class="skills-grid">
        <article
          v-for="group in skillGroups"
          :key="group.title"
          class="skill-card"
        >
          <div class="card-heading">
            <svg
              v-if="group.icon === 'backend'"
              class="category-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="6" rx="1" />
              <rect x="3" y="14" width="18" height="6" rx="1" />
            </svg>
            <svg
              v-else-if="group.icon === 'frontend'"
              class="category-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="16" rx="1" />
              <path d="M3 9h18" />
            </svg>
            <svg
              v-else
              class="category-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <ellipse cx="12" cy="5" rx="8" ry="3" />
              <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
              <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
            </svg>
            <h2>{{ group.title }}</h2>
          </div>

          <div
            v-for="section in group.sections"
            :key="section.title"
            class="skill-section"
          >
            <h3>{{ section.title }}</h3>
            <ul class="skill-list">
              <li
                v-for="skill in section.skills"
                :key="skill.name"
                class="skill-chip"
              >
                <span>{{ skill.name }}</span>
                <small v-if="skill.detail">{{ skill.detail }}</small>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-page {
  min-height: calc(100vh - 5rem);
  padding: 1.5rem 1.5rem 4rem;
  background: #0f1720;
  color: #e7edf5;
}

.skills-container {
  width: min(100%, 920px);
  margin: 0 auto;
}

.skills-heading {
  margin-bottom: 2.25rem;
}

.skills-heading h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 3.25rem);
  font-weight: 750;
  letter-spacing: -0.045em;
  line-height: 1.15;
}

.skills-heading p {
  margin: 0.75rem 0 0;
  color: #a9c5e3;
  font-size: 1.125rem;
  line-height: 1.6;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  align-items: stretch;
}

.skill-card {
  min-width: 0;
  padding: 1.75rem 1.625rem;
  border: 1px solid #293849;
  border-radius: 1rem;
  background: #18232f;
  transition: transform 200ms ease;
}

.skill-card:hover {
  transform: scale(1.02);
}

.card-heading {
  display: flex;
  min-height: 2.5rem;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 1.25rem;
}

.category-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 auto;
  stroke: #2ee6d0;
  stroke-width: 1.7;
}

.card-heading h2 {
  margin: 0;
  color: #f1f5f9;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.4;
}

.skill-section + .skill-section {
  margin-top: 1.5rem;
}

.skill-section h3 {
  margin: 0 0 0.625rem;
  color: #2ee6d0;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.075em;
  line-height: 1.5;
  text-transform: uppercase;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-chip {
  display: flex;
  min-height: 2.375rem;
  flex-direction: column;
  justify-content: center;
  padding: 0.45rem 0.75rem;
  border: 1px solid #293b4d;
  border-radius: 0.7rem;
  background: #202e3c;
  color: #f1f5f9;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.25;
  transition: transform 200ms ease;
}

.skill-chip:hover {
  transform: scale(1.05);
}

.skill-chip small {
  margin-top: 0.1rem;
  color: #a9c5e3;
  font-size: 0.7rem;
  font-weight: 400;
}

@media (max-width: 800px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .skills-page {
    padding: 1.5rem 1rem 3rem;
  }

  .skills-heading {
    margin-bottom: 1.75rem;
  }

  .skills-heading p {
    font-size: 1rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-card {
    padding: 1.5rem;
  }
}
</style>
