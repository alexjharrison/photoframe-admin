<template>
  <section class="flex flex-wrap w-full">
    <div
      class="container text-xl my-6 flex-grow-1 flex flex-wrap justify-content-between"
    >
      <div>
        <h2 class="text-5xl my-4 line-height-2">
          <span> Current Photos</span>
        </h2>
        <p class="mb-3">Below are all images displayed in the photoframe</p>
        <p class="m-0">Click on a photo to preview full screen</p>
        <p class="m-0">
          or drag them to change the order in which they are displayed
        </p>
      </div>
      <div class="align-self-end px-3 mt-4" v-if="!inOriginalOrder">
        <Button
          label="Save New Order"
          icon="pi pi-save"
          class="mr-2"
          @click="updateMetadata"
        />
        <Button
          label="Discard Changes"
          icon="pi pi-replay"
          class="mt-2 p-button-warning"
          @click="resetOrder"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "../hooks/store";

const { inOriginalOrder, updateMetadata, resetOrder } = useStore();
</script>

<style lang="scss" scoped>
h2 > span {
  border-bottom: 1px solid var(--text-color);
}
</style>
