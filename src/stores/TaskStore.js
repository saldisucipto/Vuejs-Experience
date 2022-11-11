import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "task 1",
        isFav: false,
      },
      {
        id: 2,
        title: "task 2",
        isFav: true,
      },
    ],
    name: "Yoshi",
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    totalFav() {
      return this.tasks.reduce((total, taks) => {
        return taks.isFav ? total + 1 : total;
      }, 0);
    },
    totalTask: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
    },
    togleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
    },
  },
});
