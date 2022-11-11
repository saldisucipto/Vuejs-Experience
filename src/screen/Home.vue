<template>
  <div class="max-w-screen-lg mx-auto my-10">
    <div
      class="h-20 bg-slate-100 rounded-lg drop-shadow-md flex flex-col justify-center gap-3"
    >
      <div class="w-full flex justify-center text-2xl overflow-hidden">
        <img class="" src="@/assets/logo.svg" alt="" />
      </div>
    </div>
    <div class="my-10 h-auto bg-slate-100 drop-shadow-md grid grid-cols-6">
      <router-link to="/corousel">
        <div class="p-5">
          <div class="w-28 h-28 bg-slate-200 drop-shadow rounded-lg relative">
            <img
              class="z-0 absolute opacity-30"
              src="@/assets/logo.svg"
              alt=""
            />
            <div
              class="z-10 absolute text-green-900 font-bold flex flex-col justify-center h-full text-center w-full"
            >
              <div class="flex justify-center">
                <h1 class="text-center text-xl">Corousel</h1>
              </div>
            </div>
          </div>
        </div>
      </router-link>
      <router-link :to="{ name: 'HtmlEditor' }">
        <div class="p-5">
          <div class="w-28 h-28 bg-slate-200 drop-shadow rounded-lg relative">
            <img
              class="z-0 absolute opacity-30"
              src="@/assets/logo.svg"
              alt=""
            />
            <div
              class="z-10 absolute text-green-900 font-bold flex flex-col justify-center h-full text-center w-full"
            >
              <div class="flex justify-center">
                <h1 class="text-center text-xl">HTML Editor</h1>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'PiniaState' }">
        <div class="p-5">
          <div class="w-28 h-28 bg-slate-200 drop-shadow rounded-lg relative">
            <img
              class="z-0 absolute opacity-30"
              src="@/assets/logo.svg"
              alt=""
            />
            <div
              class="z-10 absolute text-green-900 font-bold flex flex-col justify-center h-full text-center w-full"
            >
              <div class="flex justify-center">
                <h1 class="text-center text-xl">Pinia State Management</h1>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePages",
};
</script>

<style scoped></style>
