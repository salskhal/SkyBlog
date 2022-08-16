<template>
  <div
    class="top-0 z-101 h-full w-full bg-loading fixed flex justify-center items-center"
  >
    <span class="block w-16 h-16 mx-auto border-solid border-transparent border-2  border-y-white rounded-50 loading"></span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

@keyframes spin{
    to {
        transform: rotateZ(360deg);
    }
}
.loading{
    animation: spin ease 1000ms infinite;
}
</style>
