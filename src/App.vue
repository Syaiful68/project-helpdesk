<script setup>
//
import Navbar from "@/components/partials/sidenav.vue";
import Appbar from "@/components/partials/appbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <Appbar></Appbar>
  <router-view></router-view>
</template>
