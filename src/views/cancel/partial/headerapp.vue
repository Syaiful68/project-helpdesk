<script setup>
//
import List from "./listLink.vue";
defineProps({
  items: Object,
});
</script>

<template>
  <div class="page-header d-print-none" aria-label="Page header">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <!-- Page pre-title -->
          <div class="mb-1">
            <ol class="breadcrumb" aria-label="breadcrumbs">
              <List :list="items[0].list" />
            </ol>
          </div>
          <h2 class="page-title">
            <span class="text-truncate">{{ items[0].name }}</span>
          </h2>
        </div>
        <!-- Page title actions -->
        <div class="col-auto ms-auto d-print-none">
          <div class="btn-list">
            <button
              type="button"
              @click="$emit('open')"
              class="btn btn-primary btn-5 d-none d-sm-inline-block"
              data-bs-toggle="modal"
              data-bs-target="#modal-report"
            >
              <!-- Download SVG icon from http://tabler.io/icons/icon/plus -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-2"
              >
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
              Create
            </button>
          </div>
          <!-- BEGIN MODAL -->
          <!-- END MODAL -->
        </div>
      </div>
    </div>
  </div>
</template>
