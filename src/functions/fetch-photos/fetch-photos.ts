import type { Handler } from "@netlify/functions";
import type { ErrorResponse, RequestResponse } from "../responses.types";
import { cloudinary } from "../config";

export const handler: Handler = async (_event, _context) => {
  return cloudinary.api
    .resources({
      type: "upload",
      prefix: "samsung_photoframe",
      context: true,
    })
    .then((resources: RequestResponse) => ({
      statusCode: 200,
      body: JSON.stringify(resources),
    }))
    .catch((e: ErrorResponse) => ({
      statusCode: e.error.http_code,
      body: JSON.stringify(e),
    }));
};
