<template>
  <main>
    <Landing :title="landingInfo" />
    <div class="grid md:grid-cols-2 lg:px-32 px-16 gap-6 py-10 mb-14">
      <BlogCard
        v-for="(blog, index) in sampleBlog"
        :content="blog"
        :key="index"
        :img="blog.img"
      />
    </div>
    <div class=" px-28 md:px-14 lg:px-24 py-10 lg:py-28 flex flex-col  bg-[#e9ca96]">
      <div>
        <h3 class="mb-4 text-2xl text-gray-800">View More Recent Blogs</h3>
      </div>
      <div class="grid  md:grid-cols-2 lg:grid-cols-4 gap-8">
        <BlogPost
          v-for="(blog, index) in blogCards"
          :key="index"
          :blog="blog"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Landing from "../components/Landing.vue";
import BlogCard from "../components/BlogCard.vue";
import BlogPost from "../components/BlogPost.vue";

const landingInfo = ref({
  title: "Our blog",
  header: "Stories & Ideas",
  content: "Weekly blog articles with all things programming",
});

const sampleBlog = ref([
  {
    title: "We are trending on Github",
    content: "This is a filler blog content hehehehehe",
    img: "designed-for-everyone",
  },
  {
    title: "A Beginner's Guide to Competitive Coding",
    content: "This is a filler blog content hehehehehe",
    img: "beautiful-stories",
  },
]);

const blogCards = ref([
  {
    blogTitle: "Blog Card #1",
    blogCoverPhoto: "stock-1",
    blogDate: "May 1, 2022",
  },
  {
    blogTitle: "Blog Card #2",
    blogCoverPhoto: "stock-2",
    blogDate: "May 1, 2022",
  },
  {
    blogTitle: "Blog Card #3",
    blogCoverPhoto: "stock-3",
    blogDate: "May 1, 2022",
  },
  {
    blogTitle: "Blog Card #4",
    blogCoverPhoto: "stock-4",
    blogDate: "May 1, 2022",
  },
]);
</script>
