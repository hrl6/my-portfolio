<template>
  <AnimatedSection>
    <h2 v-slide-in class="flex justify-center text-4xl tracking-wide text-primary font-bold mb-8">Contact</h2>
  </AnimatedSection>
  <AnimatedSectionFade>
    <div class="flex flex-col md:flex-row justify-center items-center gap-6 p-4">
      <!-- WhatsApp -->
      <a v-fade-in href="https://wa.me/60128112302" target="_blank"
        class="w-64 md:w-auto flex items-center space-x-4 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-110 bg-darkers group">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="64" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" class="text-white transition-colors duration-300 group-hover:text-primary"
          stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
        <div>
          <span
            class="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary">WhatsApp</span>
          <p>+6012-811 2302</p>
        </div>
      </a>

      <!-- Gmail -->
      <a v-fade-in href="mailto:hrulhadi@gmail.com" target="_blank"
        class="w-64 md:w-auto flex items-center space-x-4 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-110 bg-darkers group">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="64" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" class="text-white transition-colors duration-300 group-hover:text-primary"
          stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        <div>
          <span
            class="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary">Gmail</span>
          <p>hrulhadi@gmail.com</p>
        </div>
      </a>

      <!-- LinkedIn -->
      <a v-fade-in href="https://linkedin.com/in/hairulmarwan" target="_blank"
        class="w-64 md:w-auto flex items-center space-x-4 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-110 bg-darkers group">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="64" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" class="text-white transition-colors duration-300 group-hover:text-primary"
          stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
        <div>
          <span
            class="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary">LinkedIn</span>
          <p>Hairul Marwan</p>
        </div>
      </a>

      <!-- GitHub -->
      <a v-fade-in href="https://github.com/hrl6" target="_blank"
        class="w-64 md:w-auto flex items-center space-x-4 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-110 bg-darkers group">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="64" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" class="text-white transition-colors duration-300 group-hover:text-primary"
          stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
        <div>
          <span
            class="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary">GitHub</span>
          <p>hairul</p>
        </div>
      </a>
    </div>
  </AnimatedSectionFade>
</template>

<script setup>
import AnimatedSection from './animations/AnimatedSection.vue';
import AnimatedSectionFade from './animations/AnimatedSectionFade.vue';

// # to have diff hover style
// const props = defineProps({
//   whatsappColor: {
//     type: String,
//     default: 'text-green-500'
//   },
//   gmailColor: {
//     type: String,
//     default: 'text-red-500'
//   },
//   linkedinColor: {
//     type: String,
//     default: 'text-blue-500'
//   }
// })
</script>