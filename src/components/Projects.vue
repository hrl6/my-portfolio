<template>
  <h2 class="flex justify-center text-4xl text-primary font-bold mb-8">Projects</h2>
  <div class="flex flex-wrap justify-center items-center gap-12 p-12">
    <a v-for="project in projects" target="_blank" :href="project.link">
      <div
        :key="project.id"
        class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-110 group"
      >
        <div class="w-80 sm:w-96 sm:h-52">
          <img
            :src="project.thumbnail"
            :alt="project.title"
            class="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div
          class="text-center text-lg font-semibold truncate bg-gray-200 text-gray-800 rounded-b group-hover:bg-darker duration-300"
          :title="project.title"
        >
          <p class="text-lg group-hover:text-primary">{{ project.title }}</p>
          <p class="text-sm group-hover:text-secondary">{{ project.stacks }}</p>
        </div>
        <p></p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Simple Blog',
          link: 'https://github.com/hrl6/php-simple-blog',
          stacks: 'PHP | MySQL',
          thumbnail: '',
        },
        {
          id: 2,
          title: 'Personal Notes',
          link: 'https://github.com/hrl6/laravel11-notes-personal',
          stacks: 'Laravel | Tailwind CSS',
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
  },
}
</script>
