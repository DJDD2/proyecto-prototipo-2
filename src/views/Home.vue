<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
    <Navbar />
    <Hero />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
   
    Footer
  }
}
</script>