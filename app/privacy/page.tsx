import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "隐私政策 | Cube海外仓",
  description: "Cube海外仓隐私政策，了解我们如何收集、使用和保护您的个人信息。",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#1a1f2e] to-[#2d3a4f] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">隐私政策</h1>
            <p className="text-white/70">Last Updated: 2024-01-01</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. 引言</h2>
              <p className="text-muted-foreground mb-4">
                Cube Distribution Service Ltd（以下简称"我们"或"Cube海外仓"）非常重视您的隐私。本隐私政策说明了我们如何收集、使用、披露和保护您的个人信息。使用我们的服务即表示您同意本政策中描述的数据处理方式。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. 我们收集的信息</h2>
              <p className="text-muted-foreground mb-4">我们可能收集以下类型的信息：</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>个人身份信息：</strong>姓名、电子邮件地址、电话号码、公司名称、职位</li>
                <li><strong>业务信息：</strong>公司注册信息、VAT号码、EORI号码</li>
                <li><strong>物流信息：</strong>发货地址、收货地址、货物描述、订单详情</li>
                <li><strong>技术信息：</strong>IP地址、浏览器类型、设备信息、访问时间</li>
                <li><strong>通信记录：</strong>您与我们之间的邮件、电话和在线沟通记录</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. 信息使用目的</h2>
              <p className="text-muted-foreground mb-4">我们使用收集的信息用于：</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>提供和改进我们的仓储、物流和配送服务</li>
                <li>处理订单、发货和退货请求</li>
                <li>与您沟通服务相关事宜</li>
                <li>发送服务更新和营销信息（经您同意）</li>
                <li>遵守法律法规要求</li>
                <li>保护我们的合法权益</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. 信息共享</h2>
              <p className="text-muted-foreground mb-4">我们可能在以下情况下共享您的信息：</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>服务提供商：</strong>与物流合作伙伴、快递公司共享必要的配送信息</li>
                <li><strong>电商平台：</strong>与TEMU、TikTok Shop等平台进行订单数据同步</li>
                <li><strong>法律要求：</strong>响应法律程序或政府要求</li>
                <li><strong>业务转让：</strong>在公司合并或收购情况下</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. 数据安全</h2>
              <p className="text-muted-foreground mb-4">
                我们采取适当的技术和组织措施保护您的个人信息，包括：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>SSL/TLS加密传输</li>
                <li>安全的数据存储系统</li>
                <li>访问控制和身份验证</li>
                <li>定期安全审计</li>
                <li>员工数据保护培训</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. 数据保留</h2>
              <p className="text-muted-foreground mb-4">
                我们仅在实现收集目的所需的时间内保留您的个人信息，或根据法律要求保留。物流记录通常保留7年以符合英国税务和海关要求。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">7. 您的权利</h2>
              <p className="text-muted-foreground mb-4">根据英国GDPR，您享有以下权利：</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>访问权：</strong>获取我们持有的您的个人信息副本</li>
                <li><strong>更正权：</strong>要求更正不准确的信息</li>
                <li><strong>删除权：</strong>在某些情况下要求删除您的信息</li>
                <li><strong>限制处理权：</strong>限制我们处理您的信息</li>
                <li><strong>数据可携权：</strong>以结构化格式获取您的数据</li>
                <li><strong>反对权：</strong>反对某些类型的数据处理</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">8. Cookie使用</h2>
              <p className="text-muted-foreground mb-4">
                我们的网站使用Cookie和类似技术。有关详细信息，请参阅我们的<a href="/cookies" className="text-primary hover:underline">Cookie政策</a>。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">9. 第三方链接</h2>
              <p className="text-muted-foreground mb-4">
                我们的网站可能包含第三方网站的链接。我们对这些网站的隐私做法不承担责任，建议您查阅其各自的隐私政策。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">10. 政策更新</h2>
              <p className="text-muted-foreground mb-4">
                我们可能会不时更新本隐私政策。更新后的版本将在本页面发布，并注明最后更新日期。重大变更时，我们会通过电子邮件或网站公告通知您。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">11. 联系我们</h2>
              <p className="text-muted-foreground mb-4">
                如果您对本隐私政策有任何疑问或希望行使您的数据保护权利，请联系我们：
              </p>
              <div className="bg-muted/30 rounded-lg p-6 mt-4">
                <p className="text-muted-foreground"><strong>邮箱：</strong>contact@thecubedistribution.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
