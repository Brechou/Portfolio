<script setup></script>

<template>
  <section id="projects" class="py-16 bg-slate-900">
    <!-- Title -->
    <div class="text-center mb-12">
      <h2 class="text-white text-3xl sm:text-5xl font-black">MES PROJETS</h2>
      <p class="text-slate-400 mt-3">
        Des projets publics et concrets qui démontrent mes compétences en
        développement
      </p>
    </div>

    <!-- GRID -->
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 max-w-6xl mx-auto"
    >
      <!-- PROJECT 1 -->
      <div class="project-card">
        <img src="" class="rounded-xl mb-4" />

        <h3 class="text-white font-bold text-xl">Portfolio Développeur</h3>

        <p class="text-slate-400 text-sm mt-2">
          Développement d’un portfolio moderne pour présenter mes compétences et
          projets avec une interface fluide et responsive.
        </p>

        <p class="highlight mt-2">
          🎯 Objectif : attirer des opportunités et valoriser mon profil de
          développeur
        </p>

        <div class="flex gap-2 mt-3 flex-wrap">
          <span class="tag">HTML</span>
          <span class="tag">CSS</span>
          <span class="tag">JavaScript</span>
          <span class="tag">Vue.js</span>
          <span class="tag">Tailwind CSS</span>
        </div>

        <div class="flex gap-4 mt-4">
          <a class="btn opacity-50 cursor-not-allowed">🚧 Démo bientôt</a>
          <a
            href="https://github.com/Brechou/Portfolio"
            target="_blank"
            class="btn-outline"
            >💻 Code source</a
          >
        </div>
      </div>

      <!-- PROJECT 2 -->
      <div class="project-card">
        <img src="" class="rounded-xl mb-4" />

        <h3 class="text-white font-bold text-xl">Plateforme de Citations</h3>

        <p class="text-slate-400 text-sm mt-2">
          Application web permettant aux utilisateurs de publier, liker,
          commenter et enregistrer des citations avec gestion des données en
          temps réel.
        </p>

        <p class="highlight mt-2">
          ⚡ Fonctionnalités : authentification, CRUD complet, interactions
          utilisateurs
        </p>

        <div class="flex gap-2 mt-3 flex-wrap">
          <span class="tag">Vue.js</span>
          <span class="tag">Node.js</span>
          <span class="tag">Express.js</span>
          <span class="tag">MongoDB</span>
          <span class="tag">REST API</span>
        </div>

        <div class="flex gap-4 mt-4">
          <a class="btn opacity-50 cursor-not-allowed">🚧 Démo bientôt</a>
          <a
            href="https://github.com/Brechou/iconnexionDeReseau"
            target="_blank"
            class="btn-outline"
            >💻 Code source</a
          >
        </div>
      </div>

      <!-- PROJECT 3 -->
      <div class="project-card">
        <img src="" class="rounded-xl mb-4" />

        <h3 class="text-white font-bold text-xl">Site E-commerce</h3>

        <p class="text-slate-400 text-sm mt-2">
          Création d’un site e-commerce avec affichage dynamique des produits et
          gestion des interactions utilisateur.
        </p>

        <p class="highlight mt-2">
          🛒 Focus : expérience utilisateur, gestion des produits et logique
          panier
        </p>

        <div class="flex gap-2 mt-3 flex-wrap">
          <span class="tag">Vue.js</span>
          <span class="tag">JavaScript</span>
          <span class="tag">Tailwind CSS</span>
        </div>

        <div class="flex gap-4 mt-4">
          <a class="btn opacity-50 cursor-not-allowed">🚧 Démo bientôt</a>
          <a
            href="https://github.com/Brechou/Portfolio"
            target="_blank"
            class="btn-outline"
            >💻 Code source</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  background: rgba(51, 65, 85, 0.5);
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(51, 65, 85, 0.8);
  transition: 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: rgba(6, 182, 212, 0.5);
}

.tag {
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 12px;
  color: white;
}

.btn {
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  padding: 6px 14px;
  border-radius: 8px;
  color: white;
}

.btn-outline {
  border: 1px solid #06b6d4;
  padding: 6px 14px;
  border-radius: 8px;
  color: #06b6d4;
}

.highlight {
  font-size: 13px;
  color: #06b6d4;
}
</style>