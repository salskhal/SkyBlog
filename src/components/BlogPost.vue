<template>
  <div class="relative cursor-pointer bg-white rounded-lg overflow-hidden flex flex-col">
    <div class="absolute gap-2 flex right-3 top-3">
      <div class="h-8 w-8 bg-white flex p-2 border rounded-full items-center justify-center hover:text-white hover:bg-red-600">
        <Delete  />
      </div>
      <div class="h-8 w-8 bg-white flex p-2  border rounded-full items-center justify-center hover:text-white hover:bg-black">
        <Edit/>
      </div>
    </div>
    <img
      src="../assets/blogCards/stock-1.jpg"
      alt=""
      v-show="blog.blogCoverPhoto === 'stock-1'"
    />
    <img
      src="../assets/blogCards/stock-2.jpg"
      alt=""
      v-show="blog.blogCoverPhoto === 'stock-2'"
    />
    <img
      src="../assets/blogCards/stock-3.jpg"
      alt=""
      v-show="blog.blogCoverPhoto === 'stock-3'"
    />
    <img
      src="../assets/blogCards/stock-4.jpg"
      alt=""
      v-show="blog.blogCoverPhoto === 'stock-4'"
    />
    <div class="p-8">
        <h4>{{blog.blogTitle}}</h4>
        <h6>Posted on: {{blog.blogDate}}</h6>
        <router-link to="#" class="flex items-center gap-2 hover:text-gray-600 ease-in-out duration-500 mt-5"> 
            View the post <Arrow class="w-3" />
        </router-link>
    </div>
  </div>
</template>

<script setup>
import Delete from "../assets/Icons/trash-regular.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Arrow from "../assets/Icons/arrow-right-light.svg"
defineProps({
  blog: Object,
});
</script>

<style></style>
