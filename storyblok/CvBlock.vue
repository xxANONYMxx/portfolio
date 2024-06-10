<template>
  <div v-editable="blok" class="container mx-auto my-12">
    <!--<div v-bind:class = "{ 'arrow-down': (index%2 === 0) }" ></div>-->
    <div v-if="(index%2 === 0)" :style="arrowDownStyle"></div>
    <h1 class="text-2xl font-bold mb-4">{{ blok.Name }}</h1>
    <div class="grid gap-12">
      <StoryblokComponent
        v-for="blok in blok.Items"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
    <div v-if="(index%2 === 1)" :style="arrowUpStyle"></div>
  </div>
</template>

<script setup>
defineProps({ blok: Object, index:Number })

const arrowDownStyle = computed(() => {
  let borderTop = Math.floor(Math.random() * 90) + 140;
  let borderSides = borderTop*0.7;

  return {
    width: '0',
    height: '0',
    borderLeft: `${borderSides}px solid transparent`,
    borderRight: `${borderSides}px solid transparent`,
    borderTop: `${borderTop}px solid rgb(158, 158, 158)`,
    position: 'absolute',
    zIndex: '-1',
    left: `${Math.floor(Math.random() * 10) + 5}%`,
  };
});

const arrowUpStyle = computed(() => {
  let borderBottom = Math.floor(Math.random() * 40) + 70;
  let borderSides = borderBottom*0.7;

  return {
    width: '0',
    height: '0',
    borderLeft: `${borderSides}px solid transparent`,
    borderRight: `${borderSides}px solid transparent`,
    borderBottom: `${borderBottom}px solid rgb(158, 158, 158)`,
    position: 'absolute',
    zIndex: '-1',
    left: `${Math.floor(Math.random() * 10) + 65}%`,
  };
});
</script>
