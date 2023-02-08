<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["showContactModal"]);
</script>

<template>
  <nav class="bg-black shadow-lg">
    <div class="flex container justify-between items-center mx-auto py-3">
      <router-link class="text-2xl hover:text-white" :to="{ name: 'index' }"
        >Home</router-link
      >
      <button
        @click="$emit('showContactModal')"
        class="bg-blue-500 rounded-lg px-3 py-2 hover:scale-105 active:scale-95 hover:bg-blue-600 transition duration-200"
      >
        Contact Me
      </button>
    </div>
  </nav>
</template>
