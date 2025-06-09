<script setup>
//
import Api from "@/utils/Api";
import { reactive, ref } from "vue";

const formData = reactive({
  resi: null,
  description: null,
});

const errs = ref([]);

const submitCancel = async () => {
  await Api.post("/cancel", formData)
    .then((res) => {
      console.log(res);
    })
    .catch((errors) => {
      console.log(errors);
      if (errors.status === 442) {
        errs.value = errors;
      }
    });
};
</script>

<template>
  <div class="modal modal-blur" id="exampleModal" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            @click="$emit('close')"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="submitCancel">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Resi</label>
              <input
                type="text"
                class="form-control"
                v-model="formData.resi"
                :class="{ 'is-invalid': errs.resi }"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <input
                type="text"
                class="form-control"
                v-model="formData.description"
                :class="{ 'is-invalid': errs.description }"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              @click="$emit('close')"
              class="btn me-auto"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: block;
}
</style>
