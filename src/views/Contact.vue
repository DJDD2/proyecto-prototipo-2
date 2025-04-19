<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contáctanos</h1>
        <p class="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fade-in-up">
          Estamos aquí para responder tus preguntas y ayudarte con tus proyectos
        </p>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
    </section>

    <!-- Contact Form and Info -->
    <section class="container mx-auto px-6 py-16 -mt-8">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Contact Form -->
        <div class="lg:w-1/2">
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-gray-700 font-medium mb-2">Nombre completo</label>
                <input 
                  id="name" 
                  type="text" 
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Tu nombre"
                >
                <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
              </div>

              <div>
                <label for="email" class="block text-gray-700 font-medium mb-2">Correo electrónico</label>
                <input 
                  id="email" 
                  type="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="tu@email.com"
                >
                <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
              </div>

              <div>
                <label for="phone" class="block text-gray-700 font-medium mb-2">Teléfono (opcional)</label>
                <input 
                  id="phone" 
                  type="tel" 
                  v-model="form.phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="+1 (123) 456-7890"
                >
              </div>

              <div>
                <label for="subject" class="block text-gray-700 font-medium mb-2">Asunto</label>
                <select 
                  id="subject" 
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="" disabled selected>Selecciona un asunto</option>
                  <option value="general">Consulta general</option>
                  <option value="services">Información sobre servicios</option>
                  <option value="support">Soporte técnico</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  v-model="form.message"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Describe tu consulta o proyecto..."
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
              </div>

              <div class="flex items-center">
                <input 
                  id="privacy" 
                  type="checkbox" 
                  v-model="form.privacy"
                  required
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                >
                <label for="privacy" class="ml-2 block text-sm text-gray-700">
                  Acepto la <a href="#" class="text-blue-600 hover:underline">política de privacidad</a>
                </label>
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Enviar mensaje</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              </button>
            </form>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="lg:w-1/2">
          <div class="bg-white rounded-xl shadow-lg p-8 h-full">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Información de contacto</h2>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Teléfono</h3>
                  <p class="mt-1 text-gray-600">+1 (555) 123-4567</p>
                  <p class="mt-1 text-gray-600">Lunes a Viernes: 9am - 6pm</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Correo electrónico</h3>
                  <p class="mt-1 text-gray-600">contacto@empresa.com</p>
                  <p class="mt-1 text-gray-600">soporte@empresa.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Oficina principal</h3>
                  <p class="mt-1 text-gray-600">123 Calle Principal</p>
                  <p class="mt-1 text-gray-600">Ciudad, Estado 12345</p>
                  <p class="mt-1 text-gray-600">País</p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Horario de atención</h3>
              <ul class="space-y-3">
                <li class="flex justify-between">
                  <span class="text-gray-600">Lunes - Viernes</span>
                  <span class="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li class="flex justify-between">
                  <span class="text-gray-600">Sábado</span>
                  <span class="font-medium">10:00 AM - 2:00 PM</span>
                </li>
                <li class="flex justify-between">
                  <span class="text-gray-600">Domingo</span>
                  <span class="font-medium">Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Google Maps Embed -->
      <div class="mt-16 rounded-xl overflow-hidden shadow-lg">
        <iframe 
          
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115303.40979513043!2d-101.06257927324675!3d25.430520957411247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86880d9078df19ef%3A0xa9519241794730c0!2sSaltillo%2C%20Coah.!5e0!3m2!1ses!2smx!4v1745093069224!5m2!1ses!2smx" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'
export default {
  name: 'Contact',
  components: { Navbar, Footer,Hero },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false
      },
      errors: {},
      isSubmitting: false
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      let isValid = true

      if (!this.form.name.trim()) {
        this.errors.name = 'El nombre es requerido'
        isValid = false
      }

      if (!this.form.email.trim()) {
        this.errors.email = 'El correo electrónico es requerido'
        isValid = false
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = 'Ingresa un correo electrónico válido'
        isValid = false
      }

      if (!this.form.message.trim()) {
        this.errors.message = 'El mensaje es requerido'
        isValid = false
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = 'El mensaje debe tener al menos 10 caracteres'
        isValid = false
      }

      if (!this.form.privacy) {
        this.errors.privacy = 'Debes aceptar la política de privacidad'
        isValid = false
      }

      return isValid
    },
    async submitForm() {
      if (!this.validateForm()) return

      this.isSubmitting = true

      try {
        // Aquí iría la lógica para enviar el formulario
        // Por ejemplo: await axios.post('/api/contact', this.form)
        
        // Simulamos un retraso de red
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Mostrar mensaje de éxito
        this.$notify({
          title: 'Mensaje enviado',
          text: 'Gracias por contactarnos. Te responderemos pronto.',
          type: 'success'
        })

        // Resetear formulario
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          privacy: false
        }
      } catch (error) {
        this.$notify({
          title: 'Error',
          text: 'Hubo un problema al enviar tu mensaje. Por favor inténtalo de nuevo más tarde.',
          type: 'error'
        })
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style>
/* Animaciones personalizadas */
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
</style>