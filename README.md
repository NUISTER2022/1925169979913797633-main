# Scrum博客网站

一个基于Next.js 14开发的Scrum个人博客网站，专注于分享敏捷开发经验、项目管理技巧和个人成长故事。

## 功能特点

### 核心功能
- **用户账号管理**：注册、登录、密码找回
- **博客文章管理**：发布、编辑、删除文章
- **评论系统**：发表评论、回复评论、点赞评论

### 附加功能
- **文章分类**：按不同主题分类浏览文章
- **标签管理**：使用标签组织和筛选内容
- **搜索功能**：快速查找相关文章
- **用户个人中心**：管理个人信息和内容
- **文章点赞和收藏**：互动功能增强用户体验
- **响应式设计**：适配移动端和桌面端
- **深色/浅色模式**：根据用户偏好切换主题

## 技术栈

- **前端框架**：Next.js 14
- **编程语言**：TypeScript
- **样式解决方案**：Tailwind CSS
- **UI组件库**：shadcn/ui (基于Radix UI)
- **状态管理**：React Hooks
- **表单处理**：React Hook Form + Zod
- **动画效果**：Framer Motion
- **图标库**：Lucide React

## 项目结构

```
src/
├── app/                  # Next.js 应用路由
│   ├── api/              # API路由
│   ├── blog/             # 博客相关页面
│   ├── login/            # 登录页面
│   ├── register/         # 注册页面
│   ├── forgot-password/  # 密码找回页面
│   ├── reset-password/   # 密码重置页面
│   ├── layout.tsx        # 根布局组件
│   └── page.tsx          # 首页
├── components/           # 可复用组件
│   ├── ui/               # UI基础组件
│   ├── navbar.tsx        # 导航栏组件
│   ├── footer.tsx        # 页脚组件
│   └── ...               # 其他组件
├── hooks/                # 自定义Hooks
├── lib/                  # 工具函数和库
└── ...
```

## 快速开始

### 环境要求
- Node.js 18.0.0 或更高版本
- pnpm 8.0.0 或更高版本

### 安装依赖
```bash
pnpm install
```

### 开发环境运行
```bash
pnpm run dev
```

### 构建生产版本
```bash
pnpm run build
```

### 启动生产服务器
```bash
pnpm start
```

## 部署指南

### 华为云ECS部署
1. 在华为云ECS服务器上安装Node.js和pnpm
2. 克隆项目代码到服务器
3. 安装依赖：`pnpm install`
4. 构建项目：`pnpm run build`
5. 使用PM2启动服务：`pm2 start npm --name "scrum-blog" -- start`

### CodeArts部署
1. 在CodeArts创建新项目
2. 配置构建流程，使用pnpm作为包管理器
3. 设置构建命令：`pnpm install && pnpm run build`
4. 配置部署环境和目标服务器
5. 触发部署流程

## 贡献指南

1. Fork 项目
2. 创建特性分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add some amazing feature'`
4. 推送到分支：`git push origin feature/amazing-feature`
5. 提交Pull Request

## 许可证

MIT

## 联系方式

- 邮箱：contact@scrumblog.com
- 微信：ScrumBlog