"use server";

import { Person } from "@/types/person";
import { fetcher } from "./fetcher";

export const register = async (data: { name: string; email: string; stakeHolders: string }) => {
  const response = await fetcher<number>("/api/rmit/register", {
    cache: "no-cache",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "0192d13e-78aa-7229-8a14-55bd9c28f427",
    },
  });

  return response;
};

export const getDetail = async (code: number | string) => {
  const response = await fetcher<Person>(`/api/rmit/detail?code=${code}`, {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "0192d13e-78aa-7229-8a14-55bd9c28f427",
    },
  });

  return response.result;
};

export const submitBooth = async (data: { booth: number; body: string }) => {
  const response = await fetcher<number>(`/api/rmit/booth${data.booth}`, {
    cache: "no-cache",
    method: "POST",
    body: data.body,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "0192d13e-78aa-7229-8a14-55bd9c28f427",
    },
  });

  return response;
};
