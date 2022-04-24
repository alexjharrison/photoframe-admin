<template>
  <div>
    <app-header />
    <upload-image />
    <image-list-header />
    <image-list-sortable />
    <div v-if="!inOriginalOrder">
      <button @click="updateMetadata">Save Current Order</button>
      <button @click="resetOrder">Reset Order</button>
    </div>
    <draggable
      v-model:list="images"
      @start="drag = true"
      @end="drag = false"
      item-key="public_id"
      class="flex flex-wrap"
    >
      <template #item="{ element: image }">
        <preview-box :image="image" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import { useStore } from "./hooks/store";
import draggable from "vuedraggable";
import PreviewBox from "./components/PreviewBox.vue";
import { ref } from "vue";
import UploadImage from "@/components/UploadImage.vue";
import ImageListHeader from "@/components/ImageListHeader.vue";
import ImageListSortable from "@/components/ImageListSortable.vue";

const { fetchImages, images, inOriginalOrder, updateMetadata, resetOrder } =
  useStore();

fetchImages();

const drag = ref(false);
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
</style>
