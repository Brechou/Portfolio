import { createRouter, createWebHistory } from 'vue-router'
import Accceuil from '../views/Accceuil.vue'
import Competence from '../views/Competence.vue'
import Projet from '../views/Projet.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accceuil,
  },
  {
    path: '/competence',
    name: 'Competence',
    component: Competence,
  },
  {
    path: '/projet',
    name: 'Projet',
    component: Projet,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
