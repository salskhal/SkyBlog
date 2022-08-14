<script setup>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";


const navigation = ref(null)
const route = useRoute()


onMounted(() =>{
  checkRoute()
})

const checkRoute = () => {
  if(route.name === "Login" || route.name=== "Register" || route.name === "Forgot" ){
    navigation.value = true
    return
  } navigation.value = false
}


watch(route =>{
  checkRoute()
})




</script>

<template>
<div class="flex flex-col min-h-screen bg-mainBg">
  <Nav v-if="!navigation" />
  <RouterView />
  <Footer v-if="!navigation" />
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
