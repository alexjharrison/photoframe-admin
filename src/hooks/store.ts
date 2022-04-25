import { reactive, ref } from "vue";
import type {
  ErrorResponse,
  Image,
  RequestResponse,
} from "../config/responses.types";
import { useFetch } from "@vueuse/core";
import { computed } from "@vue/reactivity";

const images: Image[] = reactive([]);
const originalOrder: string[] = reactive([]);
const inOriginalOrder = computed(() =>
  images.every((image, i) => image.asset_id === originalOrder[i])
);

const resetOrder = () =>
  images.sort(
    (a: Image, b: Image) => +a.context.custom.index - +b.context.custom.index
  );

const error = ref<ErrorResponse>();
const cloudFunc = (func: string) => `/.netlify/functions/${func}`;

export function useStore() {
  async function fetchImages(): Promise<void> {
    try {
      const { data: resources } = await useFetch<RequestResponse>(
        cloudFunc("fetch-photos")
      ).json();

      if (!resources.value?.resources) return;

      images.splice(0, images.length, ...resources.value.resources);
      resetOrder();

      originalOrder.splice(
        0,
        originalOrder.length,
        ...images.map((resource: Image) => resource.asset_id)
      );
    } catch (err) {
      error.value = err as ErrorResponse;
    }
  }

  async function deleteImage(id: string): Promise<void> {
    await useFetch(cloudFunc("delete-photo")).post({ id }).json();
    await fetchImages();
    await updateMetadata();
    await fetchImages();
  }

  async function updateMetadata(): Promise<void> {
    const promises: any[] = [];

    for (const i in images) {
      const promise = useFetch(cloudFunc("update-metadata"))
        .post({ id: images[i].public_id, index: i })
        .json();
      promises.push(promise);
    }
    await Promise.all(promises);
    fetchImages();
  }

  return {
    fetchImages,
    deleteImage,
    updateMetadata,
    images,
    error,
    inOriginalOrder,
    resetOrder,
  };
}
