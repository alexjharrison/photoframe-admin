import type { Handler } from "@netlify/functions";
import type {
  ErrorResponse,
  RequestResponse,
} from "../../config/responses.types";
import { cloudinary } from "../../config/config";

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
      headers: {
        "access-control-allow-origin": "*",
      },
    }))
    .catch((e: ErrorResponse) => ({
      statusCode: e.error.http_code,
      body: JSON.stringify(e),
    }));
};
