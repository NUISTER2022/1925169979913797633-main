import { NextResponse } from "next/server";

// 模拟的评论数据
const commentsData = {
  "1": [
    {
      id: 1,
      user: {
        id: "user_1",
        name: "李明",
        avatar: "https://www.pexels.com/zh-cn/photo/7149202/download/?w=300&h=300",
      },
      content: "非常详细的Scrum指南，对我们团队的敏捷转型很有帮助！特别喜欢关于Scrum角色的详细解释。",
      date: "2025-05-16",
      likes: 12,
      replies: [
        {
          id: 2,
          user: {
            id: "author_1",
            name: "张敏捷",
            avatar: "https://www.pexels.com/zh-cn/photo/7149201/download/?w=300&h=300",
          },
          content: "谢谢你的反馈！很高兴这篇文章对你有帮助。如果有任何问题，欢迎继续交流。",
          date: "2025-05-16",
          likes: 5,
        },
      ],
    },
    {
      id: 3,
      user: {
        id: "user_2",
        name: "王芳",
        avatar: "https://www.pexels.com/zh-cn/photo/7149203/download/?w=300&h=300",
      },
      content: "我们团队刚开始使用Scrum，遇到了一些挑战，特别是在产品待办列表管理方面。文章中提到的解决方案很实用，我们会尝试应用。",
      date: "2025-05-17",
      likes: 8,
      replies: [],
    },
    {
      id: 4,
      user: {
        id: "user_3",
        name: "赵强",
        avatar: "https://www.pexels.com/zh-cn/photo/7149204/download/?w=300&h=300",
      },
      content: "关于Sprint回顾会议，你有没有一些具体的工具或方法推荐？我们的回顾会议经常变得很沉闷。",
      date: "2025-05-18",
      likes: 6,
      replies: [
        {
          id: 5,
          user: {
            id: "author_1",
            name: "张敏捷",
            avatar: "https://www.pexels.com/zh-cn/photo/7149201/download/?w=300&h=300",
          },
          content: "你可以尝试一些互动性强的回顾会议形式，比如'帆船模型'、'4L法则'或'星星法'。我会考虑写一篇关于Sprint回顾会议的专门文章，敬请关注！",
          date: "2025-05-18",
          likes: 10,
        },
      ],
    },
  ],
  "2": [
    {
      id: 1,
      user: {
        id: "user_4",
        name: "张三",
        avatar: "https://www.pexels.com/zh-cn/photo/7149205/download/?w=300&h=300",
      },
      content: "这篇文章对我们团队的Sprint计划会议很有帮助，特别是关于如何分解任务的部分。",
      date: "2025-05-11",
      likes: 7,
      replies: [],
    },
    {
      id: 2,
      user: {
        id: "user_5",
        name: "李四",
        avatar: "https://www.pexels.com/zh-cn/photo/7149206/download/?w=300&h=300",
      },
      content: "我们团队经常在Sprint计划会议上花费太多时间，文章中提到的时间盒限制很有用，我们会尝试应用。",
      date: "2025-05-12",
      likes: 5,
      replies: [
        {
          id: 3,
          user: {
            id: "author_2",
            name: "李计划",
            avatar: "https://www.pexels.com/zh-cn/photo/7149202/download/?w=300&h=300",
          },
          content: "时间盒确实是保持会议高效的好方法。另外，提前做好准备工作也很重要，这样可以减少会议中的讨论时间。",
          date: "2025-05-12",
          likes: 8,
        },
      ],
    },
  ],
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const comments = commentsData[id] || [];

    return NextResponse.json({
      comments,
      pagination: {
        total: comments.length,
      }
    });
  } catch (error) {
    console.error("获取评论错误:", error);
    return NextResponse.json(
      { error: "获取评论失败" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();
    const { content, parentId } = body;

    // 验证请求数据
    if (!content) {
      return NextResponse.json(
        { error: "评论内容不能为空" },
        { status: 400 }
      );
    }

    // 在实际应用中，这里应该:
    // 1. 验证用户是否已登录
    // 2. 验证文章是否存在
    // 3. 将评论数据存储到数据库
    
    // 模拟添加评论
    const comments = commentsData[id] || [];
    
    if (parentId) {
      // 添加回复
      const parentComment = comments.find(c => c.id === parentId);
      if (!parentComment) {
        return NextResponse.json(
          { error: "父评论不存在" },
          { status: 404 }
        );
      }
      
      const newReply = {
        id: Math.max(0, ...parentComment.replies.map(r => r.id)) + 1,
        user: {
          id: "current_user_id",
          name: "当前用户",
          avatar: "https://www.pexels.com/zh-cn/photo/7149205/download/?w=300&h=300",
        },
        content,
        date: new Date().toISOString().split("T")[0],
        likes: 0,
      };
      
      parentComment.replies.push(newReply);
      
      return NextResponse.json(
        { 
          success: true, 
          comment: newReply,
          message: "回复发布成功" 
        },
        { status: 201 }
      );
    } else {
      // 添加新评论
      const newComment = {
        id: comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1,
        user: {
          id: "current_user_id",
          name: "当前用户",
          avatar: "https://www.pexels.com/zh-cn/photo/7149205/download/?w=300&h=300",
        },
        content,
        date: new Date().toISOString().split("T")[0],
        likes: 0,
        replies: [],
      };
      
      if (!commentsData[id]) {
        commentsData[id] = [];
      }
      
      commentsData[id].push(newComment);
      
      return NextResponse.json(
        { 
          success: true, 
          comment: newComment,
          message: "评论发布成功" 
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("发布评论错误:", error);
    return NextResponse.json(
      { error: "发布评论失败，请稍后再试" },
      { status: 500 }
    );
  }
}