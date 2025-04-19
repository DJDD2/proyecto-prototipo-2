<!-- src/views/Testimonials.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
   <!-- Navbar -->

   <Navbar />

   
  <section class="px-4 py-16 bg-gradient-to-b from-blue-50 to-white">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
        Testimonios de Nuestros Clientes
      </h1>
      <div class="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
        >
          <img
            :src="testimonial.image"
            alt="Foto de {{ testimonial.name }}"
            class="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-500"
          />
          <p class="text-gray-700 italic mb-4">
            "{{ testimonial.message }}"
          </p>
          <h3 class="text-blue-800 font-semibold">{{ testimonial.name }}</h3>
          <span class="text-sm text-gray-500">{{ testimonial.role }}</span>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <Footer />
</div>

</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'


const testimonials = [
  {
    name: "Juan Pérez",
    role: "CEO de Innovatech",
    message: "Excelente servicio, mi empresa creció enormemente gracias a sus estrategias.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "María López",
    role: "Fundadora de EcoVida",
    message: "El equipo de BusinessPro me ayudó a optimizar procesos clave en mi empresa.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Martínez",
    role: "Director de Marketing en GlobalReach",
    message: "Un servicio increíble. Muy profesionales y siempre a la vanguardia.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  // Puedes seguir agregando más testimonios aquí
];

</script>

<style scoped>
/* Puedes agregar animaciones personalizadas aquí si lo deseas */
</style>
