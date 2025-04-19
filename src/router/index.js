import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'  // Importa los componentes
import Contact from '../views/Contact.vue'
import Testimonials from '../views/Testimonials.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',  // Ruta para Services
    name: 'Services',
    component: Services
  },
  {
    path: '/contact',   // Ruta para Contact
    name: 'Contact',
    component: Contact
  },
  {
    path: '/testimonials',   // Ruta para Contact
    name: 'Testimonials',
    component: Testimonials
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router