<template>
  <div class="min-h-screen bg-dark text-white">
    <nav class="fixed top-0 w-full bg-darker z-50">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <a @click="scrollToTop" class="text-primary text-2xl font-bold cursor-pointer">Herul</a>
          <div class="flex gap-6">
            <a @click="scrollToTop" class="hover:text-primary transition-colors cursor-pointer">Home</a>
            <a @click="scrollToSection('about')" class="hover:text-primary transition-colors cursor-pointer">About</a>
            <a @click="scrollToSection('stacks')" class="hover:text-primary transition-colors cursor-pointer">Stacks</a>
            <a @click="scrollToSection('projects')" class="hover:text-primary transition-colors cursor-pointer">Projects</a>
            <a @click="scrollToSection('contact')" class="hover:text-primary transition-colors cursor-pointer">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <div class="flex justify-center flex-col">
        <section class="bg-darker w-full pt-16">
          <Hero />
        </section>

        <section id="about" class="w-full py-20">
          <About />
        </section>

        <section id="stacks" class="w-full py-20">
          <Stacks />
        </section>

        <section id="projects" class="w-full py-20">
          <Projects />
        </section>

        <section id="contact" class="w-full py-20">
          <Contact />
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import Hero from "./components/Hero.vue";
  import About from "./components/About.vue";
  import Contact from "./components/Contact.vue";
import Projects from "./components/Projects.vue";
import Stacks from "./components/Stacks.vue";

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
      top:0,
      behavior: 'smooth'
    })
  }
</script>