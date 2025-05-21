import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 验证请求数据
    if (!email || !password) {
      return NextResponse.json(
        { error: "邮箱和密码不能为空" },
        { status: 400 }
      );
    }

    // 在实际应用中，这里应该:
    // 1. 从数据库查询用户
    // 2. 验证密码是否匹配
    // 3. 生成JWT或会话令牌
    
    // 模拟登录成功
    return NextResponse.json(
      { 
        success: true, 
        user: {
          id: "user_123",
          username: "demo_user",
          email: email,
          avatar: "https://www.pexels.com/zh-cn/photo/7149201/download/?w=300&h=300",
        },
        token: "mock_jwt_token_123456789" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("登录错误:", error);
    return NextResponse.json(
      { error: "登录失败，请检查您的凭据" },
      { status: 500 }
    );
  }
}