<script setup>
import Headers from "../cancel/partial/headerapp.vue";

const items = [
  {
    id: 1,
    name: "Cancel List",
    list: [
      { id: 1, label: "Cancel", path: "" },
      { id: 2, label: "Detail", path: "/cancel/detail" },
    ],
  },
];
</script>

<template>
  <div class="page-wrapper">
    <Headers :items="items"></Headers>
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-sm-12 col-lg-6">
            <div class="card">
              <div class="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
