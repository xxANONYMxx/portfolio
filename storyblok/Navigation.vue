<template>
    <StoryblokComponent
      v-for="(blok, index) in blok.Items"
      :key="blok._uid"
      :blok="blok"
      :index="index"
    />
</template>
  
<script setup>
  const props = defineProps({ blok: Object });
</script>
