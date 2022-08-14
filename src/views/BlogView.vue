<template>
  <div class="p-16 flex flex-col">
    <div class="mb-12 ml-auto flex gap-2 items-center">
      <span>Toggle Editing</span>
      <input type="checkbox" v-model="editPost" class="c cursor-pointer">
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      <BlogPost
           v-for="(blog, index) in tryblog"
           :key="index"
           :blog="blog"
           :edit="editPost"
         />
    </div>
  </div>
</template>

<script setup>


import { useBlogStore } from "../stores/counter";
import BlogPost from "../components/BlogPost.vue";
import { computed, ref } from "@vue/runtime-core";

const blogs = useBlogStore()

const editPost = ref(false)

const tryblog = computed(() =>{
  return blogs.blogs
})


</script>

<style  scoped>
input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
</style>
