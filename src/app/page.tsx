import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, MessageSquare, ThumbsUp, User } from "lucide-react";

// 模拟的特色博客文章数据
const featuredPosts = [
  {
    id: 1,
    title: "Scrum敏捷开发：从理论到实践的完整指南",
    excerpt: "本文详细介绍了Scrum敏捷开发的核心概念、角色分工、流程设计以及实际应用案例，帮助团队更好地实施敏捷开发方法。",
    author: "张敏捷",
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
    author: "李计划",
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
    author: "王产品",
    date: "2025-05-05",
    readTime: "10分钟",
    category: "项目管理",
    tags: ["产品负责人", "产品管理", "用户故事"],
    commentCount: 15,
    likeCount: 87,
    image: "https://www.pexels.com/zh-cn/photo/7149046/download/?w=1920&h=1280",
  },
];

// 模拟的最新博客文章数据
const recentPosts = [
  {
    id: 4,
    title: "敏捷团队中的有效沟通策略",
    excerpt: "沟通是敏捷团队成功的关键因素，本文探讨了敏捷团队中常见的沟通挑战及解决方案。",
    author: "赵沟通",
    date: "2025-05-18",
    category: "团队协作",
    image: "https://www.pexels.com/zh-cn/photo/7148477/download/?w=1920&h=1280",
  },
  {
    id: 5,
    title: "如何进行有效的Sprint回顾会议",
    excerpt: "Sprint回顾会议是团队持续改进的重要机会，本文分享了组织高效回顾会议的技巧和工具。",
    author: "钱回顾",
    date: "2025-05-16",
    category: "Scrum实践",
    image: "https://www.pexels.com/zh-cn/photo/7148386/download/?w=1920&h=1280",
  },
  {
    id: 6,
    title: "敏捷估算技巧：故事点与理想天数",
    excerpt: "准确的工作量估算对于Sprint规划至关重要，本文介绍了常用的敏捷估算方法及其应用场景。",
    author: "孙估算",
    date: "2025-05-14",
    category: "敏捷开发",
    image: "https://www.pexels.com/zh-cn/photo/7148370/download/?w=1920&h=1280",
  },
  {
    id: 7,
    title: "从传统项目管理转向敏捷：经验与教训",
    excerpt: "许多组织在从传统瀑布模型转向敏捷方法时面临挑战，本文分享了成功转型的关键因素。",
    author: "周转型",
    date: "2025-05-12",
    category: "项目管理",
    image: "https://www.pexels.com/zh-cn/photo/7148369/download/?w=1920&h=1280",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 英雄区域 */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  探索Scrum敏捷开发的世界
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  分享敏捷开发经验、项目管理技巧和个人成长故事，帮助你在软件开发和团队协作中取得更大成功。
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/blog">
                  <Button size="lg" className="gap-1.5">
                    浏览文章
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="lg" variant="outline">
                    加入社区
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Scrum敏捷开发"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="https://www.pexels.com/zh-cn/photo/7147656/download/?w=1920&h=1280"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 特色文章 */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                特色文章
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                精选高质量的Scrum和敏捷开发文章，助你深入理解敏捷方法论
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    alt={post.title}
                    className="object-cover w-full h-full"
                    height="225"
                    src={post.image}
                    width="400"
                  />
                  <Badge className="absolute top-2 right-2">{post.category}</Badge>
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="line-clamp-2 hover:text-primary">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>{post.commentCount}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3.5 w-3.5" />
                      <span>{post.likeCount}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm">
                      阅读更多
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                查看所有文章
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 最新文章 */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                最新文章
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                保持更新，了解Scrum和敏捷开发领域的最新动态
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            {recentPosts.map((post) => (
              <Card key={post.id} className="flex overflow-hidden">
                <div className="w-1/3">
                  <img
                    alt={post.title}
                    className="object-cover w-full h-full"
                    src={post.image}
                  />
                </div>
                <div className="w-2/3 flex flex-col">
                  <CardHeader className="flex-1 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 hover:text-primary">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      <span>{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm">
                        阅读
                      </Button>
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 分类浏览 */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                按分类浏览
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                探索不同领域的专业内容，找到你感兴趣的主题
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Scrum实践",
                description: "Scrum框架实践与案例分析",
                icon: "📊",
                path: "/categories/scrum",
              },
              {
                title: "敏捷开发",
                description: "敏捷开发方法论与最佳实践",
                icon: "🔄",
                path: "/categories/agile",
              },
              {
                title: "项目管理",
                description: "项目管理技巧与工具使用",
                icon: "📝",
                path: "/categories/project-management",
              },
              {
                title: "个人成长",
                description: "职业发展与个人能力提升",
                icon: "🚀",
                path: "/categories/personal-growth",
              },
            ].map((category, index) => (
              <Link key={index} href={category.path}>
                <Card className="h-full transition-colors hover:bg-muted/50">
                  <CardHeader>
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-between">
                      浏览文章
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 订阅区域 */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                订阅我们的通讯
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                获取最新的Scrum和敏捷开发文章、教程和资源，直接发送到您的邮箱
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                  placeholder="输入您的电子邮箱"
                  type="email"
                />
                <Button type="submit" variant="secondary">
                  订阅
                </Button>
              </form>
              <p className="text-xs text-primary-foreground/80">
                我们尊重您的隐私，不会向第三方分享您的信息。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}