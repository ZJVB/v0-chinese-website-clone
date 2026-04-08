# Nuxt 4 Website - Cube Distribution

中文官方网站从 Next.js 迁移到 Nuxt 4 的完整 Vue 3 版本。

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
├── app.vue              # 根组件
├── app.config.ts        # Nuxt 应用配置
├── nuxt.config.ts       # Nuxt 配置文件
├── assets/
│   └── css/
│       └── main.css     # 全局样式
├── components/          # 可复用 Vue 组件
├── pages/               # 页面（自动路由）
├── public/              # 静态资源
│   └── images/          # 图片资源
└── utils/               # 工具函数
```

## 页面列表

### 主页面
- `/` - 首页
- `/about` - 关于我们
- `/contact` - 联系我们
- `/technology` - 技术方案
- `/industries` - 行业解决方案
- `/news` - 新闻

### 解决方案
- `/solutions` - 解决方案概览
- `/solutions/fba` - FBA 备货与转运
- `/solutions/d2c` - D2C 一件代发
- `/solutions/b2b` - B2B 零售分销
- `/solutions/returns` - 售后退货
- `/solutions/refurbishment` - 翻新服务
- `/solutions/value-added` - 增值服务

### 仓储服务
- `/warehousing` - 仓储服务概览
- `/warehousing/network` - 仓储网络
- `/warehousing/delivery` - 配送服务
- `/warehousing/logistics` - 物流解决方案
- `/warehousing/freight` - 海运服务

### 法律文件
- `/privacy` - 隐私政策
- `/terms` - 服务条款
- `/cookies` - Cookie 政策

## 技术栈

- **Nuxt 4** - 全栈 Vue 框架
- **Vue 3** - 最新 Vue 版本
- **TypeScript** - 类型安全
- **Tailwind CSS** - 原子化 CSS
- **@nuxt/ui** - UI 组件库
- **Lucide Vue Icons** - 图标库

## 迁移信息

本项目从 Next.js React 架构迁移到 Nuxt 4 Vue 架构。所有功能和页面都已转换为 Vue 单文件组件 (SFC) 格式。

## 部署

项目可部署到 Vercel。在部署前，确保：

1. 所有依赖已安装
2. 生产构建成功：`npm run build`
3. 环境变量已配置（如需要）

## License

私有项目
