declare global {
  interface Window {
    cloudinary: any;
  }
}

import { useToast } from "primevue/usetoast";

const cloudinary = window.cloudinary;

export function useCloudinary() {
  const toast = useToast();

  function createUploadWidget() {
    cloudinary.openUploadWidget(
      {
        cloudName: import.meta.env.VITE_APP_CLOUD_NAME,
        uploadPreset: "jrtnyio4",
        cropping: true,
        multiple: false,
        sources: ["local", "url"],
        secure: true,
        croppingAspectRatio: 1200 / (800 - 15),
        showSkipCropButton: false,
        resourceType: "image",
        folder: "samsung_photoframe",
        // inlineContainer: "#uploader",
      },
      (error: any, result: any) => {
        if (error) {
          toast.add({
            severity: "error",
            summary: "Upload failed",
            detail: error,
          });

          console.log(error);
          return;
        }

        toast.add({
          severity: "success",
          summary: "Upload Succeeded",
          detail: result,
        });

        console.log("success", result);
      }
    );
  }

  return { createUploadWidget };
}
