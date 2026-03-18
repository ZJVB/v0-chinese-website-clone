const platforms = [
  { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "TikTok Shop", logo: "https://cdn.worldvectorlogo.com/logos/tiktok-icon-2.svg" },
  { name: "Amazon", logo: "/images/logos/amazon.png" },
  { name: "eBay", logo: "/images/logos/ebay.png" },
  { name: "TEMU", logo: "https://cdn.worldvectorlogo.com/logos/temu-logo.svg" },
  { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" },
  { name: "Magento", logo: "https://cdn.worldvectorlogo.com/logos/magento.svg" },
  { name: "PrestaShop", logo: "https://cdn.worldvectorlogo.com/logos/prestashop.svg" },
];

const logistics = [
  { name: "Royal Mail", logo: "/images/logos/royal-mail.png" },
  { name: "DPD", logo: "/images/logos/dpd.png" },
  { name: "Evri", logo: "/images/logos/evri.png" },
  { name: "FedEx", logo: "https://cdn.worldvectorlogo.com/logos/fedex-express-6.svg" },
  { name: "UPS", logo: "https://cdn.worldvectorlogo.com/logos/ups-united-parcel-service.svg" },
  { name: "DHL", logo: "https://cdn.worldvectorlogo.com/logos/dhl-1.svg" },
];

export function AdvantagesSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#f5f7fa]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            合作生态
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            为什么选择<span className="text-primary">Cube海外仓</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            依托本地仓储资源、成熟履约体系及灵活物流配置，为客户提供稳定高效的英国本地供应链支持
          </p>
        </div>

        {/* Partners Section */}
        <div className="space-y-10">
          {/* Platforms - scrolling left */}
          <div className="rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 p-6 lg:p-8">
            <h3 className="mb-2 text-base font-bold text-foreground text-center">
              系统对接平台
            </h3>
            <p className="mb-6 text-sm text-muted-foreground text-center">
              支持主流电商平台及 ERP/OMS 系统 API 对接
            </p>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left">
                {[...platforms, ...platforms].map((platform, index) => (
                  <div
                    key={`${platform.name}-${index}`}
                    className="flex-shrink-0 mx-8 flex items-center justify-center h-14 w-32 rounded-lg bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
                  >
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="h-10 w-auto max-w-[80%] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logistics - scrolling right */}
          <div className="rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 p-6 lg:p-8">
            <h3 className="mb-2 text-base font-bold text-foreground text-center">
              合作物流渠道
            </h3>
            <p className="mb-6 text-sm text-muted-foreground text-center">
              覆盖英国全境及欧洲主要目的地的多元化配送网络
            </p>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right">
                {[...logistics, ...logistics].map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0 mx-8 flex items-center justify-center h-14 w-32 rounded-lg bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-10 w-auto max-w-[80%] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
