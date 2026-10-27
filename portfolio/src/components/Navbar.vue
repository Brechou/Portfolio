<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-[#293849] bg-[rgba(15,23,32,0.9)] backdrop-blur">
    <div class="mx-auto flex h-20 w-full max-w-[920px] items-center justify-between px-6">
      <router-link to="/" class="flex items-center gap-3">
        <div class="grid h-11 w-11 place-items-center rounded-2xl border border-[rgba(46,230,208,0.28)] bg-[rgba(46,230,208,0.12)] text-lg font-bold text-[#2ee6d0]">
          P
        </div>
        <div>
          <p class="text-sm font-semibold tracking-[0.24em] text-[#7890a8] uppercase">Portfolio</p>
          <p class="text-base font-semibold text-[#f1f5f9]">Breton LOKONON</p>
        </div>
      </router-link>

      <nav class="hidden lg:flex items-center gap-10 text-sm font-medium">
        <router-link to="/" :class="linkClass('/')">Accueil</router-link>
        <router-link to="/competence" :class="linkClass('/competence')">Compétences</router-link>
        <router-link to="/projet" :class="linkClass('/projet')">Projets</router-link>
        <router-link to="/contact" :class="linkClass('/contact')">Contact</router-link>
      </nav>

      <button
        @click="toggleMenu"
        class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#293849] bg-[#18232f] text-[#a9c5e3] transition hover:border-[#2ee6d0] hover:text-[#2ee6d0] lg:hidden"
        aria-label="Ouvrir le menu mobile"
      >
        <i :class="openMenu ? 'uil uil-multiply' : 'uil uil-bars'" class="text-2xl"></i>
      </button>
    </div>

    <transition name="fade">
      <div v-if="openMenu" class="lg:hidden border-t border-[#293849] bg-[rgba(15,23,32,0.95)]">
        <ul class="mx-auto flex w-full max-w-[920px] flex-col px-6 py-4 text-[#a9c5e3]">
          <li class="py-3 border-b border-[#293849]">
            <router-link @click="closeMenu" to="/" class="block text-sm font-medium transition hover:text-[#2ee6d0]">Accueil</router-link>
          </li>
          <li class="py-3 border-b border-[#293849]">
            <router-link @click="closeMenu" to="/competence" class="block text-sm font-medium transition hover:text-[#2ee6d0]">Compétences</router-link>
          </li>
          <li class="py-3 border-b border-[#293849]">
            <router-link @click="closeMenu" to="/projet" class="block text-sm font-medium transition hover:text-[#2ee6d0]">Projets</router-link>
          </li>
          <li class="py-3">
            <router-link @click="closeMenu" to="/contact" class="block text-sm font-medium transition hover:text-[#2ee6d0]">Contact</router-link>
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
    route.path === path ? 'text-[#2ee6d0]' : 'text-[#a9c5e3] hover:text-[#2ee6d0]',
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
