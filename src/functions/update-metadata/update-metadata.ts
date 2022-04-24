import type { Handler } from "@netlify/functions";
import { cloudinary } from "../config";
import type { ErrorResponse, RequestResponse } from "../responses.types";
import { parse } from "querystring";

export const handler: Handler = async (event, _context) => {
  const { id, index } = JSON.parse(event.body || "");
  console.log(event.body);

  if (!id || !index || event.httpMethod !== "POST")
    return {
      statusCode: 404,
      body: "Messed up",
    };

  return cloudinary.uploader
    .explicit(id as string, {
      type: "upload",
      context: `index=${index}`,
    })
    .then((resources: RequestResponse) => ({
      statusCode: 200,
      body: JSON.stringify(resources),
    }))
    .catch((e: ErrorResponse) => ({
      statusCode: 400,
      body: JSON.stringify(e),
    }));
};
