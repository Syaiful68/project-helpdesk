<script setup>
import { ref } from "vue";

const statusCancel = [
  { label: "Request", name: "request" },
  { label: "Open", name: "open" },
  { label: "Done", name: "Done" },
  { label: "Reject", name: "Reject" },
];
</script>

<template>
  <div class="col-12">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Invoices</h3>
      </div>
      <div class="card-body border-bottom py-3">
        <div class="d-flex">
          <div class="text-secondary">
            Show
            <div class="mx-2 d-inline-block">
              <input
                type="text"
                class="form-control form-control-sm"
                value="8"
                size="3"
                aria-label="Invoices count"
              />
            </div>
            entries
          </div>
          <div class="ms-auto text-secondary">
            Search:
            <div class="ms-2 d-inline-block">
              <input
                type="text"
                class="form-control form-control-sm"
                aria-label="Search invoice"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table
          class="table table-selectable card-table table-vcenter text-nowrap datatable"
        >
          <thead>
            <tr>
              <th class="w-1">
                No.
                <!-- Download SVG icon from http://tabler.io/icons/icon/chevron-up -->
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
                  class="icon icon-sm icon-thick icon-2"
                >
                  <path d="M6 15l6 -6l6 6" />
                </svg>
              </th>
              <th>Resi</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <td>1</td>
            <td>asdamsihdasdu</td>
            <td>Petugas salah input</td>
            <td>
              <button type="button" class="btn btn-1 text-end">Edit</button>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
