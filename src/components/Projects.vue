<template>
  <h2 class="flex justify-center text-4xl text-primary font-bold mb-8">Projects</h2>
  <!-- 
  <div>
    <div> 
      <img src="" alt="will-fit-this-div">
    </div>
    <p>small text title of the projects with hidden overflow effect</p>
  </div> -->
  <!-- <div class="projects-container">
    <div v-for="project in projects" :key="project.id" class="project-box">
      <img :src="project.thumbnail" :alt="project.title" class="project-thumbnail" />   
      <div class="project-title" :title="project.title">
        {{ project.title }}
      </div>
    </div>
  </div> -->
  <div class="flex justify-center gap-6">
    <div
      v-for="project in projects"
      :key="project.id"
      class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <div class="w-96 h-52">
        <img
          :src="project.thumbnail"
          :alt="project.title"
          class="w-full h-full object-cover rounded-md"
        />
      </div>
      <div class="text-center text-lg font-semibold truncate bg-gray-200 text-gray-800 rounded-b" :title="project.title">
        {{ project.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, title: 'Simple Blog', thumbnail: '' },
        { id: 2, title: 'Selain itu', thumbnail: '' },
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


<!-- no scoped here to avoid error -->
<!-- <style lang="postcss"> 
.projects-container {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6;
}

.project-box {
  @apply bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out;
  border-radius: 12px;
}

.project-thumbnail {
  @apply w-full h-40 object-cover rounded-md;
}

.project-title {
  @apply mt-4 text-lg font-semibold truncate;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
</style> -->