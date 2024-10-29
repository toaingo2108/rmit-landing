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
import { Slider } from "@/components/ui/slider";
import { submitBooth } from "@/lib/api";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Indicator } from "@radix-ui/react-radio-group";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useLocalStorage } from "usehooks-ts";
import { z } from "zod";

const FormSchema = z.object({
  slider: z.number().int().min(1).max(10),
  answer: z.string().min(0),
});

const BoothForm = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      slider: 10,
      answer: "",
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
      booth: 7,
      body: JSON.stringify({
        code: id,
        question7: `${data.slider}${data.answer ? `: ${data.answer}` : ""}`,
      }),
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 mt-6 flex-1 flex flex-col pb-10"
      >
        <div className="flex-1 flex flex-col space-y-4">
          <p className="text-rmit text-sm px-4">
            On a scale of 1 to 10, how would you rate your experience with our event?
          </p>

          <FormField
            control={form.control}
            name="slider"
            render={({ field }) => (
              <FormItem className="px-4 w-full">
                <div className="grid grid-cols-10 w-full text-rmit text-lg">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={`slider-${i + 1}`}
                      className={cn(
                        "text-center",
                        field.value === i + 1 && "font-bold text-primary"
                      )}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                <FormControl>
                  <Slider
                    defaultValue={[field.value]}
                    max={10}
                    min={1}
                    step={1}
                    onChange={(e: any) => field.onChange(+e.target.value)}
                    className="w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem className="px-4">
                <FormLabel>Please specify your thoughts on the event</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your opinion"
                    {...field}
                    className="w-full placeholder:text-white border-none text-white bg-rmit"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-center select-none pointer-events-none">
            <Image
              src="/images/objects-intro.png"
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
              className="w-1/3 object-cover"
              priority
            />
          </div>
          <div className="flex justify-center flex-shrink-0">
            <LoadingButton
              loading={mutation.isLoading}
              type="submit"
              className="w-[60%] flex-shrink-0 rounded-full"
            >
              SUBMIT
            </LoadingButton>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default BoothForm;
