<script setup>
import { RouterView } from "vue-router";
import { SiteFooter, SiteNavbar } from "./components/layout";
</script>

<template>
  <site-navbar />
  <main class="bg-gray-700 text-gray-200">
    <router-view />
  </main>
  <site-footer />
</template>
