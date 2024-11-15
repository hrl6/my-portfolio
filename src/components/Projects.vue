<template>
  <h2 class="flex justify-center text-4xl text-primary font-bold mb-8">Projects</h2>
  <div class="flex justify-center gap-12">
    <a 
      v-for="project in projects"
      :href="project.link">
      <div
        :key="project.id"
        class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-110"
      >
        <div class="w-96 h-52">
          <img
            :src="project.thumbnail"
            :alt="project.title"
            class="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div class="text-center text-lg font-semibold truncate bg-gray-200 text-gray-800 rounded-b" :title="project.title">
          {{ project.title }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, title: 'Simple Blog', link: 'https://github.com/hrl6/php-simple-blog', thumbnail: '' },
        { id: 2, title: 'Selain itu', link: '', thumbnail: '' },
      ],
    };
  },
  created() {
    import('../img/project1.png').then((module) => {
      this.projects[0].thumbnail = module.default;
    });
    import('../img/project2.png').then((module) => {
      this.projects[1].thumbnail = module.default;
    });
  },
};
</script>