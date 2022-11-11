<template>
  <div>
    <form @submit.prevent="handelSubmit" action="">
      <input
        type="text"
        name=""
        id=""
        placeholder="I Need Too"
        v-model="newTask"
        class="focus:outline-none border border-blue-500 text-sm py-1 px-3 mr-2"
      />
      <button type="submit" class="px-3 py-1 text-sm bg-blue-600 text-white">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { useTaskStore } from "../../stores/TaskStore";
import { ref } from "vue";
export default {
  name: "TaskForm",
  setup() {
    const taskStore = useTaskStore();

    const newTask = ref("");

    const handelSubmit = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 100000),
        });
        newTask.value = "";
      }
    };
    return { handelSubmit, newTask };
  },
};
</script>

<style scoped></style>
