<template>
  <div class="bg-slate-50 drop-shadow-sm my-3 flex justify-between">
    <div>
      <h1 class="py-5 px-5 font-semibold">{{ task.title }}</h1>
    </div>
    <div class="flex flex-col justify-center px-5 text-gray-400">
      <div class="flex gap-5">
        <button @click="taskStore.deleteTask(task.id)">
          <i class="fas fa-trash"></i>
        </button>
        <button @click="taskStore.togleFav(task.id)">
          <i :class="{ 'text-red-600': task.isFav }" class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../../stores/TaskStore";
export default {
  name: "ItemDetails",
  props: ["task"],
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>

<style scoped></style>
