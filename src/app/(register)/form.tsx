"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { register } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";

const options = [
  {
    value: "RMIT student",
    label: "RMIT student",
  },
  {
    value: "RMIT staff",
    label: "RMIT staff",
  },
  {
    value: "RMIT alumni",
    label: "RMIT alumni",
  },
  {
    value: "University student (please specify your insitution):",
    label: "University student (please specify your insitution):",
  },
  {
    value: "Industrial professional (please specify your organization):",
    label: "Industrial professional (please specify your organization):",
  },
  {
    value: "Other (please specify)",
    label: "Other (please specify)",
  },
];

const optionsValue = options.map((option) => option.value) as [string, ...string[]];

const FormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  type: z.enum(optionsValue, {
    required_error: "You need to select a notification type.",
  }),
  answer: z.string().min(0),
});

const RegisterForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      type: "",
      answer: "",
    },
  });

  const [id, setId, removeId] = useLocalStorage("RMIT_REGISTERED_ID", "");

  const type = form.watch("type");

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const { answer, type, email, name } = data;
      const res = await register({
        name,
        email,
        stakeHolders: `${type}${answer ? `: ${answer}` : ""}`,
      });

      setId(res.result.toString());
      router.replace("/intro");
    } catch (error) {
      console.error(error);
      removeId();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Full name"
                  {...field}
                  className="w-full placeholder:text-rmit border-none rounded-full"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-4"
                >
                  {options.map(({ value, label }) => (
                    <FormItem key={value} className="flex items-center space-x-1.5 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={value} />
                      </FormControl>
                      <FormLabel className="font-normal text-[11px] text-rmit">{label}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Your answer"
                  {...field}
                  className="w-full placeholder:text-rmit border-none rounded-full"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={type?.includes("RMIT") ? "RMIT email" : "Personal Email"}
                  {...field}
                  className="w-full placeholder:text-rmit border-none rounded-full"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button type="submit" className="w-[72%] flex-shrink-0 rounded-full">
            Register now
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
