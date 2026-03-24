# 服务器部署指南

## 方式一：Docker 部署（推荐）

### 前置要求
- Docker 20.10+
- Docker Compose 2.0+

### 部署步骤

```bash
# 1. 克隆代码到服务器
git clone <your-repo-url>
cd <project-folder>

# 2. 构建并启动容器
docker-compose up -d --build

# 3. 查看运行状态
docker-compose ps

# 4. 查看日志
docker-compose logs -f
```

网站将在 `http://your-server-ip:3000` 可访问。

### 使用 Nginx 反向代理（可选）

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 方式二：Node.js 直接部署

### 前置要求
- Node.js 18.17+
- pnpm 8+

### 部署步骤

```bash
# 1. 克隆代码
git clone <your-repo-url>
cd <project-folder>

# 2. 安装依赖
pnpm install

# 3. 构建生产版本
pnpm run build

# 4. 启动服务
pnpm run start
```

### 使用 PM2 进程管理（推荐）

```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start npm --name "azworld-website" -- start

# 设置开机自启
pm2 startup
pm2 save

# 查看状态
pm2 status

# 查看日志
pm2 logs azworld-website
```

---

## 方式三：静态导出部署

如果不需要服务端功能，可以导出为静态文件：

1. 修改 `next.config.mjs`：
```js
const nextConfig = {
  output: 'export',
}
```

2. 构建静态文件：
```bash
pnpm run build
```

3. 将 `out` 目录内容上传到任何静态托管服务（Nginx、Apache、CDN 等）

---

## 环境变量

如需配置环境变量，创建 `.env.production` 文件：

```env
# 数据库连接（如使用 Supabase）
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# 其他配置
NODE_ENV=production
```

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm start` | 启动生产服务器 |
| `docker-compose up -d` | Docker 后台启动 |
| `docker-compose down` | 停止 Docker 容器 |
| `docker-compose logs -f` | 查看 Docker 日志 |
