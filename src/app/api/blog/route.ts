import { NextResponse } from "next/server";

// 模拟的博客文章数据
const posts = [
  {
    id: 1,
    title: "Scrum敏捷开发：从理论到实践的完整指南",
    excerpt: "本文详细介绍了Scrum敏捷开发的核心概念、角色分工、流程设计以及实际应用案例，帮助团队更好地实施敏捷开发方法。",
    author: {
      id: "author_1",
      name: "张敏捷",
      avatar: "https://www.pexels.com/zh-cn/photo/7149201/download/?w=300&h=300",
    },
    date: "2025-05-15",
    readTime: "12分钟",
    category: "Scrum实践",
    tags: ["Scrum", "敏捷开发", "项目管理"],
    commentCount: 24,
    likeCount: 156,
    image: "https://www.pexels.com/zh-cn/photo/7148384/download/?w=1920&h=1280",
  },
  {
    id: 2,
    title: "Sprint计划会议：如何高效制定迭代目标",
    excerpt: "Sprint计划会议是Scrum框架中的关键环节，本文分享了如何组织高效的计划会议，确保团队明确目标并制定可行的迭代计划。",
    author: {
      id: "author_2",
      name: "李计划",
      avatar: "https://www.pexels.com/zh-cn/photo/7149202/download/?w=300&h=300",
    },
    date: "2025-05-10",
    readTime: "8分钟",
    category: "敏捷开发",
    tags: ["Sprint", "计划会议", "团队协作"],
    commentCount: 18,
    likeCount: 98,
    image: "https://www.pexels.com/zh-cn/photo/7149165/download/?w=1920&h=1280",
  },
  {
    id: 3,
    title: "产品负责人的角色与职责：打造成功的产品",
    excerpt: "产品负责人是连接业务与开发团队的桥梁，本文详细阐述了产品负责人的核心职责、必备技能以及如何有效管理产品待办列表。",
    author: {
      id: "author_3",
      name: "王产品",
      avatar: "https://www.pexels.com/zh-cn/photo/7149203/download/?w=300&h=300",
    },
    date: "2025-05-05",
    readTime: "10分钟",
    category: "项目管理",
    tags: ["产品负责人", "产品管理", "用户故事"],
    commentCount: 15,
    likeCount: 87,
    image: "https://www.pexels.com/zh-cn/photo/7149046/download/?w=1920&h=1280",
  },
  {
    id: 4,
    title: "敏捷团队中的有效沟通策略",
    excerpt: "沟通是敏捷团队成功的关键因素，本文探讨了敏捷团队中常见的沟通挑战及解决方案。",
    author: {
      id: "author_4",
      name: "赵沟通",
      avatar: "https://www.pexels.com/zh-cn/photo/7149204/download/?w=300&h=300",
    },
    date: "2025-05-18",
    readTime: "7分钟",
    category: "团队协作",
    tags: ["沟通", "团队协作", "敏捷团队"],
    commentCount: 12,
    likeCount: 76,
    image: "https://www.pexels.com/zh-cn/photo/7148477/download/?w=1920&h=1280",
  },
  {
    id: 5,
    title: "如何进行有效的Sprint回顾会议",
    excerpt: "Sprint回顾会议是团队持续改进的重要机会，本文分享了组织高效回顾会议的技巧和工具。",
    author: {
      id: "author_5",
      name: "钱回顾",
      avatar: "https://www.pexels.com/zh-cn/photo/7149205/download/?w=300&h=300",
    },
    date: "2025-05-16",
    readTime: "9分钟",
    category: "Scrum实践",
    tags: ["Sprint回顾", "持续改进", "团队反思"],
    commentCount: 20,
    likeCount: 110,
    image: "https://www.pexels.com/zh-cn/photo/7148386/download/?w=1920&h=1280",
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const tag = searchParams.get("tag");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    // 根据查询参数过滤文章
    let filteredPosts = [...posts];
    
    if (category && category !== "全部") {
      filteredPosts = filteredPosts.filter(post => post.category === category);
    }
    
    if (tag) {
      filteredPosts = filteredPosts.filter(post => post.tags.includes(tag));
    }
    
    if (search) {
      const searchLower = search.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchLower) || 
        post.excerpt.toLowerCase().includes(searchLower)
      );
    }

    // 分页
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    // 返回结果
    return NextResponse.json({
      posts: paginatedPosts,
      pagination: {
        total: filteredPosts.length,
        page,
        limit,
        totalPages: Math.ceil(filteredPosts.length / limit)
      }
    });
  } catch (error) {
    console.error("获取博客列表错误:", error);
    return NextResponse.json(
      { error: "获取博客列表失败" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, excerpt, category, tags, image } = body;

    // 验证请求数据
    if (!title || !content || !category) {
      return NextResponse.json(
        { error: "标题、内容和分类不能为空" },
        { status: 400 }
      );
    }

    // 在实际应用中，这里应该:
    // 1. 验证用户是否已登录
    // 2. 验证用户是否有权限发布文章
    // 3. 将文章数据存储到数据库
    
    // 模拟创建成功
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      excerpt: excerpt || title,
      author: {
        id: "current_user_id",
        name: "当前用户",
        avatar: "https://www.pexels.com/zh-cn/photo/7149201/download/?w=300&h=300",
      },
      date: new Date().toISOString().split("T")[0],
      readTime: "5分钟",
      category,
      tags: tags || [],
      commentCount: 0,
      likeCount: 0,
      image: image || "https://www.pexels.com/zh-cn/photo/7148384/download/?w=1920&h=1280",
    };

    return NextResponse.json(
      { 
        success: true, 
        post: newPost,
        message: "文章发布成功" 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("发布文章错误:", error);
    return NextResponse.json(
      { error: "发布文章失败，请稍后再试" },
      { status: 500 }
    );
  }
}