<template>
  <div class="animated-section" ref="sectionRef">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, nextTick, ref } from 'vue'

const sectionRef = ref(null)

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  }
})

onMounted(async () => {
  await nextTick()
  if (sectionRef.value) {
    const elements = sectionRef.value.querySelectorAll('.fade-in-element')
    console.log('Found elements:', elements.length)
    elements.forEach((el, index) => {
      console.log(`Setting delay for element ${index}`)
      el.style.transitionDelay = `${props.delay + (index * 200)}ms`
    })
  }
})
</script>