"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { toast } from "sonner";
import { ArrowLeft, Mail } from "lucide-react";

// 定义表单验证模式
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "邮箱不能为空" })
    .email({ message: "请输入有效的邮箱地址" }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 初始化表单
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // 处理表单提交
  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true);
    
    try {
      // 模拟API调用
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // 实际应用中，这里应该调用后端API发送重置密码邮件
      console.log("找回密码数据:", data);
      
      // 模拟发送成功
      toast.success("重置密码链接已发送到您的邮箱");
      setIsSubmitted(true);
    } catch (error) {
      console.error("发送失败:", error);
      toast.error("发送失败，请稍后再试");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex h-screen flex-col items-center justify-center max-w-md">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            找回密码
          </h1>
          <p className="text-sm text-muted-foreground">
            {isSubmitted
              ? "请查看您的邮箱，按照邮件中的指示重置密码"
              : "输入您的邮箱，我们将发送重置密码链接"}
          </p>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-full bg-primary/10 p-6">
              <Mail className="h-12 w-12 text-primary" />
            </div>
            <p className="text-center text-muted-foreground">
              如果该邮箱已注册，您将收到一封包含重置密码链接的邮件。
              请检查您的收件箱和垃圾邮件文件夹。
            </p>
            <Button asChild className="w-full mt-4">
              <Link href="/login">返回登录</Link>
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>邮箱</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="name@example.com"
                          className="pl-10"
                          {...field}
                          disabled={isLoading}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "发送中..." : "发送重置链接"}
              </Button>
            </form>
          </Form>
        )}

        <div className="text-center">
          <Link
            href="/login"
            className="inline-flex items-center text-sm text-primary hover:underline"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            返回登录
          </Link>
        </div>
      </div>
    </div>
  );
}