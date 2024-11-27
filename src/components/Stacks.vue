<template>
  <AnimatedSection>
    <h2 v-slide-in class="flex justify-center text-4xl text-primary font-bold mb-4">Tech Stacks
    </h2>
  </AnimatedSection>
  <AnimatedSectionUp>
    <div class="mx-12">
      <p v-slide-up class="flex justify-center mb-8 italic">"Frameworks may fade, and libraries may lag, but a sharp dev
        brain? That’s forever in beta—always improving!"
      </p>
    </div>
  </AnimatedSectionup>
  <AnimatedSectionFade>
    <div class="animate-slideUp flex justify-center">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        <!-- PHP -->
        <div v-fade-in
          class="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] p-6 bg-darker rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 group">
          <svg class="w-12 h-12 mb-2 text-white group-hover:text-blue-400" viewBox="0 -1 100 50" fill="currentColor">
            <path
              d="m7.579 10.123 14.204 0c4.169 0.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-0.247 1.873-0.795 3.71-1.643 5.512-0.813 1.802-1.943 3.427-3.392 4.876-1.767 1.837-3.657 3.003-5.671 3.498-2.014 0.495-4.099 0.742-6.254 0.742l-6.36 0-2.014 10.07-7.367 0 7.579-38.001 0 0m6.201 6.042-3.18 15.9c0.212 0.035 0.424 0.053 0.636 0.053 0.247 0 0.495 0 0.742 0 3.392 0.035 6.219-0.3 8.48-1.007 2.261-0.742 3.781-3.321 4.558-7.738 0.636-3.71 0-5.848-1.908-6.413-1.873-0.565-4.222-0.83-7.049-0.795-0.424 0.035-0.83 0.053-1.219 0.053-0.353 0-0.724 0-1.113 0l0.053-0.053" />
            <path
              d="m41.093 0 7.314 0-2.067 10.123 6.572 0c3.604 0.071 6.289 0.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649-7.42 0 3.392-16.854c0.353-1.767 0.247-3.021-0.318-3.763-0.565-0.742-1.784-1.113-3.657-1.113l-5.883-0.053-4.346 21.783-7.314 0 7.632-38.054 0 0" />
            <path
              d="m70.412 10.123 14.204 0c4.169 0.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-0.247 1.873-0.795 3.71-1.643 5.512-0.813 1.802-1.943 3.427-3.392 4.876-1.767 1.837-3.657 3.003-5.671 3.498-2.014 0.495-4.099 0.742-6.254 0.742l-6.36 0-2.014 10.07-7.367 0 7.579-38.001 0 0m6.201 6.042-3.18 15.9c0.212 0.035 0.424 0.053 0.636 0.053 0.247 0 0.495 0 0.742 0 3.392 0.035 6.219-0.3 8.48-1.007 2.261-0.742 3.781-3.321 4.558-7.738 0.636-3.71 0-5.848-1.908-6.413-1.873-0.565-4.222-0.83-7.049-0.795-0.424 0.035-0.83 0.053-1.219 0.053-0.353 0-0.724 0-1.113 0l0.053-0.053" />
          </svg>
          <span class="text-white group-hover:text-blue-400 transition-colors duration-300">PHP</span>
        </div>

        <!-- Laravel -->
        <div v-fade-in
          class="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] p-6 bg-darker rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 group">
          <svg class="w-12 h-12 mb-2 text-white group-hover:text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034L5.357.07a.363.363 0 01.364 0l4.828 2.786a.378.378 0 01.188.326v6.093l3.76-2.164V2.974a.378.378 0 01.188-.326L19.513.07a.363.363 0 01.364 0l3.768 2.173c.013.01.026.021.037.031.012.01.025.018.036.029z" />
          </svg>
          <span class="text-white group-hover:text-red-500 transition-colors duration-300">Laravel 11</span>
        </div>

        <!-- MySQL -->
        <div v-fade-in
          class="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] p-6 bg-darker rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 group">
          <svg class="w-12 h-12 mb-2 text-white group-hover:text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.976-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168z" />
          </svg>
          <span class="text-white group-hover:text-blue-500 transition-colors duration-300">MySQL</span>
        </div>

        <!-- Tailwind -->
        <div v-fade-in
          class="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] p-6 bg-darker rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 group">
          <svg class="w-12 h-12 mb-2 text-white group-hover:text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
          <span class="text-white group-hover:text-cyan-400 transition-colors duration-300">Tailwind</span>
        </div>

        <!-- JavaScript -->
        <div v-fade-in
          class="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] p-6 bg-darker rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 group">
          <svg class="w-12 h-12 mb-2 text-white group-hover:text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
          </svg>
          <span class="text-white group-hover:text-yellow-400 transition-colors duration-300">JavaScript</span>
        </div>

        <!-- Vue.js -->
        <div v-fade-in
          class="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] p-6 bg-darker rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 group">
          <svg class="w-12 h-12 mb-2 text-white group-hover:text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
          </svg>
          <span class="text-white group-hover:text-green-500 transition-colors duration-300">Vue.js</span>
        </div>

        <!-- HTML -->
        <div v-fade-in
          class="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] p-6 bg-darker rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 group">
          <svg class="w-12 h-12 mb-2 text-white group-hover:text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
          </svg>
          <span class="text-white group-hover:text-orange-500 transition-colors duration-300">HTML</span>
        </div>

        <!-- CSS -->
        <div v-fade-in
          class="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] p-6 bg-darker rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 group">
          <svg class="w-12 h-12 mb-2 text-white group-hover:text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
          </svg>
          <span class="text-white group-hover:text-blue-500 transition-colors duration-300">CSS</span>
        </div>
      </div>
    </div>
  </AnimatedSectionFade>
</template>

<script setup>
import AnimatedSection from './animations/AnimatedSection.vue'
import AnimatedSectionFade from './animations/AnimatedSectionFade.vue';
import AnimatedSectionUp from './animations/AnimatedSectionUp.vue';
</script>