<template>
  <div>
    <corousel-compo :slides="slides"></corousel-compo>
  </div>
</template>

<script>
import CorouselCompo from "../components/carousel/CorouselCompo.vue";

export default {
  name: "CorouselScreen",
  components: {
    CorouselCompo,
  },
  data() {
    return {
      slides: [
        "https://picsum.photos/id/12/900/400",
        "https://picsum.photos/id/13/900/400",
        "https://picsum.photos/id/15/900/400",
        "https://picsum.photos/id/17/900/400",
        "https://picsum.photos/id/19/900/400",
      ],
    };
  },
};
</script>

<style scoped></style>
