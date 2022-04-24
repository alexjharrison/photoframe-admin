import type { Handler } from "@netlify/functions";
import { cloudinary } from "../config";
import type { ErrorResponse, RequestResponse } from "../responses.types";
import { parse } from "querystring";

const bail = () => ({
  statusCode: 404,
  body: "Messed up",
});

export const handler: Handler = async (event, _context) => {
  if (!event.body) return bail();
  const { id } = JSON.parse(event.body);

  if (!id || event.httpMethod !== "POST") {
    console.log("bruh", id, event.body, event.httpMethod);
    return bail();
  }

  return cloudinary.uploader
    .destroy(id as string)
    .then((resources: RequestResponse) => ({
      statusCode: 200,
      body: JSON.stringify(resources),
    }))
    .catch((e: ErrorResponse) => {
      console.log(e);
      return {
        statusCode: 400,
        body: JSON.stringify(e),
      };
    });
};
