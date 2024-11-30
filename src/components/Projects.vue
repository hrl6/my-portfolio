<template>
  <AnimatedSection>
    <h2 v-slide-in class="flex justify-center text-4xl tracking-wide text-primary font-bold mb-8">Projects</h2>
  </AnimatedSection>
  <AnimatedSectionUp>
    <div v-slide-up class="flex flex-wrap justify-center items-stretch gap-12 p-6 sm:p-12">
      <a v-for="project in projects" target="_blank" :href="project.link">
        <div v-slide-up :key="project.id"
          class="max-w-[39rem] bg-darker rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-110 group p-3 sm:p-6">
          <div class="w-auto sm:w-[36rem] sm:h-[22rem] rounded-md overflow-hidden">
            <img :src="project.thumbnail" :alt="project.title"
              class="w-full h-full object-cover transition-all ease-in-out duration-500 group-hover:scale-110" />
          </div>
          <div class="flex sm:justify-between md:items-end gap-4 md:gap-24 flex-col md:flex-row">
            <div class="text-lg font-semibold truncate text-gray-100 group-hover:bg-darker duration-300"
              :title="project.title">
              <p class="text-[1.6rem] pt-6 pb-4 group-hover:text-primary transition-all ease-in duration-300">
                {{ project.title }}
              </p>
              <div v-if="Array.isArray(project.stacks)" class="flex flex-wrap gap-2">
                <p v-for="stack in project.stacks"
                  class="text-[0.8rem] transition-all duration-300 ease-in py-1 px-4 text-neutral-400 hover:text-white bg-dark hover:bg-gray-400/50 border-[1px] border-gray-400/50 rounded-md">
                  {{
                    stack }}</p>
              </div>
              <p v-else :d="stacks" class="text-sm hover:text-secondary">{{ project.stacks }}</p>
            </div>
            <template v-if="project.demo != ''">
              <div class="flex gap-3">
                <a :href="project.link">
                  <div
                    class="bg-primary p-3 rounded-md max-w-[49px] hover:bg-primary/80 transition-colors ease-in duration-200">
                    <MoveUpRight class="text-dark" />
                  </div>
                </a>
                <a :href="project.demo">
                  <div
                    class="bg-gray-600 p-3 rounded-md max-w-[49px] hover:bg-dark/50 transition-colors ease-in duration-200">
                    <Radio class="text-neutral-300" />
                  </div>
                </a>
              </div>
            </template>
            <template v-else>
              <a :href="project.link">
                <div
                  class="bg-primary p-3 rounded-md max-w-[49px] hover:bg-primary/80 transition-colors ease-in duration-200">
                  <MoveUpRight class="text-dark" />
                </div>
              </a>
            </template>

            <!-- <div
              class="bg-primary p-3 rounded-md max-w-[49px] hover:bg-primary/80 transition-colors ease-in duration-200">
              <MoveUpRight class="text-dark" />
            </div> -->
          </div>
        </div>
      </a>
    </div>
  </AnimatedSectionUp>
</template>

<script setup>
import AnimatedSection from './animations/AnimatedSection.vue';
import AnimatedSectionUp from './animations/AnimatedSectionUp.vue';
import { MoveUpRight } from 'lucide-vue-next'
import { Radio } from 'lucide-vue-next';
</script>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Deen Blog',
          link: 'https://github.com/hrl6/php-simple-blog',
          stacks: ['PHP', 'CSS', 'MySQL'],
          demo: '',
          thumbnail: '',
        },
        {
          id: 2,
          title: 'Personal Notes',
          link: 'https://github.com/hrl6/laravel11-notes-personal',
          stacks: ['Laravel', 'Tailwind CSS', 'SQLite'],
          demo: '',
          thumbnail: '',
        },
        {
          id: 3,
          title: 'Simple Admin Panel',
          link: 'https://github.com/hrl6/admin-panel',
          stacks: ['Vue', 'Django', 'PostgreSQL', 'Tailwind CSS', 'Deployment'],
          demo: 'https://admin-panel-delta-rouge.vercel.app',
          thumbnail: '',
        },
      ],
    }
  },
  created() {
    import('../img/project1.png').then((module) => {
      this.projects[0].thumbnail = module.default
    })
    import('../img/project2.png').then((module) => {
      this.projects[1].thumbnail = module.default
    })
    import('../img/project3.png').then((module) => {
      this.projects[2].thumbnail = module.default
    })
  },
}
</script>
