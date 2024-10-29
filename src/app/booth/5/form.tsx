"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { submitBooth } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Indicator } from "@radix-ui/react-radio-group";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useLocalStorage } from "usehooks-ts";
import { z } from "zod";

const options: [string, ...string[]] = ["Hands-on", "Knowledge-based", "Both"];

const FormSchema = z.object({
  type: z.enum(options, {
    required_error: "You need to select a notification type.",
  }),
});

const BoothForm = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "",
    },
  });

  const [id] = useLocalStorage("RMIT_REGISTERED_ID", "");

  const mutation = useMutation(submitBooth, {
    onSuccess: () => {
      router.push(`/process?id=${id}`);
      queryClient.invalidateQueries({ queryKey: "detail" });
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    mutation.mutate({
      booth: 5,
      body: JSON.stringify({
        code: id,
        question5: `${data.type}`,
      }),
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 mt-6 flex-1 flex flex-col pb-20"
      >
        <div className="flex-1">
          <p className="text-rmit text-center mb-4">
            Do you prefer hands-on activities or <br /> knowledge-based challenges?
          </p>
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3 ml-8">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {options.map((value) => (
                      <FormItem key={value} className="flex items-center space-x-1.5 space-y-0">
                        <FormControl>
                          <RadioGroupItem className="bg-rmit" value={value}>
                            <Indicator className="flex items-center justify-center w-full h-full !bg-primary rounded-[4px]"></Indicator>
                          </RadioGroupItem>
                        </FormControl>
                        <FormLabel className="font-normal text-lg text-rmit">{value}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-center pt-4 flex-shrink-0">
          <LoadingButton
            loading={mutation.isLoading}
            type="submit"
            className="w-[60%] flex-shrink-0 rounded-full"
          >
            SUBMIT
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default BoothForm;
