<script setup>
//
</script>

<template>
  <div class="modal modal-blur" id="exampleModal" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Resi</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label">Description</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn me-auto" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: block;
}
</style>
