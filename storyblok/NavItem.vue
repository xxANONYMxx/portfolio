<template>
  <div v-if="index <= 3" v-editable="blok" :class="['triangle-wrapper', 'triangle-wrapper-' + index, 'triangle-' + index]">
    <div class="triangle">
      <a :href="'#'+blok.Anchor" :class="['triangle-text', 'triangle-text-' + index]" >{{ blok.Name }}</a>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    blok: Object,
    index: Number
  });
</script>

<style scoped>
.triangle-wrapper {
  position: fixed;
  background-color: transparent;
  z-index: 10;
}

.triangle-wrapper-0 {
  top: 0;
  left: 0;
}

.triangle-wrapper-1 {
  bottom: 0;
  right: 0;
}

.triangle-wrapper-2 {
  top: 0;
  right: 0;
}

.triangle-wrapper-3 {
  bottom: 0;
  left: 0;
}

.triangle {
  width: 0; 
	height: 0; 
}

.triangle-text {
  position: absolute;
  width: 100px;
  text-align: center;
  font-size: 16px;
  font-family: Arial;
  display: block;
  color: white;
}

.triangle-text-0 {
  top: 35px;
  left: 5px;
  transform: rotate(-45deg);
}

.triangle-text-1 {
  bottom: 35px;
  right: 5px;
  transform: rotate(-45deg);
}

.triangle-text-2 {
  top: 35px;
  right: 5px;
  transform: rotate(45deg);
}

.triangle-text-3 {
  bottom: 35px;
  left: 5px;
  transform: rotate(45deg);
}

/* Additional styles for different triangles based on index */
.triangle-0 .triangle { 
  /* Red triangle */
  border-top: 150px solid rgb(71, 71, 71);
	border-right: 150px solid transparent;
}

.triangle-0 .triangle:hover {
  border-top-color: rgb(41, 41, 41);
} 

.triangle-1 .triangle {
  border-bottom: 150px solid rgb(71, 71, 71);
	border-left: 150px solid transparent;
}

.triangle-1 .triangle:hover {
  border-bottom-color: rgb(41, 41, 41);
} 

.triangle-2 .triangle {
  /* Blue triangle */
  border-top: 150px solid rgb(71, 71, 71);
	border-left: 150px solid transparent;
}

.triangle-2 .triangle:hover {
  border-top-color: rgb(41, 41, 41);
} 

.triangle-3 .triangle {
  /* Yellow triangle */
  border-bottom: 150px solid rgb(71, 71, 71);
	border-right: 150px solid transparent;
}

.triangle-3 .triangle:hover {
  border-bottom-color: rgb(41, 41, 41);
} 
</style>
