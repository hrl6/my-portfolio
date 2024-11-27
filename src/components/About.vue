<template>
  <div class="max-w-6xl mx-auto px-4">

    <div class="flex justify-center flex-col items-center">
      <h2 v-slide-in class="animate-slideInFromLeft flex justify-center text-4xl text-primary font-bold mb-2">About Me
      </h2>
      <!-- text-4xl font-semibold text-white relative pt-2 -->
      <AnimatedSectionUp :delay="200">
        <span v-slide-up class="delay-300 text-3xl font-semibold text-white">
          {{ displayText }}<span class="text-primary inline-block w-[4px] h-8 bg-current ml-0.5 -mb-0.5"
            :class="{ 'animate-blink': isTyping }"></span>
          <span> Developer</span>
        </span>
      </AnimatedSectionUp>
    </div>
    <div class="flex flex-col lg:flex-row items-center lg:gap-8">
      <div class="w-96 md:min-w-96">
        <img src="../img/coding-green.png" alt="Coding Typing">
      </div>
      <div v-slide-up>
        <div class="px-10">
          <p class="text-lg text-white mb-4">
            Salam! I’m Hairul Marwan, a self-taught full-stack developer from Sabah, Malaysia. I enjoy working on both
            the frontend and backend. From crafting smooth, interactive user interfaces to building the logic that
            powers everything behind the scenes, I love the balance of both sides and the challenge of making them work
            together seamlessly.
          </p>
          <p class="text-lg text-white">
            When I’m not coding, you can find me learning something new or experimenting with a project that pushes my
            skills <span class="italic">(or I might be reading something •ᴗ•)</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AnimatedSection from './animations/AnimatedSection.vue';
import AnimatedSectionUp from './animations/AnimatedSectionUp.vue';


const title = ['Full-Stack', 'Self-Taught']
const displayText = ref('')
const isTyping = ref(true)
const currentTitleIndex = ref(0)

let timeoutId

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const typeNextCharacter = async () => {
  const currentTitle = title[currentTitleIndex.value]

  // loop forward title index
  for (let i = 0; i <= currentTitle.length; i++) {
    displayText.value = currentTitle.slice(0, i)
    await sleep(Math.random() * (150 - 50) + 50) //random char output delay
  }

  await sleep(2000)

  // loop backward
  for (let i = currentTitle.length; i >= 0; i--) {
    displayText.value = currentTitle.slice(0, i)
    await sleep(75)
  }

  currentTitleIndex.value = (currentTitleIndex.value + 1) % title.length

  typeNextCharacter()
}

onMounted(() => {
  typeNextCharacter()
})

onUnmounted(() => {
  clearTimeout(timeoutId)
})
</script>

<style>
@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}
</style>