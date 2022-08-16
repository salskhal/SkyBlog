<template>
  <div class="flex justify-center items-center z-101 absolute w-full h-full top-0 bg-modal ">
    <div class="flex flex-col justify-center rounded-lg w-72 py-10 px-7 bg-white">
        <p class="text-center">{{ message }}</p>
        <button @click="$emit('closeModal')" class="self-center bg-primary py-2 px-4 rounded-full mt-3">Close</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
    message: String
})


</script>

<style>

</style>