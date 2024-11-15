<template>
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="flex justify-center text-4xl text-primary font-bold mb-8">About Me</h2>
    <div class="flex justify-center">
      <div class="text-4xl font-bold text-white relative">
        <span class="pb-2 inline-block typing-animation">Self-Taught Developer</span>
      </div>
    </div>
  <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
    <div >
      <p class="text-lg text-white mb-4">
        In the past, he hadn't considered the importance of ocular power. He had been content with his own abilities. But after bringing Nagato back, he found himself drawn to the potential of the Rinnegan, the legendary eyes that Nagato possessed, though still dormant. To harness the full power of the Rinnegan, Orochimaru knew he would need a considerable amount of spiritual energy and physical preparation.          </p>
      <p class="text-lg text-white">
        In short, if he wanted to fully awaken and control the Rinnegan, he'd need to obtain Uchiha genetic material to cultivate his own Sharingan and, eventually, fuse it into a pair of Mangekyo.          </p>
    </div>
  </div>
</div>
</template>

<style scoped>
.typing-animation {
  overflow: hidden;
  border-right: 0.1em solid #64ffda;
  white-space: nowrap;
  animation: typing 4s steps(22) infinite, blink-caret 1s infinite;
}

@keyframes typing {
  from { width: 6% }
  to { width: 108% }
}

@keyframes blink-caret {
  50% { border-color: transparent; }
}
</style>