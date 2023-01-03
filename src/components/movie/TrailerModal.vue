<template>
  <Modal ref="baseModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">{{ title }}</h1>
          <button type="button" class="btn-close" @click="cancel"></button>
        </div>
        <div class="modal-body">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/M-sjJmIGClc?autoplay=1"
          ></iframe>
          {{ youtubeKey }}
          <!-- <p v-for="youtube in kyeVal" :key="youtube">
            {{ youtube }}
          </p> -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="cancel">
            Close
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/common/Modal.vue';
import { ref } from 'vue';

export default {
  name: 'ConfirmationModal',
  components: {
    Modal,
  },
  props: {
    title: String,
    kyeVal: String,
    content: Array,
  },
  setup() {
    const baseModal = ref(null);
    const resolvePromise = ref(null);

    const show = () => {
      baseModal.value.open();
      return new Promise((resolve, _) => {
        resolvePromise.value = resolve;
      });
    };

    const confirm = () => {
      baseModal.value.close();
      resolvePromise.value(true);
    };

    const cancel = () => {
      baseModal.value.close();
      resolvePromise.value(false);
    };
    return { baseModal, show, confirm, cancel };
  },
};
</script>

<style></style>
