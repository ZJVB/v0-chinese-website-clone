import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "服务条款 | Cube海外仓",
  description: "Cube海外仓服务条款，使用我们的仓储物流服务前请仔细阅读。",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#1a1f2e] to-[#2d3a4f] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">服务条款</h1>
            <p className="text-white/70">最后更新日期：2024年1月1日</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. 服务概述</h2>
              <p className="text-muted-foreground mb-4">
                Cube Distribution Service Ltd（公司注册号：12909860）提供跨境电商仓储、物流配送和相关增值服务。使用我们的服务即表示您同意遵守本服务条款。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. 服务范围</h2>
              <p className="text-muted-foreground mb-4">我们提供的服务包括但不限于：</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>FBA备货与转运服务</li>
                <li>D2C一件代发服务</li>
                <li>B2B批量分销配送</li>
                <li>TEMU认证仓服务</li>
                <li>退货处理与翻新服务</li>
                <li>增值服务（贴标、质检、换标等）</li>
                <li>WMS系统对接</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. 客户责任</h2>
              <p className="text-muted-foreground mb-4">作为我们的客户，您同意：</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>提供准确、完整的货物信息和收发货地址</li>
                <li>确保货物符合英国进口法规和海关要求</li>
                <li>不委托我们运输违禁品、危险品或受限物品</li>
                <li>及时支付服务费用</li>
                <li>配合海关查验和相关检查</li>
                <li>为货物投保适当的保险</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. 禁运物品</h2>
              <p className="text-muted-foreground mb-4">以下物品禁止通过我们的服务运输：</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>毒品和管制药物</li>
                <li>武器和弹药</li>
                <li>易燃易爆危险品</li>
                <li>假冒伪劣商品</li>
                <li>濒危动植物及其制品</li>
                <li>色情物品</li>
                <li>其他法律禁止进出口的物品</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. 费用与付款</h2>
              <p className="text-muted-foreground mb-4">
                服务费用根据我们的报价单或合同约定执行。除非另有约定，付款条件如下：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>仓储费：按月结算，次月5日前支付</li>
                <li>配送费：按单结算或月结</li>
                <li>逾期付款将收取1.5%月息的滞纳金</li>
                <li>我们保留对未付款账户暂停服务的权利</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. 货物存储</h2>
              <p className="text-muted-foreground mb-4">关于货物存储：</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>货物入库需提前预约并提供准确的货物清单</li>
                <li>我们将按照行业标准妥善保管您的货物</li>
                <li>超过180天无动销的货物，我们有权收取额外仓储费或要求移除</li>
                <li>货物丢失或损坏的赔偿上限为申报价值或£100/件（以较低者为准）</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">7. 配送与交付</h2>
              <p className="text-muted-foreground mb-4">配送服务相关条款：</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>配送时效为预估时间，不构成保证</li>
                <li>不可抗力造成的延误，我们不承担责任</li>
                <li>收货人需在配送时提供有效签收</li>
                <li>无人签收的包裹将按快递公司政策处理</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">8. 责任限制</h2>
              <p className="text-muted-foreground mb-4">
                在法律允许的最大范围内：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>我们的总赔偿责任不超过争议订单的服务费用</li>
                <li>我们不对间接损失、利润损失或商业机会损失负责</li>
                <li>建议客户为高价值货物购买额外保险</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">9. 知识产权</h2>
              <p className="text-muted-foreground mb-4">
                您保证委托我们处理的货物不侵犯任何第三方的知识产权。如因货物侵权导致我们遭受损失，您同意赔偿我们的全部损失。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">10. 终止服务</h2>
              <p className="text-muted-foreground mb-4">
                任何一方可提前30天书面通知终止服务关系。终止后，客户需在14天内安排提取所有库存货物，逾期将收取额外仓储费。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">11. 争议解决</h2>
              <p className="text-muted-foreground mb-4">
                本条款受英格兰和威尔士法律管辖。任何争议应首先通过友好协商解决。协商不成的，提交英国法院管辖。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">12. 条款修改</h2>
              <p className="text-muted-foreground mb-4">
                我们保留随时修改本服务条款的权利。修改后的条款将在网站上公布，继续使用我们的服务即表示接受修改后的条款。
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">13. 联系方式</h2>
              <p className="text-muted-foreground mb-4">如有任何疑问，请联系我们：</p>
              <div className="bg-muted/30 rounded-lg p-6 mt-4">
                <p className="text-muted-foreground mb-2"><strong>Cube Distribution Service Ltd</strong></p>
                <p className="text-muted-foreground mb-2">公司注册号：12909860</p>
                <p className="text-muted-foreground mb-2">地址：Unit 5, Industrial Estate, London, UK</p>
                <p className="text-muted-foreground mb-2">邮箱：legal@cubedistribution.co.uk</p>
                <p className="text-muted-foreground">电话：+44 20 1234 5678</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
