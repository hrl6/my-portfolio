<template>
  <h2 class="text-center text-4xl font-semibold py-4">Contact</h2>
  <div class="flex justify-center gap-10">
    <div class="flex items-center">
      <PhoneIcon class="h-8 w-8 text-green-500 mr-3" />
      <div>
        <p class="font-semibold">WhatsApp</p>
        <a href="tel:+60128112302" class="text-blue-600">+6012-811 2302</a>
      </div>
    </div>

    <div class="flex items-center">
      <EnvelopeIcon class="h-8 w-8 text-red-500 mr-3" />
      <div>
        <p class="font-semibold">Email</p>
        <a href="mailto:hrulhadi@gmail.com" class="text-blue-600">hrulhadi@gmail.com</a>
      </div>
    </div>

    <div class="flex items-center">
      <i class="fa fa-linkedin h-8 w-8 text-blue-500 mr-3"></i>
      <div>
        <p class="font-semibold">LinkedIn</p>
        <a href="https://www.linkedin.com/in/your-profile" class="text-blue-600">your-profile</a>
      </div>
    </div>
  </div>
</template>

<script>
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/20/solid'

export default {
  name: 'Contact',
  components: {
    PhoneIcon,
    EnvelopeIcon
  }
}
</script>

