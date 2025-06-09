<script setup>
//
import MenuItem from "@/components/partials/itemMenu.vue";
</script>

<template>
  <header class="navbar navbar-expand-md d-none d-lg-flex d-print-none">
    <div class="container-xl">
      <!-- BEGIN NAVBAR TOGGLER -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
        aria-controls="navbar-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- END NAVBAR TOGGLER -->
      <div class="navbar-nav flex-row order-md-last">
        <div class="nav-item dropdown">
          <a
            href="#"
            class="nav-link d-flex lh-1 p-0 px-2"
            data-bs-toggle="dropdown"
            aria-label="Open user menu"
          >
            <span
              class="avatar avatar-sm"
              style="background-image: url(./static/avatars/000m.jpg)"
            >
            </span>
            <div class="d-none d-xl-block ps-2">
              <div>test</div>
              <div class="mt-1 small text-secondary">Developer</div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <div class="dropdown-divider"></div>
            <a href="./settings.html" class="dropdown-item">Settings</a>
            <a href="./sign-in.html" class="dropdown-item">Logout</a>
          </div>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbar-menu">
        <!-- BEGIN NAVBAR MENU -->
        <ul class="navbar-nav">
          <MenuItem />
        </ul>
        <!-- END NAVBAR MENU -->
      </div>
    </div>
  </header>
</template>
