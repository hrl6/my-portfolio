<template>
  <AnimatedSection :delay="200">
    <div class="flex flex-wrap justify-center items-center px-14 py-14 sm:py-24 lg:py-44 gap-20">
      <div>
        <h1 v-slide-in class="font-raleway text-5xl md:text-6xl font-extrabold tracking-wider">Hai!</h1>
        <h1 v-slide-in class="font-raleway text-5xl md:text-6xl font-extrabold tracking-wider">I'm Hairul Marwan.</h1>
        <h1 v-slide-in class="font-raleway text-5xl md:text-6xl font-[900] tracking-wider text-primary">Full-Stack
          Developer</h1>
        <a href="https://drive.google.com/file/d/1tIIUh-5iYUtIa-IqfDUdfZPQaV5gcwxf/view?usp=sharing" target="_blank"
          class="flex justify-center gap-2 transition-all duration-200 ease-in group mt-6 px-6 py-3 bg-dark hover:bg-stone-900/60 hover:border-primary/50 border-[1px] hover:text-primary/90 border-gray-400/50 rounded-lg max-w-60 ">
          <DownloadIcon class="text-primary group-hover:text-white" /> Download Resume
        </a>
      </div>
      <div class="w-60 sm:w-80">
        <img src="../img/pet-rock.png" alt="Batu :D">
      </div>
    </div>
  </AnimatedSection>
</template>

<script setup>
import AnimatedSection from './animations/AnimatedSection.vue'
import {
  Download as DownloadIcon,
} from 'lucide-vue-next'
</script>