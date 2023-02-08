<script setup>
import { RouterView } from "vue-router";
import { SiteFooter, SiteNavbar } from "./components/layout";
</script>

<template>
  <section class="font-mono min-h-screen">
    <site-navbar />
    <main>
      <router-view />
    </main>
    <site-footer />
  </section>
</template>
