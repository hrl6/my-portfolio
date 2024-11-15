<template>
  <div class="min-h-screen bg-dark text-white">
    <!-- TOP NAV -->
    <nav class="fixed top-0 w-screen bg-darker z-50">
      <div class="w-full md:w-5/6 mx-auto px-10 md:px-4 py-6">
        <div class="flex justify-between items-center">
          <!-- logo -->
          <a @click="scrollToTop" class="text-primary text-2xl font-bold cursor-pointer transition-all hover:scale-105">
            Herul.
          </a>

          <!-- desktop nav -->
          <div class="hidden md:flex gap-6">
            <a @click="scrollToTop" class="hover:text-primary transition-colors cursor-pointer hover:font-medium">Home</a>
            <a @click="scrollToSection('about')" class="hover:text-primary transition-colors cursor-pointer hover:font-medium">About</a>
            <a @click="scrollToSection('stacks')" class="hover:text-primary transition-colors cursor-pointer hover:font-medium">Stacks</a>
            <a @click="scrollToSection('projects')" class="hover:text-primary transition-colors cursor-pointer hover:font-medium">Projects</a>
            <a @click="scrollToSection('contact')" class="hover:text-primary transition-colors cursor-pointer hover:font-medium">Contact</a>
          </div>

          <!-- mobile nav -->
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="md:hidden p-2 text-white"
          >
            <svg 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                v-if="!isMenuOpen" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- mobile menu -->
        <div 
          v-show="isMenuOpen" 
          class="md:hidden"
        >
          <div class="flex flex-col px-2 pt-2 pb-3 gap-2">
            <a @click="handleMobileClick('top')" class="text-end block px-3 py-2 text-white hover:text-primary transition-colors cursor-pointer hover:font-medium">Home</a>
            <a @click="handleMobileClick('about')" class="text-end block px-3 py-2 text-white hover:text-primary transition-colors cursor-pointer hover:font-medium">About</a>
            <a @click="handleMobileClick('stacks')" class="text-end block px-3 py-2 text-white hover:text-primary transition-colors cursor-pointer hover:font-medium">Stacks</a>
            <a @click="handleMobileClick('projects')" class="text-end block px-3 py-2 text-white hover:text-primary transition-colors cursor-pointer hover:font-medium">Projects</a>
            <a @click="handleMobileClick('contact')" class="text-end block px-3 py-2 text-white hover:text-primary transition-colors cursor-pointer hover:font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <div class="flex justify-center flex-col">
        <section class="bg-darker w-full pt-24 md:pt-16">
          <Hero />
        </section>

        <section id="about" class="w-full py-16 md:py-20">
          <About />
        </section>

        <section id="stacks" class="w-full py-16 md:py-20">
          <Stacks />
        </section>

        <section id="projects" class="w-full py-16 md:py-20">
          <Projects />
        </section>

        <section id="contact" class="w-full py-16 md:py-20">
          <Contact />
        </section>
      </div>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Hero from "./components/Hero.vue"
import About from "./components/About.vue"
import Contact from "./components/Contact.vue"
import Projects from "./components/Projects.vue"
import Stacks from "./components/Stacks.vue"
import Footer from "./components/Footer.vue"

const isMenuOpen = ref(false)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleMobileClick = (target) => {
  isMenuOpen.value = false
  if (target === 'top') {
    scrollToTop()
  } else {
    scrollToSection(target)
  }
}
</script>