<script setup></script>

<template>
<section id="projects" class="py-16 bg-slate-900">

  <!-- Title -->
  <div class="text-center mb-12">
    <h2 class="text-white text-3xl sm:text-5xl font-black">
      MES PROJETS
    </h2>
    <p class="text-slate-400 mt-3">
      Des projets concrets qui montrent ce que je peux créer
    </p>
  </div>

  <!-- GRID -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 max-w-6xl mx-auto">

    <!-- PROJECT 1 -->
    <div class="project-card">
      <img src="" class="rounded-xl mb-4" />

      <h3 class="text-white font-bold text-xl">
        Portfolio Développeur
      </h3>

      <p class="text-slate-400 text-sm mt-2">
        Création d’un portfolio moderne pour présenter mes compétences et projets avec un design responsive et interactif.
      </p>

      <p class="highlight mt-2">
        🎯 Objectif : me rendre visible et attirer des opportunités
      </p>

      <div class="flex gap-2 mt-3 flex-wrap">
        <span class="tag">HTML</span>
        <span class="tag">CSS</span>
        <span class="tag">JavaScript</span>
      </div>

      <div class="flex gap-4 mt-4">
        <a href="#" class="btn">Voir le site</a>
        <a href="#" class="btn-outline">Code</a>
      </div>
    </div>

    <!-- PROJECT 2 -->
    <div class="project-card">
      <img src="" class="rounded-xl mb-4" />

      <h3 class="text-white font-bold text-xl">
        Application de Quiz (MongoDB)
      </h3>

      <p class="text-slate-400 text-sm mt-2">
        Développement d’une application de quiz avec gestion des questions et stockage des données.
      </p>

      <p class="highlight mt-2">
        ⚡ Fonctionnalité : base de données dynamique + logique interactive
      </p>

      <div class="flex gap-2 mt-3 flex-wrap">
        <span class="tag">JavaScript</span>
        <span class="tag">MongoDB</span>
        <span class="tag">Node.js</span>
      </div>

      <div class="flex gap-4 mt-4">
        <a href="#" class="btn">Voir le projet</a>
        <a href="#" class="btn-outline">Code</a>
      </div>
    </div>

    <!-- PROJECT 3 -->
    <div class="project-card">
      <img src="" class="rounded-xl mb-4" />

      <h3 class="text-white font-bold text-xl">
        Landing Pages Modernes
      </h3>

      <p class="text-slate-400 text-sm mt-2">
        Création de pages web optimisées pour la conversion avec un design moderne et responsive.
      </p>

      <p class="highlight mt-2">
        🚀 Focus : design attractif + expérience utilisateur
      </p>

      <div class="flex gap-2 mt-3 flex-wrap">
        <span class="tag">HTML</span>
        <span class="tag">CSS</span>
        <span class="tag">Responsive</span>
      </div>

      <div class="flex gap-4 mt-4">
        <a href="#" class="btn">Voir le site</a>
        <a href="#" class="btn-outline">Code</a>
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
  background: linear-gradient(135deg, #06B6D4, #0891B2);
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 12px;
  color: white;
}

.btn {
  background: linear-gradient(135deg, #06B6D4, #0891B2);
  padding: 6px 14px;
  border-radius: 8px;
  color: white;
}

.btn-outline {
  border: 1px solid #06B6D4;
  padding: 6px 14px;
  border-radius: 8px;
  color: #06B6D4;
}

.highlight {
  font-size: 13px;
  color: #06B6D4;
}
</style>