import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    // 验证请求数据
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "缺少必要字段" },
        { status: 400 }
      );
    }

    // 在实际应用中，这里应该:
    // 1. 检查用户名和邮箱是否已存在
    // 2. 对密码进行哈希处理
    // 3. 将用户数据存储到数据库
    // 4. 发送验证邮件
    
    // 模拟注册成功
    return NextResponse.json(
      { 
        success: true, 
        message: "注册成功，请查看邮箱进行验证" 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("注册错误:", error);
    return NextResponse.json(
      { error: "注册失败，请稍后再试" },
      { status: 500 }
    );
  }
}