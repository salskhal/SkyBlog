<template>
  <div>
    <img src="../assets/blogCards/stock-1.jpg" alt="" v-show="blog.blogCoverPhoto === 'stock-1'">
    <img src="../assets/blogCards/stock-2.jpg" alt="" v-show="blog.blogCoverPhoto === 'stock-2'">
    <img src="../assets/blogCards/stock-3.jpg" alt="" v-show="blog.blogCoverPhoto === 'stock-3'">
    <img src="../assets/blogCards/stock-4.jpg" alt="" v-show="blog.blogCoverPhoto === 'stock-4'">
    <p>{{blog.blogCoverPhoto}}</p>
  </div>
</template>

<script setup>
    defineProps({
        blog: Object
    })
</script>

<style>

</style>