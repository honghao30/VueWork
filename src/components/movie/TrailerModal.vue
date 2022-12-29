<template>
  <div v-if="true">
    <!-- <div class="modal-backdrop fade"></div> -->
    <!-- Modal -->
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="headers">
              <h1 class="modal-title fs-5">{{ title }}</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </slot>
          </div>
          <div class="modal-body">
            <slot></slot>
            <!-- <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/kJnmT5BS4SA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> -->
          </div>
          <slot name="actions">
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  title: String,
  id: Number,
});
</script>

<style lang="scss" scoped>
.modal-backdrop.show {
  opacity: 0 !important;
}
</style>
