<template>
  <div v-fade-in
    class="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] p-6 bg-darker rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 group">
    <svg class="w-12 h-12 mb-2 text-white" :class="`group-hover:${colorMap[color]}`" :viewBox="viewBox"
      fill="currentColor">
      <template v-if="Array.isArray(paths)">
        <path v-for="(path, index) in paths" :key="index" :d="path" />
      </template>
      <path v-else :d="paths" />
    </svg>
    <span class="text-white transition-colors duration-300" :class="`group-hover:${colorMap[color]}`">{{ name
      }}</span>
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
  }
})

const colorMap = {
  blue: 'text-blue-500',
  'blue-400': 'text-blue-400',
  red: 'text-red-500',
  yellow: 'text-yellow-400',
  green: 'text-green-500',
  orange: 'text-orange-500',
  cyan: 'text-cyan-400',
  emerald: 'text-emerald-500'
}
</script>
