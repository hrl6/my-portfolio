<template>
  <div v-fade-in
    class="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] p-6 bg-darker rounded-lg transition-all duration-300 hover:scale-105 group">
    <!-- <svg class="w-12 h-12 mb-2 transition-all ease-in-out group-hover:scale-105" :class="`text-${colorMap[color]}`" -->
    <!-- Simple SVG with paths -->
    <svg v-if="!complexSvg" class="w-12 h-12 mb-2 transition-all ease-in-out group-hover:scale-105" :class="color"
      :viewBox="viewBox" fill="currentColor">
      <template v-if="Array.isArray(paths)">
        <path v-for="(path, index) in paths" :key="index" :d="path" />
      </template>
      <path v-else :d="paths" />
    </svg>

    <!-- Complex SVG with custom elements -->
    <svg v-else class="w-12 h-12 mb-2 transition-all ease-in-out group-hover:scale-105" :viewBox="viewBox"
      v-html="complexSvg">
    </svg>

    <span class="transition-all ease-in-out group-hover:scale-100 text-white">{{ name }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  paths: {
    type: [String, Array],
    required: true
  },
  color: {
    type: String,
    default: 'blue'
  },
  viewBox: {
    type: String,
    default: "0 0 24 24"
  },
  complexSvg: {
    type: String,
    default: null
  }
})

const colorMap = {
  blue: 'blue-700',
  'blue-400': 'blue-400',
  red: 'red-600',
  yellow: 'yellow-400',
  green: 'green-500',
  orange: 'orange-500',
  cyan: 'cyan-400',
  emerald: 'emerald-500',
  indigo: 'indigo-400',
  sky: 'sky-700',
}
</script>
