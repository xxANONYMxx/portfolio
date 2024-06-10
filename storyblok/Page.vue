<template>
  <div v-editable="blok" class="px-4 flex flex-wrap justify-center">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>