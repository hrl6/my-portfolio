<template>
  <div class="max-w-6xl mx-auto px-4">
    
    <div class="flex justify-center flex-col items-center">
      <h2 class="flex justify-center text-4xl text-primary font-bold mb-2">About Me</h2>
      <div class="text-4xl font-semibold text-white relative pt-2">
        <span class="pb-2 inline-block typing-animation">Self-Taught Developer</span>
      </div>
    </div>
  <div class="flex flex-col lg:flex-row items-center lg:gap-8">
    <div class="w-96 md:min-w-96">
      <img src="../img/coding-green.png" alt="Coding Typing">
    </div>
    <div>
      <div class="px-10">
        <p class="text-lg text-white mb-4">
          Salam! I’m Hairul Marwan, a self-taught web developer from Sabah, Malaysia. I’m passionate about creating the full experience, so I enjoy working on both the frontend and backend. From crafting smooth, interactive user interfaces to building the logic that powers everything behind the scenes, I love the balance of both sides and the challenge of making them work together seamlessly.
        </p>
        <p class="text-lg text-white">
          When I’m not coding, you can find me learning something new or experimenting with a project that pushes my skills <span class="italic">(or I might be reading something •ᴗ•)</span>.
        </p>
      </div>
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