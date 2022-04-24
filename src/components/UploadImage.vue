<template>
  <section>
    <div class="flex align-items-center h-full relative">
      <div class="mask absolute left-0 top-0 w-full h-full"></div>
      <div class="container z-2 flex flex-column align-items-center">
        <h2 class="text-6xl align-self-start m-3">Upload a photo!</h2>
        <Button
          icon="pi pi-upload"
          class="p-4 p-button-rounded p-button-lg"
          @click="createUploadWidget"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCloudinary } from "../hooks/cloudinary";

const { createUploadWidget } = useCloudinary();
</script>

<style scoped lang="scss">
section {
  height: 500px;
  background-image: url("@/assets/forest.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
}
.mask {
  background-image: linear-gradient(rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.5));
}
</style>
