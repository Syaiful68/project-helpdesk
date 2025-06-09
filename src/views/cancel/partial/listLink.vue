<script setup>
defineProps({
  list: Object,
});
</script>

<template>
  <li class="breadcrumb-item" v-for="(item, index) in list" :key="index">
    <router-link :to="item.path">{{ item.label }}</router-link>
  </li>
</template>
