<template>
  <div>
    <Modal v-show="showModal" @close-modal="closeModal" :message="modalMessage"/>
    <Loading v-if="loading"/>
    <div
      class="o overflow-hidden flex h-screen justify-center self-center my-0 w-full mx-auto"
    >
      <form
        class="login py-0 px-3 relative flex flex-col justify-center items-center md:px-12" @submit.prevent="modaliing"
      >
        <h2
          class="text-center text-2xl mb-8 text-mobileBg lg:text-3xl font-semibold"
        >
          Reset Password
        </h2>
        <p class="login-register mb-8 text-center">
          Forgot your passowrd? Enter your email to reset it
        </p>

        <div class="inputs w-full max-w-xs">
          <div class="input relative flex justify-center items-center mb-2">
            <input
              type="text"
              placeholder="Email..."
              v-model="email"
              class="w-full border-none bg-input p-1 pl-7 h-12 focus:outline-none"
            />
            <Email class="icon w-3 absolute left-2" />
          </div>
        </div>

        <button class="bg-primary py-2 px-4 rounded-full mt-3" >Reset</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import Email from "../assets/Icons/envelope-regular.svg";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";

const showModal = ref(false)
const loading = ref(null)
const modalMessage = ref("If your account exist you willl receive an email")
const email = ref("");

const closeModal = () =>{
    showModal.value = !showModal.value
    email.value = ""
}

const modaliing = () =>{
    showModal.value = true

}
</script>

<style></style>
