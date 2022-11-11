<template>
  <div class="max-w-screen-lg mx-auto my-3 flex flex-col gap-5">
    <div class="flex justify-center bg-slate-300 gap-3">
      <img class="max-h-20 py-3" src="/pinia-logo.svg" alt="" />
      <h1 class="text-gray-900 my-auto font-bold text-sm">
        PINIA STATE MANAGEMENT | {{ taskStore.name }}
        <!-- Menggunkan State Store -->
      </h1>
    </div>

    <!-- new Form Task -->
    <div>
      <TaskForm></TaskForm>
    </div>

    <!-- button -->
    <div class="flex justify-end gap-3">
      <button
        class="text-center py-2 bg-yellow-200 px-3 text-sm"
        @click="filter = 'all'"
      >
        All List
      </button>
      <button
        class="text-center py-2 bg-yellow-200 px-3 text-sm"
        @click="filter = 'fav'"
      >
        Favorite
      </button>
    </div>

    <!-- Task List -->
    <div class="">
      <div v-if="filter === 'all'">
        <h1>All List</h1>
        <div class="" v-for="itemTask in taskStore.tasks" :key="itemTask.id">
          <!-- <h1>{{ itemTask.title }}</h1> -->
          <ItemDetails :task="itemTask"></ItemDetails>
        </div>
      </div>
      <div v-if="filter === 'fav'">
        <h1>Fav List</h1>

        <div class="" v-for="itemTask in taskStore.favs" :key="itemTask.id">
          <!-- <h1>{{ itemTask.title }}</h1> -->
          <ItemDetails :task="itemTask"></ItemDetails>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/TaskStore";
import ItemDetails from "../components/pinia-state/ItemDetails.vue";
import TaskForm from "../components/pinia-state/TaskForm.vue";
import { ref } from "vue";
export default {
  name: "PiniaState",
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");
    return { taskStore, filter };
  },
  components: {
    ItemDetails,
    TaskForm,
  },
};
</script>

<style scoped></style>
