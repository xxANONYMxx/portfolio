<template>
  <div id="aboutMe" class="container flex flex-wrap justify-center">
    <div v-editable="blok" class="container w-full p-60 text-center">
      <div class="grid md:grid-cols-2">
        <!-- Heading Div -->
        <div class="flex flex-col justify-end items-end">
          <h1 class="text-4xl text-[#1d243d] font-bold">{{ blok.Name }}</h1>
          <span>{{ blok.Tags }}</span>
          <div class="arrow-up"></div>
        </div>
        
        <!-- Image Div -->
        <div class="images">
          <div class="arrow-down"></div>
          <Splide :options="{ rewind: true }" aria-label="My Favorite Images" class="flex justify-center">
            <SplideSlide v-for="image in blok.Images" :key="image" class="flex justify-center items-center">
              <img class="rounded-[10px]" :src="imageService(image.Image.filename, '200x0', 'webp')">
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <!-- Text Div -->
      <div class="text mr-3 pt-12">
        <div v-html="description"></div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  import { imageService } from '../composables/imageService';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css';

  const props = defineProps({ blok: Object });

  const description = computed(() =>
    renderRichText(props.blok.Description)
  );
</script>

<style scoped>
.arrow-down {
  width: 0; 
  height: 0; 
  border-left: 130px solid transparent;
  border-right: 130px solid transparent;
  border-top: 200px solid rgb(158, 158, 158);
  position: absolute;
  z-index: -1;
  left: 60%
}

.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 65px solid transparent;
  border-right: 65px solid transparent;
  border-bottom: 100px solid rgb(158, 158, 158);
  position: absolute;
  z-index: -1;
  left: 47%
}

@media only screen and (max-width: 771px) {
  .arrow-down {
    display: none;
  }

  .arrow-up {
    top: 5%;
    left: 45%;
    border-left: 130px solid transparent;
    border-right: 130px solid transparent;
    border-bottom: 200px solid rgb(158, 158, 158);
  }
}

</style>