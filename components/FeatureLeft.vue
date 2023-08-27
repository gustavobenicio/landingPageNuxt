<template>
  <div class="flex flex-wrap flex-col-reverse sm:flex-row">
    <div class="w-full sm:w-1/2 p-6 mt-6">
      <slot name="img" />
    </div>
    <div class="w-full sm:w-1/2 p-6 mt-6">
      <div class="align-middle">
        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">{{ headline }}</h3>
        <p class="text-gray-600 mb-8">
          {{ content }}
          <br />
          <br />Images from:
          <a class="text-orange-500 underline" href="https://undraw.co/">undraw.co</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const name =  'FeatureLeft';
  const props = defineProps({
    headline: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    }
  });
</script>
