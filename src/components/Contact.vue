<template>
  <h2 class="flex justify-center text-4xl text-primary font-bold mb-8">Contact</h2>
  <div class="flex justify-center items-center gap-6 p-4">
    <!-- WhatsApp -->
    <a 
      href="https://wa.me/60128112302" 
      class="flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-110 bg-darkers group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        class="text-white transition-colors duration-300 group-hover:text-primary"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </svg>
      <div>
        <span class="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary">WhatsApp</span>
        <p>+6012-811 2302</p>
      </div>
    </a>

    <!-- Gmail -->
    <a 
      href="mailto:hrulhadi@gmail.com"
      class="flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-110 bg-darkers group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        class="text-white transition-colors duration-300 group-hover:text-primary"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
      <div>
        <span class="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary">Gmail</span>
        <p>hrulhadi@gmail.com</p>
      </div>
    </a>

    <!-- LinkedIn -->
    <a
      href="https://linkedin.com/in/hairulmarwan" 
      class="flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-110 bg-darkers group"
    >
      <svg
      xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        class="text-white transition-colors duration-300 group-hover:text-primary"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
      <div>
        <span class="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary">LinkedIn</span>
        <p>Hairul Marwan</p>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  whatsappColor: {
    type: String,
    default: 'text-green-500'
  },
  gmailColor: {
    type: String,
    default: 'text-red-500'
  },
  linkedinColor: {
    type: String,
    default: 'text-blue-500'
  }
})
</script>