<template>
  <footer>
    <div class="bg-gray-800 flex py-5 border-b-2 border-b-blue-400">
      <p class="mx-auto text-gray-200">
        Copyright {{ date.getFullYear() }} by
        <a
          class="underline hover:text-gray-300"
          target="_blank"
          href="https://github.com/the-akpan"
          >the-akpan</a
        >
      </p>
    </div>
  </footer>
</template>

<script setup>
const date = new Date();
</script>
