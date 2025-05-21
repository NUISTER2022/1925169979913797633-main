import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // 验证请求数据
    if (!email) {
      return NextResponse.json(
        { error: "邮箱不能为空" },
        { status: 400 }
      );
    }

    // 在实际应用中，这里应该:
    // 1. 检查邮箱是否存在于数据库中
    // 2. 生成密码重置令牌
    // 3. 将令牌存储在数据库中，并设置过期时间
    // 4. 发送包含重置链接的邮件
    
    // 模拟发送成功
    return NextResponse.json(
      { 
        success: true, 
        message: "如果该邮箱已注册，重置密码链接已发送" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("密码找回错误:", error);
    return NextResponse.json(
      { error: "发送重置链接失败，请稍后再试" },
      { status: 500 }
    );
  }
}