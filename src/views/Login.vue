<template>
  <div
    class="o overflow-hidden flex h-screen justify-center self-center my-0 w-full mx-auto"
  >
    <form
      class="login py-0 px-3 relative flex flex-col justify-center items-center md:px-12"
    >
      <p class="login-register mb-8">
        Don't have an account?
        <router-link :to="{ name: 'Register' }" class="text-primary"
          >Register</router-link
        >
      </p>
      <h2 class="text-center text-2xl mb-8 text-mobileBg lg:text-3xl font-semibold">
        Login To SkyBlogs
      </h2>
      <div class="inputs w-full max-w-xs">
        <div class="input relative flex justify-center items-center mb-2">
          <input
            type="text"
            placeholder="Email..."
            v-model="email"
            class="w-full border-none bg-input p-1 pl-7 h-12 focus:outline-none"
          />
          <Email class="icon w-3 absolute left-2"/>
        </div>
        <div class="input relative flex justify-center items-center mb-2">
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            class="w-full border-none bg-input p-1 pl-7 h-12 focus:outline-none"
          />
          <Password class="icon w-3 absolute left-2"/>
        </div>
      </div>
      <router-link class="forgot text-sm cursor-pointer mt-4 mb-8 hover:underline" :to="{ name: 'Forgot' }"
        >Forgot your password?</router-link
      >
      <button class="bg-primary py-2 px-4 rounded-full">Sign In</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import Email from "../assets/Icons/envelope-regular.svg";
import Password from "../assets/Icons/lock-alt-solid.svg";

const email = ref("");
const password = ref("");
</script>

<style></style>
