<template>
  <div class="max-w-6xl mx-auto px-4">
    <AnimatedSection>
      <div class="flex justify-center flex-col items-center">
        <h2 v-slide-in
          class="animate-slideInFromLeft flex justify-center text-4xl tracking-wide text-primary font-bold mb-2">About
          Me
        </h2>
        <!-- text-4xl font-semibold text-white relative pt-2 -->
        <AnimatedSectionUp>
          <span v-slide-up class="delay-300 text-[1.6rem] sm:text-3xl font-semibold tracking-wide text-white">
            {{ displayText }}<span class="text-primary inline-block w-[4px] h-8 bg-current ml-0.5 -mb-0.5"
              :class="{ 'animate-blink': isTyping }"></span>
            <span> Developer</span>
          </span>
        </AnimatedSectionUp>
      </div>
    </AnimatedSection>
    <AnimatedSectionUp>
      <div class="flex flex-col lg:flex-row items-center lg:gap-8">
        <div class="w-auto md:min-w-96">
          <img src="../img/coding-green.png" alt="Coding Typing">
        </div>
        <div v-slide-up>
          <div class="px-10">
            <p class="text-lg text-white mb-4">
              Salam! I'm Hairul Marwan, a web developer from Sabah, Malaysia with <b>a year of professional
                experience</b>. I specialize in creating seamless web applications, bringing together responsive
              frontend
              interfaces and robust backend solutions.
            </p>
            <p class="text-lg text-white">
              When I'm not coding, you'll find me diving into new technologies or getting lost in a good fiction book
              •ᴗ•
            </p>
          </div>
        </div>
      </div>
    </AnimatedSectionUp>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AnimatedSection from './animations/AnimatedSection.vue';
import AnimatedSectionUp from './animations/AnimatedSectionUp.vue';


const title = ['Front-End', 'Back-End', 'Self-Taught']
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