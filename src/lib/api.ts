"use server";

import { Person } from "@/types/person";
import { fetcher } from "./fetcher";

export const register = async (data: { name: string; email: string; stakeHolders: string }) => {
  const response = await fetcher<number>("/api/rmit/register", {
    cache: "no-cache",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "x-api-key": "0192d13e-78aa-7229-8a14-55bd9c28f427",
    },
  });

  return response;
};

export const getDetail = async (code: number | string) => {
  const response = await fetcher<Person>(`/api/rmit/detail?code=${code}`, {
    cache: "no-cache",
    headers: {
      "x-api-key": "0192d13e-78aa-7229-8a14-55bd9c28f427",
    },
  });

  return response.result;
};
