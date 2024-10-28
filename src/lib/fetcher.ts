import { Response } from "@/types/response";

export const HOST_API =
  process.env.NEXT_PUBLIC_SERVER_PROTOCOL + "://" + process.env.NEXT_PUBLIC_SERVER_HOST;

export async function fetcher<T>(url: string, options?: RequestInit): Promise<Response<T>> {
  const response = await fetch(HOST_API + url, options);
  const data = await response.json();
  return data;
}
