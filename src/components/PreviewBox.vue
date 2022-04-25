<template>
  <div class="p-box p-2 relative border-round">
    <Button
      icon="pi pi-minus-circle"
      class="absolute z-2 p-button-rounded p-button-danger p-button-sm btn"
      v-tooltip="'Remove photo'"
      @click="handleDeletePhoto"
    />
    <div id="get-round">
      <Image
        :src="image.secure_url"
        :alt="image.public_id"
        width="200"
        preview
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Image as IImage } from "@/config/responses.types";
import { useStore } from "@/hooks/store";
import Image from "primevue/image";
import { useConfirm } from "primevue/useconfirm";

const props = defineProps<{ image: IImage }>();
const confirm = useConfirm();
const { deleteImage } = useStore();

function handleDeletePhoto(): void {
  confirm.require({
    message: "Are you sure you want to delete this photo?",
    header: "Confirmation",
    icon: "pi pi-exclamation-triangle",
    accept: () => {
      deleteImage(props.image.public_id);
    },
  });
}
</script>

<style scoped lang="scss">
:deep(.p-button) {
  height: 1.8rem !important;
  width: 0 !important;
}

#get-round {
  border-radius: 50px;
}
.btn {
  right: 0;
  top: 0;
}
</style>
