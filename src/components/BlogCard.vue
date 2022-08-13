<template>
  <div class="p-4 bg-white rounded">
    <div>
      <img
        src="../assets/blogPhotos/designed-for-everyone.jpg"
        alt="not found"
        v-show="content.img === 'designed-for-everyone'"
        class="h-full rounded shadow-2xl"
      />
      <img
        src="../assets/blogPhotos/beautiful-stories.jpg"
        alt="not found"
        v-show="content.img === 'beautiful-stories'"
        class="h-full rounded shadow-2xl"
      />
    </div>
    <div class="mt-4 px-6">
      <h1 class="texr text-2xl font-bold mb-4">{{ content.title }}</h1>
      <p class="mb-2">{{ content.content }}</p>
      <router-link to="#" class="flex items-center gap-2 hover:text-gray-600 ease-in-out duration-500">
        View The Post <Arrow class="w-4"/>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import Arrow from "../assets/Icons/arrow-right-light.svg"
// import imagePath from `../assets/blogPhotos/${content.img}`

const imgPath = ref("../assets/blogPhotos/");

defineProps({
  content: Object,
  img: String,
});
</script>

<style></style>
