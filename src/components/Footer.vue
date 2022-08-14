<template>
  <footer class="mt-auto p-24 bg-mobileBg">
    <div class="container flex flex-col gap-8 md:flex-row md:gap-0">
      <div
        class="left flex flex-1 gap-8 text-white flex-col items-center md:flex-row md:items-start md:gap-0"
      >
        <div class=" col-1 gap-8 flex flex-1 flex-col md:gap-0">
          <router-link
            :to="{ name: 'Home' }"
            class="font-semibold flex text-2xl items-center text-white"    >SkyBlog</router-link
          >
          <ul class="flex gap-4 list-none mt-auto">
            <li class="flex items-center">
              <a href="#"><Youtube class="w-12 h-auto"/></a>
            </li>
            <li class="flex items-center">
              <a href="#"><Twitter class="w-12 h-auto"/></a>
            </li>
            <li class="flex items-center">
              <a href="#"><LinkedIn class="w-12 h-auto"/></a>
            </li>
            <li class="flex items-center">
              <a href="#"><Instagram class="w-12 h-auto" /></a>
            </li>
          </ul>
        </div>
        <div class="col-2 gap-8 flex flex-1 md:gap-0 px-4 md:px-0 " >
          <ul class="flex gap-4 list-none h-full justify-center flex-row flex-wrap md:flex-col">
            <router-link :to="{ name: 'Home' }" class="test-base font-medium text-white no-underline">Home</router-link>
            <router-link :to="{ name: 'Home' }" class="test-base font-medium text-white no-underline">Blogs</router-link>
            <router-link :to="{ name: 'Home' }" class="test-base font-medium text-white no-underline">Login / Regiser</router-link>
          </ul>
        </div>
      </div>
      <div class="right gap-8 items-center flex-col text-white md:gap-0 md:items-end flex flex-1">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Youtube from "../assets/Icons/youtube-brands.svg";
import Twitter from "../assets/Icons/twitter-brands.svg";
import LinkedIn from "../assets/Icons/linkedin-brands.svg";
import Instagram from "../assets/Icons/instagram-brands.svg";
</script>

<style></style>
