<template>
  <div
    class="o overflow-hidden flex h-screen justify-center self-center my-0 w-full mx-auto"
  >
    <form
      class="login py-0 px-3 relative flex flex-col justify-center items-center md:px-12"
    >
      <p class="login-register mb-8">
        Already have an account
        <router-link :to="{ name: 'Login' }" class="text-primary"
          >Log In</router-link
        >
      </p>
      <h2 class="text-center text-2xl mb-8 text-mobileBg lg:text-3xl font-semibold">
        Register 
      </h2>
      <div class="inputs w-full max-w-xs">
        <div class="input relative flex justify-center items-center mb-2">
          <input
            type="text"
            placeholder="First Name"
            v-model="firstName"
            class="w-full border-none bg-input p-1 pl-7 h-12 focus:outline-none"
          />
          <User class="icon w-3 absolute left-2"/>
        </div>
        <div class="input relative flex justify-center items-center mb-2">
          <input
            type="text"
            placeholder="Last Name"
            v-model="lastName"
            class="w-full border-none bg-input p-1 pl-7 h-12 focus:outline-none"
          />
          <User class="icon w-3 absolute left-2"/>
        </div>
        <div class="input relative flex justify-center items-center mb-2">
          <input
            type="text"
            placeholder="Username"
            v-model="username"
            class="w-full border-none bg-input p-1 pl-7 h-12 focus:outline-none"
          />
          <User class="icon w-3 absolute left-2"/>
        </div>
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
      
      <button class="bg-primary py-2 px-4 rounded-full mt-4">Register</button>
    </form>
  </div>
</template>

<script setup>

import { ref } from "@vue/reactivity";
import Email from "../assets/Icons/envelope-regular.svg";
import Password from "../assets/Icons/lock-alt-solid.svg";
import User from "../assets/Icons/user-alt-light.svg"

const email = ref("");
const password = ref("");
const firstName = ref("")
const lastName = ref("")
const username = ref("")

</script>

<style>

</style>