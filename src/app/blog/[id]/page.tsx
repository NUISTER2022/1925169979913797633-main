import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MessageSquare, Share2, ThumbsUp, User, Bookmark, Heart } from "lucide-react";
import CommentSection from "@/components/comment-section";

// 模拟的博客文章数据
const posts = [
  {
    id: "1",
    title: "Scrum敏捷开发：从理论到实践的完整指南",
    content: `
      <div class="blog-content">
        <h1>Scrum敏捷开发：从理论到实践的完整指南</h1>
        
        <p>在当今快速变化的软件开发环境中，Scrum已成为最受欢迎的敏捷框架之一。本文将深入探讨Scrum的核心概念、角色分工、流程设计以及实际应用案例，帮助团队更好地实施敏捷开发方法。</p>
        
        <h2>什么是Scrum？</h2>
        
        <p>Scrum是一个轻量级的敏捷框架，用于管理和控制迭代式和增量式的产品开发。它不是一个完整的产品开发方法论，而是一个框架，团队可以在其中应用各种流程和技术。</p>
        
        <p>Scrum的核心理念包括：</p>
        
        <ul>
          <li>透明性：确保过程中的关键方面对所有人可见</li>
          <li>检视：定期检查Scrum工件和进度</li>
          <li>适应：如果发现偏差，及时调整流程或产品</li>
        </ul>
        
        <h2>Scrum的三大角色</h2>
        
        <h3>1. 产品负责人（Product Owner）</h3>
        
        <p>产品负责人是连接业务与开发团队的桥梁，主要职责包括：</p>
        
        <ul>
          <li>定义和管理产品待办列表（Product Backlog）</li>
          <li>确保产品待办列表项的优先级排序</li>
          <li>确保开发团队理解产品待办列表项</li>
          <li>代表利益相关者的利益</li>
        </ul>
        
        <h3>2. Scrum主管（Scrum Master）</h3>
        
        <p>Scrum主管是团队的教练和引导者，主要职责包括：</p>
        
        <ul>
          <li>确保团队理解并遵循Scrum理论和实践</li>
          <li>帮助团队消除障碍</li>
          <li>促进团队内部和与外部的沟通</li>
          <li>保护团队免受外部干扰</li>
        </ul>
        
        <h3>3. 开发团队（Development Team）</h3>
        
        <p>开发团队是负责交付产品增量的跨职能团队，主要特点包括：</p>
        
        <ul>
          <li>自组织：团队自己决定如何完成工作</li>
          <li>跨职能：团队拥有完成工作所需的所有技能</li>
          <li>集体负责：整个团队对产品负责，而不是个人</li>
          <li>规模适中：通常3-9人</li>
        </ul>
        
        <h2>Scrum的五个事件</h2>
        
        <h3>1. Sprint</h3>
        
        <p>Sprint是Scrum的核心，是一个固定长度的时间盒（通常为2-4周），在此期间创建一个"完成"的、可用的和可能发布的产品增量。</p>
        
        <h3>2. Sprint计划会议（Sprint Planning）</h3>
        
        <p>在Sprint开始时举行，团队决定在即将到来的Sprint中要完成什么工作以及如何完成这些工作。</p>
        
        <h3>3. 每日站会（Daily Scrum）</h3>
        
        <p>每天举行的15分钟时间盒会议，开发团队同步进度，计划未来24小时的工作，并识别障碍。</p>
        
        <h3>4. Sprint评审会议（Sprint Review）</h3>
        
        <p>在Sprint结束时举行，团队展示完成的工作，收集反馈，并更新产品待办列表。</p>
        
        <h3>5. Sprint回顾会议（Sprint Retrospective）</h3>
        
        <p>在Sprint评审会议之后举行，团队反思过去的Sprint，确定改进点，并制定行动计划。</p>
        
        <h2>Scrum的三个工件</h2>
        
        <h3>1. 产品待办列表（Product Backlog）</h3>
        
        <p>产品待办列表是产品所需的所有功能、需求、增强和修复的有序列表，是产品需求的唯一来源。</p>
        
        <h3>2. Sprint待办列表（Sprint Backlog）</h3>
        
        <p>Sprint待办列表是为当前Sprint选择的产品待办列表项集合，以及交付产品增量和实现Sprint目标的计划。</p>
        
        <h3>3. 产品增量（Increment）</h3>
        
        <p>产品增量是在Sprint中完成的所有产品待办列表项的总和，必须处于可用状态，无论产品负责人是否决定发布它。</p>
        
        <h2>Scrum实施案例分析</h2>
        
        <p>以下是一个成功实施Scrum的案例：</p>
        
        <blockquote>
          某金融科技公司需要开发一个新的移动支付应用。团队采用Scrum框架，将项目分解为两周一个的Sprint。产品负责人与利益相关者紧密合作，创建并优先排序产品待办列表。开发团队在每个Sprint中交付可工作的功能，并通过Sprint评审会议收集用户反馈。通过持续改进，团队在6个月内成功交付了一个功能完善、用户体验良好的应用。
        </blockquote>
        
        <h2>Scrum实施中的常见挑战与解决方案</h2>
        
        <h3>挑战1：产品待办列表管理不善</h3>
        
        <p>解决方案：定期梳理产品待办列表，确保项目优先级清晰，并且每个项目都符合INVEST原则（独立的、可协商的、有价值的、可估算的、小的、可测试的）。</p>
        
        <h3>挑战2：团队自组织能力不足</h3>
        
        <p>解决方案：Scrum主管应该通过教练和引导，帮助团队逐步建立自组织能力，同时管理层需要给予团队足够的信任和空间。</p>
        
        <h3>挑战3：技术债务积累</h3>
        
        <p>解决方案：在产品待办列表中明确包含技术改进项，并在每个Sprint中分配一定比例的时间来处理技术债务。</p>
        
        <h2>结论</h2>
        
        <p>Scrum提供了一个灵活而强大的框架，帮助团队在复杂环境中高效地交付价值。成功实施Scrum需要团队成员、管理层和利益相关者的共同努力和承诺。通过持续学习和改进，团队可以不断提高敏捷能力，更好地应对变化，交付高质量的产品。</p>
        
        <p>记住，Scrum是一个框架，而不是一套严格的规则。每个团队应该根据自己的具体情况和需求，灵活地应用Scrum原则和实践，找到最适合自己的工作方式。</p>
      </div>
    `,
    author: {
      name: "张敏捷",
      avatar: "https://www.pexels.com/zh-cn/photo/7149201/download/?w=300&h=300",
      bio: "资深敏捷教练，10年Scrum实践经验，曾帮助多家企业成功转型敏捷开发。",
    },
    date: "2025-05-15",
    readTime: "12分钟",
    category: "Scrum实践",
    tags: ["Scrum", "敏捷开发", "项目管理"],
    commentCount: 24,
    likeCount: 156,
    relatedPosts: [2, 5, 7],
  },
];

// 模拟的评论数据
const comments = [
  {
    id: 1,
    user: {
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
          name: "张敏捷",
          avatar: "https://www.pexels.com/zh-cn/photo/7149201/download/?w=300&h=300",
        },
        content: "你可以尝试一些互动性强的回顾会议形式，比如'帆船模型'、'4L法则'或'星星法'。我会考虑写一篇关于Sprint回顾会议的专门文章，敬请关注！",
        date: "2025-05-18",
        likes: 10,
      },
    ],
  },
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="container py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
        <p className="mb-6">抱歉，您请求的文章不存在或已被删除。</p>
        <Link href="/blog">
          <Button>返回博客列表</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        {/* 文章头部 */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge>{post.category}</Badge>
            <span className="text-sm text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">作者</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                阅读时间: {post.readTime}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* 文章内容 */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* 文章底部操作 */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <ThumbsUp className="h-4 w-4" />
              <span>点赞 ({post.likeCount})</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Bookmark className="h-4 w-4" />
              <span>收藏</span>
            </Button>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            <span>分享</span>
          </Button>
        </div>

        <Separator className="mb-10" />

        {/* 作者信息 */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>关于作者</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-medium mb-2">{post.author.name}</h3>
                <p className="text-muted-foreground mb-4">{post.author.bio}</p>
                <Button variant="outline" size="sm">
                  查看所有文章
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 评论区 */}
        <CommentSection comments={comments} />

        {/* 相关文章 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">相关文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 2,
                title: "Sprint计划会议：如何高效制定迭代目标",
                excerpt: "Sprint计划会议是Scrum框架中的关键环节，本文分享了如何组织高效的计划会议...",
                image: "https://www.pexels.com/zh-cn/photo/7149165/download/?w=1920&h=1280",
                date: "2025-05-10",
                author: "李计划",
              },
              {
                id: 5,
                title: "如何进行有效的Sprint回顾会议",
                excerpt: "Sprint回顾会议是团队持续改进的重要机会，本文分享了组织高效回顾会议的技巧和工具...",
                image: "https://www.pexels.com/zh-cn/photo/7148386/download/?w=1920&h=1280",
                date: "2025-05-16",
                author: "钱回顾",
              },
              {
                id: 7,
                title: "从传统项目管理转向敏捷：经验与教训",
                excerpt: "许多组织在从传统瀑布模型转向敏捷方法时面临挑战，本文分享了成功转型的关键因素...",
                image: "https://www.pexels.com/zh-cn/photo/7148369/download/?w=1920&h=1280",
                date: "2025-05-12",
                author: "周转型",
              },
            ].map((relatedPost) => (
              <Card key={relatedPost.id} className="overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <Link href={`/blog/${relatedPost.id}`}>
                    <h3 className="font-bold hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </Link>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {relatedPost.date}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {relatedPost.author}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}