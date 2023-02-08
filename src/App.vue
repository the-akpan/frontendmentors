<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";

import ContactMe from "./components/ContactMe.vue";
import { SiteFooter, SiteNavbar } from "./components/layout";

const showModal = ref(false);

function toggleModal(state) {
  showModal.value = state;
}
</script>

<template>
  <site-navbar @show-contact-modal="toggleModal(true)" />
  <main>
    <router-view />
    <transition name="fade" mode="out-in" :duration="500">
      <contact-me v-if="showModal" @close="toggleModal(false)" />
    </transition>
  </main>
  <site-footer />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
