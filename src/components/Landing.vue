<template>
  <div class="flex flex-col items-center min-h-[50vh] justify-center text-center px-4">
    <h1 class="text-headerCol mb-6">{{ title.title }}</h1>
    <h2 class="text-headerCol font-semibold text-5xl tracking-widest mb-6">{{ title.header }}</h2>
    <p class="text text-gray-700">{{ title.content }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: Object,
});
</script>

<style></style>
