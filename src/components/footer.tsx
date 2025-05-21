import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Scrum博客</h3>
            <p className="text-muted-foreground">
              分享敏捷开发与个人成长的专业博客平台，致力于帮助开发者和项目经理提升技能。
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-primary">
                  分类
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  关于
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">分类</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/scrum" className="text-muted-foreground hover:text-primary">
                  Scrum实践
                </Link>
              </li>
              <li>
                <Link href="/categories/agile" className="text-muted-foreground hover:text-primary">
                  敏捷开发
                </Link>
              </li>
              <li>
                <Link href="/categories/project-management" className="text-muted-foreground hover:text-primary">
                  项目管理
                </Link>
              </li>
              <li>
                <Link href="/categories/personal-growth" className="text-muted-foreground hover:text-primary">
                  个人成长
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                邮箱: contact@scrumblog.com
              </li>
              <li className="text-muted-foreground">
                微信: ScrumBlog
              </li>
              <li className="text-muted-foreground">
                地址: 中国北京市海淀区
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Scrum博客. 保留所有权利.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              服务条款
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              隐私政策
            </Link>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary">
              网站地图
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}