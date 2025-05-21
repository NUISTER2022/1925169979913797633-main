import { NextResponse } from "next/server";

// 模拟的博客文章详情数据
const postsDetails = [
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
      id: "author_1",
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
    image: "https://www.pexels.com/zh-cn/photo/7148384/download/?w=1920&h=1280",
    relatedPosts: [2, 5, 7],
  },
  {
    id: "2",
    title: "Sprint计划会议：如何高效制定迭代目标",
    content: `
      <div class="blog-content">
        <h1>Sprint计划会议：如何高效制定迭代目标</h1>
        
        <p>Sprint计划会议是Scrum框架中的关键环节，本文分享了如何组织高效的计划会议，确保团队明确目标并制定可行的迭代计划。</p>
        
        <h2>Sprint计划会议的目的</h2>
        
        <p>Sprint计划会议的主要目的是确定在即将到来的Sprint中要完成什么工作以及如何完成这些工作。具体来说，会议应该回答以下两个问题：</p>
        
        <ul>
          <li>在这个Sprint中能交付什么？</li>
          <li>如何完成所选择的工作？</li>
        </ul>
        
        <p>通过回答这两个问题，团队可以明确Sprint目标，并制定详细的工作计划。</p>
        
        <h2>Sprint计划会议的参与者</h2>
        
        <p>Sprint计划会议的参与者包括：</p>
        
        <ul>
          <li>产品负责人：负责解释产品待办列表项，回答团队的问题，并根据需要调整优先级</li>
          <li>Scrum主管：确保会议按照Scrum框架进行，并帮助团队保持专注</li>
          <li>开发团队：负责评估工作量，确定可以完成的工作，并制定详细的计划</li>
        </ul>
        
        <h2>Sprint计划会议的时间框架</h2>
        
        <p>根据Scrum指南，Sprint计划会议的时间长度取决于Sprint的长度。对于一个月的Sprint，计划会议最多8小时；对于两周的Sprint，计划会议通常为4小时。</p>
        
        <p>会议可以分为两个部分：</p>
        
        <ol>
          <li>第一部分：确定在这个Sprint中要交付什么（约占会议时间的一半）</li>
          <li>第二部分：确定如何完成所选择的工作（约占会议时间的一半）</li>
        </ol>
        
        <h2>高效Sprint计划会议的关键步骤</h2>
        
        <h3>1. 充分准备</h3>
        
        <p>在会议前，产品负责人应该确保产品待办列表已经梳理完毕，优先级明确，并且高优先级的项目已经准备好被开发团队处理。开发团队成员应该提前了解产品待办列表中的高优先级项目，以便在会议中更有效地讨论。</p>
        
        <h3>2. 明确Sprint目标</h3>
        
        <p>Sprint目标是对Sprint期望达成的业务价值的简短描述。它为团队提供了方向，帮助团队在日常工作中做出决策。产品负责人应该在会议开始时提出初步的Sprint目标，然后与团队一起讨论和完善。</p>
        
        <h3>3. 选择产品待办列表项</h3>
        
        <p>基于Sprint目标和团队的历史速度，开发团队从产品待办列表中选择他们认为在即将到来的Sprint中可以完成的项目。在这个过程中，团队可能需要与产品负责人讨论项目的细节、优先级和验收标准。</p>
        
        <h3>4. 估算工作量</h3>
        
        <p>对于选定的产品待办列表项，开发团队需要估算完成每个项目所需的工作量。常用的估算方法包括故事点、理想天数或简单的T恤尺寸（S、M、L、XL）。团队应该基于过去的经验和当前的能力进行估算。</p>
        
        <h3>5. 分解任务</h3>
        
        <p>一旦确定了要在Sprint中完成的产品待办列表项，开发团队需要将这些项目分解为具体的任务。每个任务应该足够小，通常不超过一天的工作量，并且应该明确定义完成的标准。</p>
        
        <h3>6. 制定详细计划</h3>
        
        <p>基于分解的任务，团队制定详细的工作计划，包括谁负责什么任务，以及任务之间的依赖关系。这个计划将成为Sprint待办列表，指导团队在Sprint期间的日常工作。</p>
        
        <h3>7. 确认承诺</h3>
        
        <p>在会议结束前，团队应该确认他们对所选工作的承诺。这意味着团队相信他们可以在Sprint期间完成所选的产品待办列表项，并达到定义的完成标准。</p>
        
        <h2>常见问题及解决方案</h2>
        
        <h3>问题1：会议时间过长</h3>
        
        <p>解决方案：确保产品待办列表项在会议前已经充分梳理，使用时间盒限制讨论时间，将复杂问题放到会议后单独讨论。</p>
        
        <h3>问题2：团队承诺过多</h3>
        
        <p>解决方案：基于历史速度进行计划，留出应对意外情况的缓冲时间，Scrum主管应该帮助团队保持现实的期望。</p>
        
        <h3>问题3：产品待办列表项定义不清</h3>
        
        <p>解决方案：在会议前进行产品待办列表梳理，确保高优先级的项目已经准备好被开发团队处理，包括明确的验收标准和必要的技术细节。</p>
        
        <h2>结论</h2>
        
        <p>高效的Sprint计划会议是成功Sprint的基础。通过明确Sprint目标，选择合适的产品待办列表项，估算工作量，分解任务，并制定详细计划，团队可以为即将到来的Sprint做好充分准备。记住，计划的目的不是预测未来，而是为团队提供一个起点和方向，帮助他们在Sprint期间做出明智的决策。</p>
      </div>
    `,
    author: {
      id: "author_2",
      name: "李计划",
      avatar: "https://www.pexels.com/zh-cn/photo/7149202/download/?w=300&h=300",
      bio: "敏捷项目经理，专注于Scrum实践和团队效能提升，曾主导多个大型敏捷转型项目。",
    },
    date: "2025-05-10",
    readTime: "8分钟",
    category: "敏捷开发",
    tags: ["Sprint", "计划会议", "团队协作"],
    commentCount: 18,
    likeCount: 98,
    image: "https://www.pexels.com/zh-cn/photo/7149165/download/?w=1920&h=1280",
    relatedPosts: [1, 3, 5],
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const post = postsDetails.find((p) => p.id === id);

    if (!post) {
      return NextResponse.json(
        { error: "文章未找到" },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("获取博客详情错误:", error);
    return NextResponse.json(
      { error: "获取博客详情失败" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();
    const { title, content, excerpt, category, tags, image } = body;

    // 验证请求数据
    if (!title || !content || !category) {
      return NextResponse.json(
        { error: "标题、内容和分类不能为空" },
        { status: 400 }
      );
    }

    // 检查文章是否存在
    const postIndex = postsDetails.findIndex((p) => p.id === id);
    if (postIndex === -1) {
      return NextResponse.json(
        { error: "文章未找到" },
        { status: 404 }
      );
    }

    // 在实际应用中，这里应该:
    // 1. 验证用户是否已登录
    // 2. 验证用户是否有权限编辑该文章
    // 3. 更新数据库中的文章数据
    
    // 模拟更新成功
    const updatedPost = {
      ...postsDetails[postIndex],
      title,
      content,
      excerpt: excerpt || title,
      category,
      tags: tags || postsDetails[postIndex].tags,
      image: image || postsDetails[postIndex].image,
    };

    return NextResponse.json(
      { 
        success: true, 
        post: updatedPost,
        message: "文章更新成功" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("更新文章错误:", error);
    return NextResponse.json(
      { error: "更新文章失败，请稍后再试" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // 检查文章是否存在
    const postIndex = postsDetails.findIndex((p) => p.id === id);
    if (postIndex === -1) {
      return NextResponse.json(
        { error: "文章未找到" },
        { status: 404 }
      );
    }

    // 在实际应用中，这里应该:
    // 1. 验证用户是否已登录
    // 2. 验证用户是否有权限删除该文章
    // 3. 从数据库中删除文章数据
    
    // 模拟删除成功
    return NextResponse.json(
      { 
        success: true, 
        message: "文章删除成功" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("删除文章错误:", error);
    return NextResponse.json(
      { error: "删除文章失败，请稍后再试" },
      { status: 500 }
    );
  }
}