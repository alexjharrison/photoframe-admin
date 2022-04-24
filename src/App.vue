<template>
  <div>
    <app-header />
    <upload-image />
    <image-list-header />
    <image-list-sortable />
    <app-footer />

    <confirm-dialog />
    <toast />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import { useStore } from "./hooks/store";
import UploadImage from "@/components/UploadImage.vue";
import ImageListHeader from "@/components/ImageListHeader.vue";
import ImageListSortable from "@/components/ImageListSortable.vue";
import AppFooter from "@/components/AppFooter.vue";
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";

const { fetchImages } = useStore();

fetchImages();
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
</style>
