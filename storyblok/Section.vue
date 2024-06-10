<template>
  <div class="container px-6 mb-24 mt-60 flex flex-wrap justify-center">
    <h2 class="text-3xl text-[#1d243d] font-bold" >{{ blok.Name }}</h2>
    <div :id="blok.Anchor" v-editable="blok" class="container w-full p-12 mx-auto grid md:grid-cols-2 gap-12">
      <StoryblokComponent
        v-for="(blok, index) in blok.Content"
        :key="blok._uid"
        :blok="blok"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>