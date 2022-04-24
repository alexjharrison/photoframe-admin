<template>
  <section class="container">
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
  </section>
</template>

<script setup lang="ts">
import PreviewBox from "./PreviewBox.vue";
import draggable from "vuedraggable";
import { ref } from "vue";
import { useStore } from "@/hooks/store";

const { images } = useStore();

const drag = ref(false);
</script>

<style lang="scss" scoped></style>
