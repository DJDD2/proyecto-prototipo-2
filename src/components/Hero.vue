<template>
    <section class="container mx-auto px-6 py-20 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Transforma tus ideas en <span class="text-indigo-600">realidad</span>
        </h1>
        <p class="text-xl text-gray-600 mb-10">
          Soluciones innovadoras para impulsar tu negocio en la era digital.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link 
            to="/contact" 
            class="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            Comenzar
          </router-link>
          <router-link 
            to="/services" 
            class="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-all"
          >
            Saber más
          </router-link>
        </div>
      </div>
      
      <div class="mt-16 relative">
        <div class="absolute -inset-8 bg-indigo-100 rounded-3xl blur-lg opacity-30"></div>
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
          alt="Hero image" 
          class="relative rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
          loading="lazy"
        >
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Hero'
  }
  </script>