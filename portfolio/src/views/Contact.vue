<script setup>
const contactMethods = [
  {
    name: 'WhatsApp',
    detail: '+229 50 20 88 93',
    description: 'Pour échanger rapidement à propos de votre projet.',
    href: 'https://wa.me/22950208893',
    icon: 'message',
    external: true,
  },
  {
    name: 'GitHub',
    detail: '@Brechou',
    description: 'Retrouvez mes projets et mon code source.',
    href: 'https://github.com/Brechou',
    icon: 'code',
    external: true,
  },
  {
    name: 'Email',
    detail: 'lazarelokonon2@gmail.com',
    description: 'Pour une prise de contact ou une proposition détaillée.',
    href: 'mailto:lazarelokonon2@gmail.com',
    icon: 'mail',
    external: false,
  },
]
</script>

<template>
  <section class="contact-page">
    <div class="contact-container">
      <header class="contact-heading">
        <p class="eyebrow">Restons en contact</p>
        <h1>Parlons de votre projet</h1>
        <p class="heading-description">
          Disponible pour des collaborations, des missions freelance ou de
          nouvelles opportunités. Choisissez le moyen de contact qui vous
          convient.
        </p>
      </header>

      <div class="contact-grid">
        <a
          v-for="method in contactMethods"
          :key="method.name"
          class="contact-card"
          :href="method.href"
          :target="method.external ? '_blank' : undefined"
          :rel="method.external ? 'noopener noreferrer' : undefined"
        >
          <div class="contact-icon" aria-hidden="true">
            <svg
              v-if="method.icon === 'message'"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 7.6 7.6 0 0 1-3.5-.85L4 20l1.35-4.1A7.5 7.5 0 1 1 20 11.5Z"
              />
              <path d="M8.5 11.5h7M12 8v7" />
            </svg>
            <svg
              v-else-if="method.icon === 'code'"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </div>

          <div class="contact-card-copy">
            <h2>{{ method.name }}</h2>
            <p class="contact-detail">{{ method.detail }}</p>
            <p class="contact-description">{{ method.description }}</p>
          </div>

          <span class="contact-arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <p class="contact-note">
        Je vous répondrai dans les meilleurs délais.
      </p>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  position: relative;
  min-height: calc(100vh - 5rem);
  overflow: hidden;
  padding: 2rem 1.5rem 4rem;
  background: #0f1720;
  color: #e7edf5;
  isolation: isolate;
}

.contact-page::before {
  position: absolute;
  z-index: -1;
  top: 8rem;
  left: 50%;
  width: min(45rem, 80vw);
  height: 24rem;
  border-radius: 50%;
  background: rgb(46 230 208 / 7%);
  content: '';
  filter: blur(100px);
  transform: translateX(-50%);
}

.contact-container {
  width: min(100%, 920px);
  margin: 0 auto;
}

.contact-heading {
  max-width: 46rem;
  margin: 0 auto 2rem;
  text-align: center;
}

.eyebrow {
  margin: 0 0 0.5rem;
  color: #2ee6d0;
  font-size: 0.95rem;
  font-weight: 600;
}

.contact-heading h1 {
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

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.125rem;
}

.contact-card {
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 14.5rem;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  border: 1px solid #293849;
  border-radius: 1rem;
  background: #18232f;
  color: inherit;
  text-decoration: none;
  transition:
    transform 200ms ease,
    border-color 200ms ease;
}

.contact-card:hover {
  transform: translateY(-3px);
  border-color: #2ee6d0;
}

.contact-card:focus-visible {
  outline: 2px solid #2ee6d0;
  outline-offset: 4px;
}

.contact-icon {
  display: grid;
  width: 3rem;
  height: 3rem;
  flex: 0 0 auto;
  place-items: center;
  margin-bottom: 1.25rem;
  border: 1px solid rgb(46 230 208 / 28%);
  border-radius: 0.875rem;
  background: rgb(46 230 208 / 12%);
  color: #2ee6d0;
}

.contact-icon svg {
  width: 1.5rem;
  height: 1.5rem;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}

.contact-card-copy h2 {
  margin: 0;
  color: #f1f5f9;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.contact-detail {
  margin: 0.4rem 0 0;
  color: #2ee6d0;
  font-size: 0.95rem;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.contact-description {
  margin: 0.75rem 0 0;
  color: #a9c5e3;
  font-size: 0.9rem;
  line-height: 1.55;
}

.contact-arrow {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: #7890a8;
  font-size: 1rem;
  transition:
    color 200ms ease,
    transform 200ms ease;
}

.contact-card:hover .contact-arrow {
  color: #2ee6d0;
  transform: translate(2px, -2px);
}

.contact-note {
  margin: 1.75rem 0 0;
  color: #7890a8;
  font-size: 0.9rem;
  text-align: center;
}

@media (max-width: 700px) {
  .contact-page {
    padding: 1.25rem 1rem 3rem;
  }

  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .contact-heading {
    margin-bottom: 1.5rem;
  }

  .heading-description {
    font-size: 1rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    min-height: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-card,
  .contact-arrow {
    transition: none;
  }

  .contact-card:hover,
  .contact-card:hover .contact-arrow {
    transform: none;
  }
}
</style>
