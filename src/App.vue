<template>
  <div class="min-h-screen bg-dark text-white">
    <!-- TOP NAV -->
    <nav
      :class="`fixed top-0 w-3/4 sm:w-[600px] mt-8 mx-auto left-0 right-0 bg-dark rounded-2xl z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-[160%]'}`">
      <div class="w-full mx-auto px-12 py-4">
        <div class="flex justify-between items-center">
          <!-- logo -->
          <a @click="scrollToTop"
            class="hidden sm:block text-primary text-2xl font-bold cursor-pointer transition-all hover:scale-105">
            Herul.
          </a>

          <!-- desktop nav -->
          <div class="hidden md:flex gap-6">
            <a @click="scrollToTop" class="hover:text-primary transition-colors cursor-pointer hover:scale-105">
              Home
            </a>
            <a @click="scrollToSection('about')"
              class="hover:text-primary transition-colors cursor-pointer hover:scale-105">
              About
            </a>
            <a @click="scrollToSection('stacks')"
              class="hover:text-primary transition-colors cursor-pointer hover:scale-105">
              Stacks
            </a>
            <a @click="scrollToSection('projects')"
              class="hover:text-primary transition-colors cursor-pointer hover:scale-105">
              Projects
            </a>
            <a @click="scrollToSection('contact')"
              class="hover:text-primary transition-colors cursor-pointer hover:scale-105">
              Contact
            </a>
          </div>

          <!-- mobile nav icons -->
          <div class="md:hidden flex gap-6">
            <HomeIcon @click="handleMobileClick('top')"
              class="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <UserIcon @click="handleMobileClick('about')"
              class="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <LayersIcon @click="handleMobileClick('stacks')"
              class="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <FolderIcon @click="handleMobileClick('projects')"
              class="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <MailIcon @click="handleMobileClick('contact')"
              class="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>

    <main>
      <div class="flex justify-center flex-col">
        <div>
          <section class="bg-darker w-full pt-24 md:pt-16">
            <Hero />
          </section>
        </div>

        <div>
          <section id="about" class="w-full py-16 md:py-20">
            <About />
          </section>
        </div>

        <div>
          <section id="stacks" class="w-full py-16 md:py-20">
            <Stacks />
          </section>
        </div>

        <div>
          <section id="projects" class="w-full py-16 md:py-20">
            <Projects />
          </section>
        </div>

        <div>
          <section id="contact" class="w-full py-16 md:py-20">
            <Contact />
          </section>
        </div>
      </div>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Hero from "./components/Hero.vue"
import About from "./components/About.vue"
import Contact from "./components/Contact.vue"
import Projects from "./components/Projects.vue"
import Stacks from "./components/Stacks.vue"
import Footer from "./components/Footer.vue"
import {
  Home as HomeIcon,
  User as UserIcon,
  Layers as LayersIcon,
  Folder as FolderIcon,
  Mail as MailIcon
} from 'lucide-vue-next'

const isVisible = ref(true)
let lastScrollPosition = 0

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
  if (target === 'top') {
    scrollToTop()
  } else {
    scrollToSection(target)
  }
}

const handleScroll = () => {
  const currentScrollPosition = window.scrollY

  // hide/show animation nav bar once scrolled
  if (currentScrollPosition < lastScrollPosition) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }

  lastScrollPosition = currentScrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>