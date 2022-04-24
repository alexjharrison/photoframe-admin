<template>
  <div>homgfgdsfde</div>
  <app-header />
  <button @click="createUploadWidget">behold the widget</button>
</template>

<script setup lang="ts">
import { useCloudinary } from "./hooks/cloudinary";
import AppHeader from "./components/AppHeader.vue";

try {
  fetch("/fetch-photos")
    .then((blah) => blah.json())
    .then((val) => console.log({ val }));
} catch (e) {
  console.log({ e });
}

const { createUploadWidget } = useCloudinary();
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
</style>
