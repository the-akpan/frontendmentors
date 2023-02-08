<script setup>
const emits = defineEmits(["close"]);
</script>
<template>
  <section
    class="fixed top-0 bottom-0 left-0 right-0 z-10 bg-white/50 flex justify-center items-center"
  >
    <div class="bg-neutral-900 relative p-14 rounded-lg">
      <div>
        <img
          @click="$emit('close')"
          class="absolute right-5 top-5 cursor-pointer"
          src="../assets/img/close.svg"
          alt="Close"
        />
      </div>
      <div class="container mx-auto">
        <slot />
      </div>
    </div>
  </section>
</template>
