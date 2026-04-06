<script setup></script>

<template>
<section id="skills" class="py-16 bg-slate-900">

  <!-- Title -->
  <div class="text-center mb-12">
    <h2 class="text-white text-3xl sm:text-5xl font-black">
      MES COMPÉTENCES
    </h2>
    <p class="text-slate-400 mt-3">
      Des compétences construites à travers des projets concrets
    </p>
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 max-w-6xl mx-auto">

    <!-- FRONTEND -->
    <div class="skill-card">
      <h3 class="text-white text-xl font-bold">Frontend Development</h3>

      <p class="text-slate-400 text-sm mt-2">
        Création d’interfaces modernes, responsives et optimisées pour une bonne expérience utilisateur.
      </p>

      <div class="flex flex-wrap gap-2 mt-4">
        <span class="tag">HTML</span>
        <span class="tag">CSS</span>
        <span class="tag">JavaScript</span>
      </div>

      <p class="project-ref mt-4">
        🔗 Projets : Portfolio personnel, landing pages modernes
      </p>
    </div>

    <!-- BACKEND / DATABASE -->
    <div class="skill-card">
      <h3 class="text-white text-xl font-bold">Backend & Database</h3>

      <p class="text-slate-400 text-sm mt-2">
        Gestion des données et création de bases de données pour des applications web.
      </p>

      <div class="flex flex-wrap gap-2 mt-4">
        <span class="tag">MongoDB</span>
        <span class="tag">Node.js (bases)</span>
      </div>

      <p class="project-ref mt-4">
        🔗 Projets : Quiz app avec base de données
      </p>
    </div>

    <!-- TOOLS -->
    <div class="skill-card">
      <h3 class="text-white text-xl font-bold">Tools & Workflow</h3>

      <p class="text-slate-400 text-sm mt-2">
        Utilisation d’outils modernes pour développer, versionner et déployer des projets.
      </p>

      <div class="flex flex-wrap gap-2 mt-4">
        <span class="tag">Git</span>
        <span class="tag">GitHub</span>
        <span class="tag">VS Code</span>
      </div>

      <p class="project-ref mt-4">
        🔗 Projets : Tous mes projets sont versionnés sur GitHub
      </p>
    </div>

    <!-- UI/UX -->
    <div class="skill-card">
      <h3 class="text-white text-xl font-bold">UI / UX Design</h3>

      <p class="text-slate-400 text-sm mt-2">
        Conception d’interfaces simples, modernes et orientées utilisateur.
      </p>

      <div class="flex flex-wrap gap-2 mt-4">
        <span class="tag">Figma (bases)</span>
        <span class="tag">Design responsive</span>
      </div>

      <p class="project-ref mt-4">
        🔗 Projets : Design de portfolio et interfaces web
      </p>
    </div>

  </div>

</section>
</template>

<style scoped>
.skill-card {
  background: rgba(51, 65, 85, 0.5);
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(51, 65, 85, 0.8);
  transition: 0.3s;
}

.skill-card:hover {
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

.project-ref {
  font-size: 13px;
  color: #06B6D4;
}
</style>