"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
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
import { Eye, EyeOff, Check } from "lucide-react";

// 定义表单验证模式
const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "密码至少需要8个字符" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
        message: "密码必须包含至少一个大写字母、一个小写字母和一个数字",
      }),
    confirmPassword: z.string().min(1, { message: "请确认您的密码" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "两次输入的密码不匹配",
    path: ["confirmPassword"],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 初始化表单
  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // 处理表单提交
  const onSubmit = async (data: ResetPasswordFormValues) => {
    if (!token) {
      toast.error("无效的重置令牌");
      return;
    }

    setIsLoading(true);
    
    try {
      // 模拟API调用
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // 实际应用中，这里应该调用后端API重置密码
      console.log("重置密码数据:", { ...data, token });
      
      // 模拟重置成功
      toast.success("密码重置成功！");
      setIsSuccess(true);
    } catch (error) {
      console.error("重置失败:", error);
      toast.error("密码重置失败，请稍后再试");
    } finally {
      setIsLoading(false);
    }
  };

  // 如果没有token，显示错误信息
  if (!token && !isSuccess) {
    return (
      <div className="container flex h-screen flex-col items-center justify-center max-w-md">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            无效的重置链接
          </h1>
          <p className="text-muted-foreground">
            您使用的密码重置链接无效或已过期。请重新申请密码重置。
          </p>
          <Button asChild>
            <Link href="/forgot-password">返回找回密码</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container flex h-screen flex-col items-center justify-center max-w-md">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            重置密码
          </h1>
          <p className="text-sm text-muted-foreground">
            {isSuccess
              ? "您的密码已成功重置"
              : "请输入您的新密码"}
          </p>
        </div>

        {isSuccess ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-full bg-primary/10 p-6">
              <Check className="h-12 w-12 text-primary" />
            </div>
            <p className="text-center text-muted-foreground">
              您的密码已成功重置。现在可以使用新密码登录您的账号。
            </p>
            <Button asChild className="w-full mt-4">
              <Link href="/login">前往登录</Link>
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>新密码</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="输入您的新密码"
                          {...field}
                          disabled={isLoading}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={isLoading}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            {showPassword ? "隐藏密码" : "显示密码"}
                          </span>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>确认新密码</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="再次输入您的新密码"
                          {...field}
                          disabled={isLoading}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          disabled={isLoading}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            {showConfirmPassword ? "隐藏密码" : "显示密码"}
                          </span>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "重置中..." : "重置密码"}
              </Button>
            </form>
          </Form>
        )}

        {!isSuccess && (
          <div className="text-center">
            <Link
              href="/login"
              className="text-sm text-primary hover:underline"
            >
              返回登录
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}