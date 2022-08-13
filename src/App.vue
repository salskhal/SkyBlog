<script setup>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
<div class="flex flex-col min-h-screen bg-mainBg">
  <Nav />
  <RouterView />
  <Footer />
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  /* background: #e9ca96; */
}


</style>
