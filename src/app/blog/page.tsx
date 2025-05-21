import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Clock, MessageSquare, ThumbsUp, User } from "lucide-react";

// 模拟的博客文章数据
const allPosts = [
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
  {
    id: 4,
    title: "敏捷团队中的有效沟通策略",
    excerpt: "沟通是敏捷团队成功的关键因素，本文探讨了敏捷团队中常见的沟通挑战及解决方案。",
    author: "赵沟通",
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
    author: "钱回顾",
    date: "2025-05-16",
    readTime: "9分钟",
    category: "Scrum实践",
    tags: ["Sprint回顾", "持续改进", "团队反思"],
    commentCount: 20,
    likeCount: 110,
    image: "https://www.pexels.com/zh-cn/photo/7148386/download/?w=1920&h=1280",
  },
  {
    id: 6,
    title: "敏捷估算技巧：故事点与理想天数",
    excerpt: "准确的工作量估算对于Sprint规划至关重要，本文介绍了常用的敏捷估算方法及其应用场景。",
    author: "孙估算",
    date: "2025-05-14",
    readTime: "11分钟",
    category: "敏捷开发",
    tags: ["估算", "故事点", "计划扑克"],
    commentCount: 16,
    likeCount: 92,
    image: "https://www.pexels.com/zh-cn/photo/7148370/download/?w=1920&h=1280",
  },
  {
    id: 7,
    title: "从传统项目管理转向敏捷：经验与教训",
    excerpt: "许多组织在从传统瀑布模型转向敏捷方法时面临挑战，本文分享了成功转型的关键因素。",
    author: "周转型",
    date: "2025-05-12",
    readTime: "14分钟",
    category: "项目管理",
    tags: ["敏捷转型", "变革管理", "组织文化"],
    commentCount: 22,
    likeCount: 134,
    image: "https://www.pexels.com/zh-cn/photo/7148369/download/?w=1920&h=1280",
  },
  {
    id: 8,
    title: "敏捷开发中的技术实践：持续集成与持续交付",
    excerpt: "技术实践是敏捷开发的重要支柱，本文详细介绍了CI/CD在敏捷团队中的应用及最佳实践。",
    author: "吴技术",
    date: "2025-05-08",
    readTime: "13分钟",
    category: "技术实践",
    tags: ["CI/CD", "DevOps", "自动化测试"],
    commentCount: 19,
    likeCount: 105,
    image: "https://www.pexels.com/zh-cn/photo/7148368/download/?w=1920&h=1280",
  },
  {
    id: 9,
    title: "远程敏捷团队的协作工具与技巧",
    excerpt: "远程工作环境下的敏捷实践需要特别的工具和方法支持，本文分享了远程敏捷团队的成功经验。",
    author: "郑远程",
    date: "2025-05-06",
    readTime: "10分钟",
    category: "团队协作",
    tags: ["远程工作", "协作工具", "虚拟站会"],
    commentCount: 14,
    likeCount: 88,
    image: "https://www.pexels.com/zh-cn/photo/7148367/download/?w=1920&h=1280",
  },
  {
    id: 10,
    title: "敏捷领导力：如何带领高绩效团队",
    excerpt: "敏捷环境中的领导角色与传统管理有很大不同，本文探讨了敏捷领导者的核心素质和实践方法。",
    author: "王领导",
    date: "2025-05-04",
    readTime: "12分钟",
    category: "个人成长",
    tags: ["领导力", "团队建设", "敏捷教练"],
    commentCount: 25,
    likeCount: 142,
    image: "https://www.pexels.com/zh-cn/photo/7148366/download/?w=1920&h=1280",
  },
];

// 所有分类
const categories = [
  "全部",
  "Scrum实践",
  "敏捷开发",
  "项目管理",
  "团队协作",
  "技术实践",
  "个人成长",
];

export default function BlogPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
        <h1 className="text-4xl font-bold">博客文章</h1>
        <p className="text-muted-foreground max-w-[700px]">
          探索Scrum敏捷开发的最新文章、教程和见解，提升你的项目管理和团队协作技能
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* 主内容区 */}
        <div className="w-full md:w-3/4">
          <Tabs defaultValue="全部" className="w-full">
            <TabsList className="mb-6 flex flex-wrap h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="mb-2">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="space-y-6">
                {(category === "全部"
                  ? allPosts
                  : allPosts.filter((post) => post.category === category)
                ).map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-[200px] md:h-auto">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>{post.category}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {post.date}
                          </span>
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-muted-foreground mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3.5 w-3.5" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-3.5 w-3.5" />
                            <span>{post.commentCount}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-3.5 w-3.5" />
                            <span>{post.likeCount}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* 侧边栏 */}
        <div className="w-full md:w-1/4 space-y-6">
          {/* 搜索框 */}
          <Card>
            <CardHeader>
              <CardTitle>搜索</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex">
                <input
                  type="text"
                  placeholder="搜索文章..."
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="ml-2">搜索</Button>
              </div>
            </CardContent>
          </Card>

          {/* 热门标签 */}
          <Card>
            <CardHeader>
              <CardTitle>热门标签</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Scrum", "敏捷开发", "Sprint", "产品负责人", "团队协作", "持续改进", "估算", "远程工作", "领导力"].map(
                  (tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {/* 热门文章 */}
          <Card>
            <CardHeader>
              <CardTitle>热门文章</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {allPosts
                .sort((a, b) => b.likeCount - a.likeCount)
                .slice(0, 5)
                .map((post, index) => (
                  <div key={post.id}>
                    {index > 0 && <Separator className="my-2" />}
                    <Link href={`/blog/${post.id}`}>
                      <div className="flex gap-2">
                        <div className="w-16 h-16 flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium line-clamp-2 hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                            <ThumbsUp className="h-3 w-3" />
                            <span>{post.likeCount}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </CardContent>
          </Card>

          {/* 订阅卡片 */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>订阅更新</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                获取最新文章和资源
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="您的电子邮箱"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                />
                <Button className="w-full" variant="secondary">
                  订阅
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}