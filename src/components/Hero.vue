<template>
  <AnimatedSection :delay="200">
    <div class="flex flex-wrap justify-center items-center p-16 lg:p-40 gap-20">
      <div>
        <h1 v-slide-in class="text-5xl md:text-6xl font-extrabold">Hai!</h1>
        <h1 v-slide-in class="text-5xl md:text-6xl font-extrabold">I'm Hairul Marwan.</h1>
        <h1 v-slide-in class="text-5xl md:text-6xl font-extrabold text-primary">Full-Stack Developer</h1>
      </div>
      <div class="w-80 sm:min-w-96">
        <img src="../img/pet-rock.png" alt="Batu :D">
      </div>
    </div>
  </AnimatedSection>
</template>

<script setup>
import AnimatedSection from './animations/AnimatedSection.vue'
</script>