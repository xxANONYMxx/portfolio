<template>
  <div v-editable="blok" class="container mx-auto my-12">
    <div v-if="(index%2 === 0)" :style="arrowDownStyle"></div>
    <!-- Preview -->
    <div class="container flex flex-wrap justify-center">
      <h2 class="text-2xl font-bold mb-2">{{ blok.Name }}</h2>
      <div class="grid gap-x-40 gap-y-2 md:grid-cols-1">
        <!-- Project Image -->
        <div class="project-image">
          <img class="rounded-[10px]" :src="imageService(blok.Image.filename, '1000x0', 'webp')" :alt="blok.Image">
        </div>
        
        <!-- Project Tools -->
        <div>
          <h3 class="text mb-2">Tools:</h3>
          <div class="flex flex-wrap items-center mt-4">
            <div v-for="tool in blok.Tools" :key="tool.Name" class="mr-4 mb-4">
              <img :src="imageService(tool.Icon.filename, '100x0', 'webp')" :alt="tool.Icon" class="w-6 h-6 mr-1">
            </div>
          </div>
        </div>
        <!-- Button to show detail view -->
        <button @click="showDetail = true; disableScrolling()" class="bg-[#717171] hover:bg-[#414141] text-white font-bold py-2 px-4 rounded mt-4">View Details</button>
      </div>
    </div>
    <div v-if="(index%2 === 1)" :style="arrowUpStyle"></div>

    <!-- Detail View -->
    <div v-if="showDetail" class="overlay-outer h-screen overflow-scroll">
      <div class="overlay-inner p-24">
        <!-- Close button -->
        <button @click="showDetail = false; enableScrolling()" class="absolute top-4 right-4 bg-[#717171] hover:bg-[#414141] text-white font-bold py-2 px-4 rounded">Close</button>
        
        <!-- Project Name -->
        <h2 class="text-3xl text-white font-bold mb-4">{{ blok.Name }}</h2>
        
        <!-- Project Description -->
        <div class="text-white mb-4" v-html="description"></div>
        
        <!-- Project Tools -->
        <div class="flex flex-wrap justify-center">
          <div v-for="tool in blok.Tools" :key="tool.Name" class="flex flex-wrap justify-center mr-4 mb-4">
            <img :src="imageService(tool.Icon.filename, '100x0', 'webp')" :alt="tool.Icon" class="w-6 h-6 mr-1">
            <span class="text-white mb-4">{{ tool.Name }}</span>
          </div>
        </div>

        <!-- Project Image -->
        <div class="project-image">
          <img class="rounded-[10px]" :src="imageService(blok.Image.filename, '1000x0', 'webp')" :alt="blok.Image">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const showDetail = ref(false);

function disableScrolling() {
  document.body.style.overflow = 'hidden';
}

function enableScrolling() {
  document.body.style.overflow = '';
}

const props = defineProps({
  blok: Object,
  index: Number
});

const description = computed(() =>
    renderRichText(props.blok.Description)
  );

  const arrowUpStyle = computed(() => {
  let borderTop = Math.floor(Math.random() * 90) + 140;
  let borderSides = borderTop*0.7;

  return {
    width: '0',
    height: '0',
    borderLeft: `${borderSides}px solid transparent`,
    borderRight: `${borderSides}px solid transparent`,
    borderBottom: `${borderTop}px solid rgb(158, 158, 158)`,
    position: 'absolute',
    zIndex: '-1',
    left: `${Math.floor(Math.random() * 10) + 1}%`,
  };
});

const arrowDownStyle = computed(() => {
  let borderBottom = Math.floor(Math.random() * 40) + 70;
  let borderSides = borderBottom*0.7;

  return {
    width: '0',
    height: '0',
    borderLeft: `${borderSides}px solid transparent`,
    borderRight: `${borderSides}px solid transparent`,
    borderTop: `${borderBottom}px solid rgb(158, 158, 158)`,
    position: 'absolute',
    zIndex: '-1',
    left: `${Math.floor(Math.random() * 10) + 65}%`,
  };
});
</script>

<style scoped>
.overlay-outer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
}

.overlay-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay button {
  position: absolute;
}

.project-image img {
  max-width: 100%;
  height: auto;
}

.no-scroll {
  overflow: hidden;
}
</style>
