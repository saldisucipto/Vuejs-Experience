<template>
  <div class="corousel-indicators">
    <!-- <button class="corousel-indicator-item active"></button
    ><button class="corousel-indicator-item"></button
    >-->
    <button
      class="corousel-indicator-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script>
export default {
  name: "CorouselIndicator",
  emits: ["switch"],
  props: ["total", "currentIndex"],
};
</script>

<style scoped>
.corousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5em;
  z-index: 2;
}

.corousel-indicator-item {
  width: 15px;
  height: 15px;
  opacity: 0.5;
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

.active {
  opacity: 1;
}
</style>
