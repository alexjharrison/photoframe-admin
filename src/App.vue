<template>
  <div>
    <div>homgfgdsfde</div>
    <app-header />
    <button @click="createUploadWidget">behold the widget</button>
    <div v-for="image in images" :key="image.asset_id">
      <img :src="image.url" width="200" @click="deleteImage(image.public_id)" />
      <ul>
        <li v-for="[key, value] in Object.entries(image)" :key="key">
          <b>{{ key }}</b
          >: {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCloudinary } from "./hooks/cloudinary";
import AppHeader from "./components/AppHeader.vue";
import { useStore } from "./hooks/store";
import { onMounted } from "vue";

const { createUploadWidget } = useCloudinary();
const { fetchImages, images, deleteImage, updateMetadata } = useStore();
fetchImages();
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
</style>
