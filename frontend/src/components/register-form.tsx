"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  email: z.email({ message: "Please enter a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

function RegisterForm() {
  const [serverMessage, setServerMessage] = useState<string>("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const registerMutation = useMutation({
    mutationFn: async (payload: z.infer<typeof formSchema>) => {
      const backendUrl = (globalThis as any).process?.env?.BACKEND_URL || ""
      const res = await axios.post(`${backendUrl}/user/register`, payload)
      return res.data
    },
    onSuccess: (data) => {
      setServerMessage(data?.message || "Registered successfully")
      form.reset()
    },
    onError: (err: unknown) => {
      if (axios.isAxiosError(err)) {
        setServerMessage(err.response?.data?.message || "Registration failed")
      } else {
        setServerMessage("Registration failed")
      }
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setServerMessage("")
    registerMutation.mutate(values)
  }

  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {serverMessage && (
            <Label className={registerMutation.isSuccess ? "text-green-600" : "text-red-600"}>
              {serverMessage}
            </Label>
          )}

          <Button className="w-full" type="submit" disabled={registerMutation.isPending}>
            {registerMutation.isPending ? "Registering..." : "Sign Up"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default RegisterForm