import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Cookie政策 | Cube海外仓",
  description: "了解Cube海外仓网站如何使用Cookie和类似技术。",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#1a1f2e] to-[#2d3a4f] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Cookie政策</h1>
            <p className="text-white/70">Last Updated: 2024-01-01</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. 什么是Cookie？</h2>
              <p className="text-muted-foreground mb-4">
                Cookie是存储在您设备上的小型文本文件，当您访问网站时由网站服务器发送到您的浏览器。Cookie帮助网站记住您的偏好设置、登录状态等信息，使您的浏览体验更加便捷。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. 我们使用的Cookie类型</h2>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.1 必要性Cookie</h3>
              <p className="text-muted-foreground mb-4">
                这些Cookie对网站的基本功能至关重要，无法关闭。它们通常用于响应您的操作请求，如设置隐私偏好、登录或填写表单。
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Cookie名称</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">用途</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">有效期</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">session_id</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">维持用户会话</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">会话结束</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">csrf_token</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">安全验证</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">会话结束</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">cookie_consent</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">记录Cookie同意状态</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">1年</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.2 功能性Cookie</h3>
              <p className="text-muted-foreground mb-4">
                这些Cookie使网站能够提供增强的功能和个性化服务。它们可能由我们或我们的第三方服务提供商设置。
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Cookie名称</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">用途</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">有效期</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">language</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">记住语言偏好</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">1年</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">timezone</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">时区设置</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">1年</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.3 分析性Cookie</h3>
              <p className="text-muted-foreground mb-4">
                这些Cookie帮助我们了解访客如何与网站互动，收集和报告匿名统计信息。我们使用这些数据改进网站性能和用户体验。
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Cookie名称</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">提供商</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">用途</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">有效期</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">_ga</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Google Analytics</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">区分用户</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">2年</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">_gid</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Google Analytics</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">区分用户</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">24小时</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">_gat</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Google Analytics</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">限制请求频率</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">1分钟</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.4 营销Cookie</h3>
              <p className="text-muted-foreground mb-4">
                这些Cookie用于跟踪访客的浏览行为，以便展示与其相关的广告。这些Cookie通常由第三方广告网络设置。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. 如何管理Cookie</h2>
              <p className="text-muted-foreground mb-4">
                您可以通过以下方式管理Cookie偏好：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>浏览器设置：</strong>大多数浏览器允许您通过设置拒绝或删除Cookie</li>
                <li><strong>Cookie横幅：</strong>首次访问时，您可以通过我们的Cookie同意横幅选择接受或拒绝非必要Cookie</li>
                <li><strong>选择退出：</strong>访问 <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics选择退出</a></li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">主流浏览器Cookie设置指南：</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. 禁用Cookie的影响</h2>
              <p className="text-muted-foreground mb-4">
                请注意，禁用某些Cookie可能会影响网站功能：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>必要性Cookie：禁用可能导致网站无法正常运行</li>
                <li>功能性Cookie：禁用可能导致个性化设置丢失</li>
                <li>分析性Cookie：不会影响网站功能，但会影响我们改进网站的能力</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. 政策更新</h2>
              <p className="text-muted-foreground mb-4">
                我们可能会不时更新本Cookie政策以反映技术变化或法律要求。更新后的版本将在本页面发布。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. 联系我们</h2>
              <p className="text-muted-foreground mb-4">
                如果您对我们的Cookie使用有任何疑问，请联系我们：
              </p>
              <div className="bg-muted/30 rounded-lg p-6 mt-4">
                <p className="text-muted-foreground mb-2"><strong>Cube Distribution Service Ltd</strong></p>
                <p className="text-muted-foreground mb-2">地址：Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</p>
                <p className="text-muted-foreground mb-2">邮箱：contact@thecubedistribution.com</p>
                <p className="text-muted-foreground">电话：+44 161 566 2392 / 7599588577</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
