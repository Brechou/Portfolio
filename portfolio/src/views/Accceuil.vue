<script setup></script>

<template>
  <div class="w-full min-h-screen bg-slate-900 overflow-x-hidden">
    <!-- Hero Section -->
    <div
      class="w-full mx-auto relative bg-cover bg-center bg-no-repeat py-20 min-h-screen flex items-center"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <!-- Overlay sombre -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- Effets de lumière -->
      <div
        class="absolute md:-top-24 md:-right-32 sm:-right-[7rem] -right-[1rem] top-0 opacity-20 w-[15%] h-[20%] bg-cyan-500 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute md:-left-[45%] sm:-left-[42%] -left-[40%] opacity-8 w-[50%] h-full my-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"
      ></div>

      <!-- Contenu -->
      <div class="relative w-[90%] max-w-7xl mx-auto h-full flex items-center">
        <div
          class="xl:w-[60%] lg:w-[70%] md:w-[80%] w-full text-white flex flex-col gap-6 justify-center"
        >
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 w-fit"
          >
            <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium text-cyan-300"
              >Disponible pour de nouveaux projets</span
            >
          </div>

          <!-- Titre -->
          <h1
            class="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-semibold text-slate-200"
          >
            Salut, moi c'est
          </h1>

          <h1
            class="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text leading-tight"
          >
            Breton Lokonon
          </h1>

          <!-- Description -->
          <p
            class="lg:text-xl md:text-lg text-base text-slate-300 max-w-2xl leading-relaxed"
          >
            Développeur web fullstack en formation, je développe des
            applications modernes et interactives avec JavaScript (Vue.js,
            Node.js) et Tailwind CSS. Je transforme vos idées en expériences
            digitales exceptionnelles.
          </p>

          <!-- Stats -->
          <div class="flex gap-30 mt-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-cyan-400">5+</div>
              <div class="text-sm text-slate-400">mois d'expérience</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-cyan-400">6+</div>
              <div class="text-sm text-slate-400">Projets réalisés</div>
            </div>
            <!-- <div class="text-center">
              <div class="text-2xl font-bold text-cyan-400">100%</div>
              <div class="text-sm text-slate-400">Satisfaction client</div>
            </div> -->
          </div>

          <!-- Boutons -->
          <div class="flex sm:flex-row flex-col gap-4 mt-8">
            <router-link
              to="/projet"
              class="md:px-8 px-6 md:py-4 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-center"
            >
              Voir mes projets
            </router-link>

            <router-link
              to="/contact"
              class="md:px-8 px-6 md:py-4 py-3 text-lg font-semibold border-2 border-white/30 rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm text-center"
            >
              Me contacter
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Section compétences rapides -->
    <div class="py-20 bg-slate-900">
      <div class="w-[90%] max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">
            Mes compétences principales
          </h2>
          <p class="text-slate-400 text-lg">
            Technologies que j'utilise au quotidien
          </p>
        </div>

        <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          <div
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <div
              class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4"
            >
              <i class="uil uil-vuejs text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Vue.js</h3>
            <p class="text-slate-400 text-sm">
              Framework JavaScript moderne pour des interfaces utilisateur
              réactives
            </p>
          </div>

          <div
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <div
              class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4"
            >
              <i class="uil uil-react text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">JavaScript</h3>
            <p class="text-slate-400 text-sm">
              Langage de programmation essentiel pour le développement web
            </p>
          </div>

          <div
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <div
              class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4"
            >
              <i class="uil uil-palette text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Tailwind CSS</h3>
            <p class="text-slate-400 text-sm">
              Framework CSS utilitaire pour un design rapide et cohérent
            </p>
          </div>

          <div
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <div
              class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4"
            >
              <i class="uil uil-server text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Node.js</h3>
            <p class="text-slate-400 text-sm">
              Environnement d'exécution JavaScript côté serveur
            </p>
          </div>

          <div
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <div
              class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4"
            >
              <i class="uil uil-database text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">MongoDB</h3>
            <p class="text-slate-400 text-sm">
              Base de données NoSQL pour stocker et gérer les données des
              applications
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const bgImage = ref(
  new URL("../asserts/img/portfolio.jpeg", import.meta.url).href,
);
</script>

<style scoped>
/* Animation pour les cartes de compétences */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hover\:scale-105:hover {
  animation: float 3s ease-in-out infinite;
}
</style>
