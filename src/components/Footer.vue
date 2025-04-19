<template>
    <footer class="py-12 bg-gray-900 text-gray-400">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span class="text-xl font-bold text-white">MiApp</span>
            <p class="mt-4">Transformando ideas en soluciones digitales.</p>
          </div>
          <div>
            <h3 class="text-white font-medium mb-4">Enlaces</h3>
            <ul class="space-y-2">
              <li><router-link to="/" class="hover:text-white transition-colors">Inicio</router-link></li>
              <li><router-link to="/services" class="hover:text-white transition-colors">Servicios</router-link></li>
              <li><router-link to="/testimonials" class="hover:text-white transition-colors">Testimonios</router-link></li>
              <li><router-link to="/contact" class="hover:text-white transition-colors">Contacto</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-medium mb-4">Legal</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Términos de servicio</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-medium mb-4">Contacto</h3>
            <p>contacto@miapp.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 MiApp. Todos los derechos reservados.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors">
              <!-- Iconos de redes sociales -->
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>