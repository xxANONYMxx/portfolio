<template>
  <div v-editable="blok" class="container mx-auto">
    <h2 class="text-xl font-bold mb-2">{{ blok.Heading }}</h2>
    <div class="text-gray-700" v-html="description"></div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })

const description = computed(() =>
    renderRichText(props.blok.Description)
  );
</script>
