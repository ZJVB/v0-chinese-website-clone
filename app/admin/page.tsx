import { createClient } from "@/lib/supabase/server";
import {
  Image,
  Newspaper,
  Briefcase,
  Factory,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

async function getStats() {
  const supabase = await createClient();
  
  const [banners, news, solutions, industries, warehousing] = await Promise.all([
    supabase.from("hero_banners").select("id", { count: "exact" }),
    supabase.from("news").select("id", { count: "exact" }),
    supabase.from("solutions").select("id", { count: "exact" }),
    supabase.from("industries").select("id", { count: "exact" }),
    supabase.from("warehousing_services").select("id", { count: "exact" }),
  ]);

  return {
    banners: banners.count || 0,
    news: news.count || 0,
    solutions: solutions.count || 0,
    industries: industries.count || 0,
    warehousing: warehousing.count || 0,
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const cards = [
    {
      title: "首页横幅",
      count: stats.banners,
      icon: Image,
      href: "/admin/banners",
      color: "bg-blue-500",
    },
    {
      title: "新闻动态",
      count: stats.news,
      icon: Newspaper,
      href: "/admin/news",
      color: "bg-green-500",
    },
    {
      title: "解决方案",
      count: stats.solutions,
      icon: Briefcase,
      href: "/admin/solutions",
      color: "bg-purple-500",
    },
    {
      title: "行业方案",
      count: stats.industries,
      icon: Factory,
      href: "/admin/industries",
      color: "bg-orange-500",
    },
    {
      title: "仓储服务",
      count: stats.warehousing,
      icon: Warehouse,
      href: "/admin/warehousing",
      color: "bg-teal-500",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">仪表盘</h1>
        <p className="text-gray-500 mt-1">欢迎使用 Cube Cang 内容管理系统</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`inline-flex p-3 rounded-lg ${card.color}`}>
              <card.icon className="h-6 w-6 text-white" />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-gray-900">
                {card.count}
              </div>
              <div className="text-gray-500 mt-1">{card.title}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">快速操作</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/news"
            className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Newspaper className="h-5 w-5 text-green-500" />
            <span>添加新闻</span>
          </Link>
          <Link
            href="/admin/banners"
            className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Image className="h-5 w-5 text-blue-500" />
            <span>管理横幅</span>
          </Link>
          <Link
            href="/admin/solutions"
            className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Briefcase className="h-5 w-5 text-purple-500" />
            <span>编辑方案</span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-primary">查看网站前台</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
