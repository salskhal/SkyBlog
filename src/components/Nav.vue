<template>
  <main class=" px-6 shadow-navShadow">
    <nav class="flex py-6">
      <div>
        <router-link
          :to="{ name: 'home' }"
          class="font-semibold text-2xl items-center text-black"
          >SkyBlog</router-link
        >
      </div>
      <div class="relative md:flex flex-1 items-center justify-end hidden">
        <ul class="mr mr-8">
          <router-link
            to="#"
            class="hover:text-[#e9ca96] ease-in-out duration-500 px-2 mr-8"
            >Home</router-link
          >
          <router-link
            to="#"
            class="hover:text-[#e9ca96] ease-in-out duration-500 px-2 mr-8"
            >Blog</router-link
          >
          <router-link
            to="#"
            class="hover:text-[#e9ca96] ease-in-out duration-500 px-2 mr-8"
            >CreatePost</router-link
          >
          <router-link
            to="#"
            class="hover:text-[#e9ca96] ease-in-out duration-500 px-2"
            >Login/Register</router-link
          >
        </ul>
      </div>
    </nav>
    <hamburger
      class="w-auto cursor-pointer absolute top-8 right-6 h-6 md:hidden"
      @click="toggleNav"
    />

    <transition
      name="mobile-nav"
    >
      <ul
        class="mobile-nav p-5 w-64 max-w-70 flex flex-col fixed left-0 h-full bg-mobileBg text-white md:hidden"
        v-show="mobileNav"
      >
        <router-link
          to="#"
          class="hover:text-[#e9ca96] ease-in-out duration-500 py-3"
          >Home</router-link
        >
        <router-link
          to="#"
          class="hover:text-[#e9ca96] ease-in-out duration-500 py-3"
          >Blog</router-link
        >
        <router-link
          to="#"
          class="hover:text-[#e9ca96] ease-in-out duration-500 py-3"
          >CreatePost</router-link
        >
        <router-link
          to="#"
          class="hover:text-[#e9ca96] ease-in-out duration-500 py-3"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </main>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import hamburger from "../assets/Icons/bars-regular.svg";

let mobileNav = ref(false);

const toggleNav = () => {
  mobileNav.value = !mobileNav.value;
};
</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter{
  transform: translateX(-256px);
}

.mobile-nav-enter-to{
  transform: translateX(0);
}

.mobile-nav-leave-to{
  transform: translateX(-256px);
}
</style>
