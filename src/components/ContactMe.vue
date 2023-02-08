<script setup>
import Modal from "./Modal.vue";

const emits = defineEmits(["close"]);
</script>
<template>
  <modal @close="$emit('close')">
    <h2 class="text-2xl">Want to contact me?</h2>
    <form @submit.prevent="$emit('close')" class="mt-5 flex flex-col gap-5">
      <div class="flex gap-5">
        <input
          class="py-2 px-3 rounded bg-neutral-700"
          type="text"
          placeholder="First Name"
          required
        />
        <input
          class="py-2 px-3 rounded bg-neutral-700"
          type="text"
          placeholder="Last Name"
          required
        />
      </div>
      <input
        type="email"
        class="py-2 px-3 rounded bg-neutral-700"
        placeholder="Email"
        required
      />
      <textarea
        class="rounded py-2 px-3 bg-neutral-700"
        placeholder="Your message"
        rows="5"
        required
      ></textarea>
      <button
        class="bg-blue-500 rounded-lg px-3 py-2 hover:scale-105 active:scale-95 hover:bg-blue-600 transition duration-200 cursor-pointer"
        type="submit"
      >
        Submit
      </button>
    </form>
  </modal>
</template>
