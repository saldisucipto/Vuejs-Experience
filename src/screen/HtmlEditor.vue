<template>
  <div class="max-w-screen-lg mx-auto my-6">
    <QuillEditor theme="snow" toolbar="full" />
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
  name: "HtmlEditor",
  components: {
    QuillEditor,
  },
};
</script>

<style scoped></style>
