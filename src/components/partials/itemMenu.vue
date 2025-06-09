<script setup>
const Menus = [
  {
    id: 1,
    label: "Dashboard",
    path: "/",
    icon: "fa-solid fa-chart-simple",
  },
  {
    id: 2,
    label: "Cancel",
    path: "/cancel",
    icon: "fa-solid fa-pen-to-square",
  },
  {
    id: 3,
    label: "Couriers",
    path: "/courier",
    icon: "fa-solid fa-car",
  },
];
</script>
<template>
  <li
    v-for="(item, index) in Menus"
    class="nav-item"
    :class="{ active: $route.path === item.path }"
    :key="index"
  >
    <router-link
      class="nav-link"
      :to="item.path"
      :class="{ active: $route.path === item.path }"
    >
      <span class="nav-link-icon d-md-none d-lg-inline-block"
        ><!-- Download SVG icon from http://tabler.io/icons/icon/home -->
        <i :class="item.icon"></i>
      </span>
      <span class="nav-link-title"> {{ item.label }} </span>
    </router-link>
  </li>
</template>
