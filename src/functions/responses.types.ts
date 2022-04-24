export type ErrorResponse = {
  request_options: {
    protocol: string;
    slashes: boolean;
    auth: string;
    host: string;
    port: null;
    hostname: string;
    hash: null;
    search: string;
    query: string;
    pathname: string;
    path: string;
    href: string;
    method: string;
    headers: {
      "Content-Type": string;
      "User-Agent": string;
    };
  };
  query_params: string;
  error: {
    message: string;
    http_code: number;
  };
};

export type RequestResponse = {
  resources: Image[];
  rate_limit_allowed: number;
  rate_limit_reset_at: string;
  rate_limit_remaining: number;
};

export type Image = {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  url: string;
  secure_url: string;
  context: {
    custom: {
      index: string;
    };
  };
};
