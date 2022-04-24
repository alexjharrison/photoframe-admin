import type { Handler } from "@netlify/functions";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.VITE_APP_CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export const handler: Handler = async (_event, _context) => {
  return cloudinary.api
    .resources({
      type: "upload",
      prefix: "samsung_photoframe",
      image_metadata: true,
    })
    .then((resources: any) => ({
      statusCode: 200,
      body: JSON.stringify(resources),
    }))
    .catch((e: any) => ({
      statusCode: e.error.http_code,
      body: JSON.stringify(e),
    }));
};
