<template>
  <div class="p-2">
    <Image :src="image.secure_url" :alt="image.public_id" width="350" preview />
  </div>
</template>

<script setup lang="ts">
import type { Image as IImage } from "@/functions/responses.types";
import Image from "primevue/image";

defineProps<{ image: IImage }>();
</script>
