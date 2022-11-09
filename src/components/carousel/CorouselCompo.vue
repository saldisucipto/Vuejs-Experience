<template>
  <div class="carousel">
    <div class="carousel-inner">
      <corousel-indicator
        :total="slides.length"
        :currentIndex="currentSlide"
        @switch="switchSlide($event)"
      ></corousel-indicator>
      <carousel-item
        v-for="(slide, index) in slides"
        :key="`item-${index}`"
        :slide="slide"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSLiderTimer"
        @mouseout="startSlideTimer"
      ></carousel-item>
      <corousel-controller @prev="prev" @next="next"></corousel-controller>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import CorouselController from "./CorouselControl.vue";
import CorouselIndicator from "./CorouselIndicator.vue";

export default {
  name: "CorouselCompo",
  components: {
    CarouselItem,
    CorouselController,
    CorouselIndicator,
  },
  props: ["slides"],
  data() {
    return {
      currentSlide: 0,
      slideInteval: null,
      direction: "right",
    };
  },
  methods: {
    setCurentSlide(index) {
      this.currentSlide = index;
    },
    prev(step = -1) {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurentSlide(index);
      this.direction = "left";
      this.startSlideTimer();
    },
    _next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurentSlide(index);
      this.direction = "right";
    },
    next(step = 1) {
      this._next(step);
      this.startSlideTimer();
    },
    startSlideTimer() {
      this.stopSLiderTimer();
      this.slideInteval = setInterval(() => {
        this._next();
      }, 3000);
    },
    stopSLiderTimer() {
      clearInterval(this.slideInteval);
    },
    switchSlide(index) {
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
  },
  mounted() {
    this.startSlideTimer();
  },
  beforeMount() {
    this.stopSLiderTimer();
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  position: relative;
  width: 900px;
  height: 400px;
  overflow: hidden;
}
</style>
