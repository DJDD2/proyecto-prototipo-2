<template>
  <nav class="bg-white shadow-lg">
    <div class="container mx-auto px-6 py-3">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold text-indigo-600">
          MiApp
        </router-link>
        <div class="hidden md:flex space-x-8">
          <router-link 
            to="/" 
            class="text-gray-800 hover:text-indigo-600 transition-colors"
            active-class="text-indigo-600 font-medium"
          >
            Inicio
          </router-link>
          <router-link 
            to="/services" 
            class="text-gray-800 hover:text-indigo-600 transition-colors"
            active-class="text-indigo-600 font-medium"
          >
            Servicios
          </router-link>
          <router-link 
            to="/testimonials" 
            class="text-gray-800 hover:text-indigo-600 transition-colors"
            active-class="text-indigo-600 font-medium"
          >
            Testimonios
          </router-link>
          <router-link 
            to="/contact" 
            class="text-gray-800 hover:text-indigo-600 transition-colors"
            active-class="text-indigo-600 font-medium"
          >
            Contacto
          </router-link>
        </div>
        <button class="md:hidden focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>