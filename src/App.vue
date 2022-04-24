<template>
  <div>homgfgdsfde</div>
  <header>
    <h1>Carol's Photoframe</h1>
  </header>
  <button @click="createUploadWidget">behold the widget</button>
</template>

<script setup lang="ts">
import { useCloudinary } from "./hooks/cloudinary";

const { createUploadWidget } = useCloudinary();
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
</style>
