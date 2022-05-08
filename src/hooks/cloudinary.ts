declare global {
  interface Window {
    cloudinary: any;
  }
}

import { useToast } from "primevue/usetoast";
import { useStore } from "./store";

const cloudinary = window.cloudinary;

export function useCloudinary() {
  const toast = useToast();
  const { fetchImages, images } = useStore();

  function createUploadWidget() {
    cloudinary.openUploadWidget(
      {
        cloudName: import.meta.env.VITE_APP_CLOUD_NAME,
        uploadPreset: "jrtnyio4",
        cropping: true,
        multiple: false,
        sources: ["local", "url"],
        secure: true,
        croppingAspectRatio: 1280 / (800 - 15),
        showSkipCropButton: false,
        resourceType: "image",
        folder: "samsung_photoframe",
        maxImageWidth: 1400,
        maxImageHeight: 1000,
        croppingValidateDimensions: true,
        prepareUploadParams: (cb: any, params: any) => {
          cb({ ...params, context: `index=${images.length}` });
        },
        // inlineContainer: "#uploader",
      },
      async (error: any, result: any) => {
        if (error) {
          // toast.add({
          //   severity: "error",
          //   summary: "Upload failed",
          //   detail: error,
          // });

          console.log(error);
          return;
        }

        // toast.add({
        //   severity: "success",
        //   summary: "Upload Succeeded",
        //   detail: result,
        // });

        fetchImages();
      }
    );
  }

  return { createUploadWidget };
}
