<script setup>
import { ref } from "vue";
import Headers from "../cancel/partial/headerapp.vue";
import ModalCancel from "../cancel/partial/modalCancel.vue";
import TableCancel from "../cancel/partial/tableCancel.vue";

const items = [
  { id: 1, name: "Cancel List", list: [{ id: 1, label: "Cancel", path: "/" }] },
];

const invisibleModal = ref(false);

function showModals() {
  return (invisibleModal.value = true);
}
function closeModals() {
  return (invisibleModal.value = false);
}
</script>

<template>
  <div class="page-wrapper">
    <Headers :items="items" @open="showModals"></Headers>
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-sm col-lg-12">
            <TableCancel></TableCancel>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalCancel v-show="invisibleModal" @close="closeModals" />
</template>
