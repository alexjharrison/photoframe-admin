import { reactive, ref } from "vue";
import type {
  ErrorResponse,
  Image,
  RequestResponse,
} from "../functions/responses.types";
import { useFetch } from "@vueuse/core";

const images: Image[] = reactive([]);
const error = ref<ErrorResponse>();
const cloudFunc = (func: string) => `/.netlify/functions/${func}`;

export function useStore() {
  async function fetchImages(): Promise<void> {
    try {
      const { data: resources } = await useFetch<RequestResponse>(
        cloudFunc("fetch-photos")
      ).json();

      if (!resources.value?.resources) return;

      // resources.value = resources.value.sort((a, b) => a);

      images.splice(0, images.length, ...resources.value.resources);
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

  return { fetchImages, deleteImage, updateMetadata, images, error };
}
