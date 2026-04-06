<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
    <div class="container mx-auto flex items-center justify-between h-20 px-6 lg:px-8">
      <router-link to="/" class="flex items-center gap-3">
        <div class="h-11 w-11 rounded-2xl bg-[#003347] grid place-items-center text-white text-lg font-bold">
          P
        </div>
        <div>
          <p class="text-sm font-semibold tracking-[0.24em] text-slate-500 uppercase">Portfolio</p>
          <p class="text-base font-semibold text-slate-900">Breton LOKONON</p>
        </div>
      </router-link>

      <nav class="hidden lg:flex items-center gap-10 text-sm font-medium text-slate-700">
        <router-link to="/" :class="linkClass('/')">Accueil</router-link>
        <router-link to="/competence" :class="linkClass('/competence')">Compétences</router-link>
        <router-link to="/projet" :class="linkClass('/projet')">Projets</router-link>
        <router-link to="/contact" :class="linkClass('/contact')">Contact</router-link>
      </nav>

      <button
        @click="toggleMenu"
        class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 lg:hidden"
        aria-label="Ouvrir le menu mobile"
      >
        <i :class="openMenu ? 'uil uil-multiply' : 'uil uil-bars'" class="text-2xl"></i>
      </button>
    </div>

    <transition name="fade">
      <div v-if="openMenu" class="lg:hidden border-t border-slate-200 bg-white/95 shadow-md">
        <ul class="flex flex-col px-6 py-4 text-slate-700">
          <li class="py-3 border-b border-slate-100">
            <router-link @click="closeMenu" to="/" class="block text-sm font-medium hover:text-[#ff7b02]">Accueil</router-link>
          </li>
          <li class="py-3 border-b border-slate-100">
            <router-link @click="closeMenu" to="/competence" class="block text-sm font-medium hover:text-[#ff7b02]">Compétences</router-link>
          </li>
          <li class="py-3 border-b border-slate-100">
            <router-link @click="closeMenu" to="/projet" class="block text-sm font-medium hover:text-[#ff7b02]">Projets</router-link>
          </li>
          <li class="py-3">
            <router-link @click="closeMenu" to="/contact" class="block text-sm font-medium hover:text-[#ff7b02]">Contact</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const openMenu = ref(false)
const route = useRoute()

function toggleMenu() {
  openMenu.value = !openMenu.value
}

function closeMenu() {
  openMenu.value = false
}

function linkClass(path) {
  return [
    'transition text-sm font-medium',
    route.path === path ? 'text-[#ff7b02]' : 'text-slate-700 hover:text-[#ff7b02]',
  ]
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
