<script setup>
import { RouterView } from "vue-router";
import { SiteFooter, SiteNavbar } from "./components/layout";
</script>

<template>
  <site-navbar />
  <main>
    <router-view />
  </main>
  <site-footer />
</template>
