"use client";
import React from "react";
import { Card } from "./ui/card";
import {
  Form,
  FormControl, 
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactForm = () => {
  const formSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email({ message: "Email is required" }),
    message: z.string().min(50).max(1000),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = () => {};
  return (
    <Card className="p-4">
      <div>
        <h2 className="font-semibold text-xl">Send me a message!</h2>
        <p className="text-xs">Please fill out the form to send a message.</p>
      </div>

      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email."
                    {...field}
                    type="email"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Message..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-3 justify-end">
            <Button className="" variant="outline" type="reset">
              Reset
            </Button>
            <Button className="" variant="theme" type="submit">
              Send message
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default ContactForm;
