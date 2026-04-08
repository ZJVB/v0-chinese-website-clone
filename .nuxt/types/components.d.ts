
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AboutIntroSection: typeof import("../../components/about-intro-section")['default']
  AdvantagesSection: typeof import("../../components/advantages-section")['default']
  BusinessTypesSection: typeof import("../../components/business-types-section")['default']
  ContactCtaSection: typeof import("../../components/contact-cta-section")['default']
  Footer: typeof import("../../components/footer")['default']
  HeroSection: typeof import("../../components/hero-section")['default']
  IndustriesSection: typeof import("../../components/industries-section")['default']
  Navbar: typeof import("../../components/navbar")['default']
  NewsSection: typeof import("../../components/news-section")['default']
  PageBanner: typeof import("../../components/page-banner")['default']
  SectionDivider: typeof import("../../components/section-divider")['default']
  SectionTitle: typeof import("../../components/section-title")['default']
  ServicesSection: typeof import("../../components/services-section")['default']
  SolutionsEntrySection: typeof import("../../components/solutions-entry-section")['default']
  StatsSection: typeof import("../../components/stats-section")['default']
  TechSection: typeof import("../../components/tech-section")['default']
  ThemeProvider: typeof import("../../components/theme-provider")['default']
  UiAccordion: typeof import("../../components/ui/accordion")['default']
  UiAlertDialog: typeof import("../../components/ui/alert-dialog")['default']
  UiAlert: typeof import("../../components/ui/alert")['default']
  UiAspectRatio: typeof import("../../components/ui/aspect-ratio")['default']
  UiAvatar: typeof import("../../components/ui/avatar")['default']
  UiBadge: typeof import("../../components/ui/badge")['default']
  UiBreadcrumb: typeof import("../../components/ui/breadcrumb")['default']
  UiButton: typeof import("../../components/ui/button")['default']
  UiCalendar: typeof import("../../components/ui/calendar")['default']
  UiCard: typeof import("../../components/ui/card")['default']
  UiCarousel: typeof import("../../components/ui/carousel")['default']
  UiChart: typeof import("../../components/ui/chart")['default']
  UiCheckbox: typeof import("../../components/ui/checkbox")['default']
  UiCollapsible: typeof import("../../components/ui/collapsible")['default']
  UiCommand: typeof import("../../components/ui/command")['default']
  UiContextMenu: typeof import("../../components/ui/context-menu")['default']
  UiDialog: typeof import("../../components/ui/dialog")['default']
  UiDrawer: typeof import("../../components/ui/drawer")['default']
  UiDropdownMenu: typeof import("../../components/ui/dropdown-menu")['default']
  UiForm: typeof import("../../components/ui/form")['default']
  UiHoverCard: typeof import("../../components/ui/hover-card")['default']
  UiInputOtp: typeof import("../../components/ui/input-otp")['default']
  UiInput: typeof import("../../components/ui/input")['default']
  UiLabel: typeof import("../../components/ui/label")['default']
  UiMenubar: typeof import("../../components/ui/menubar")['default']
  UiNavigationMenu: typeof import("../../components/ui/navigation-menu")['default']
  UiPagination: typeof import("../../components/ui/pagination")['default']
  UiPopover: typeof import("../../components/ui/popover")['default']
  UiProgress: typeof import("../../components/ui/progress")['default']
  UiRadioGroup: typeof import("../../components/ui/radio-group")['default']
  UiResizable: typeof import("../../components/ui/resizable")['default']
  UiScrollArea: typeof import("../../components/ui/scroll-area")['default']
  UiSelect: typeof import("../../components/ui/select")['default']
  UiSeparator: typeof import("../../components/ui/separator")['default']
  UiSheet: typeof import("../../components/ui/sheet")['default']
  UiSidebar: typeof import("../../components/ui/sidebar")['default']
  UiSkeleton: typeof import("../../components/ui/skeleton")['default']
  UiSlider: typeof import("../../components/ui/slider")['default']
  UiSonner: typeof import("../../components/ui/sonner")['default']
  UiSwitch: typeof import("../../components/ui/switch")['default']
  UiTable: typeof import("../../components/ui/table")['default']
  UiTabs: typeof import("../../components/ui/tabs")['default']
  UiTextarea: typeof import("../../components/ui/textarea")['default']
  UiToast: typeof import("../../components/ui/toast")['default']
  UiToaster: typeof import("../../components/ui/toaster")['default']
  UiToggleGroup: typeof import("../../components/ui/toggle-group")['default']
  UiToggle: typeof import("../../components/ui/toggle")['default']
  UiTooltip: typeof import("../../components/ui/tooltip")['default']
  UiUseMobile: typeof import("../../components/ui/use-mobile")['default']
  UiUseToast: typeof import("../../components/ui/use-toast")['default']
  WarehouseNetworkSection: typeof import("../../components/warehouse-network-section")['default']
  NuxtWelcome: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtAnnouncer: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  NuxtImg: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
  NoScript: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAboutIntroSection: LazyComponent<typeof import("../../components/about-intro-section")['default']>
  LazyAdvantagesSection: LazyComponent<typeof import("../../components/advantages-section")['default']>
  LazyBusinessTypesSection: LazyComponent<typeof import("../../components/business-types-section")['default']>
  LazyContactCtaSection: LazyComponent<typeof import("../../components/contact-cta-section")['default']>
  LazyFooter: LazyComponent<typeof import("../../components/footer")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../components/hero-section")['default']>
  LazyIndustriesSection: LazyComponent<typeof import("../../components/industries-section")['default']>
  LazyNavbar: LazyComponent<typeof import("../../components/navbar")['default']>
  LazyNewsSection: LazyComponent<typeof import("../../components/news-section")['default']>
  LazyPageBanner: LazyComponent<typeof import("../../components/page-banner")['default']>
  LazySectionDivider: LazyComponent<typeof import("../../components/section-divider")['default']>
  LazySectionTitle: LazyComponent<typeof import("../../components/section-title")['default']>
  LazyServicesSection: LazyComponent<typeof import("../../components/services-section")['default']>
  LazySolutionsEntrySection: LazyComponent<typeof import("../../components/solutions-entry-section")['default']>
  LazyStatsSection: LazyComponent<typeof import("../../components/stats-section")['default']>
  LazyTechSection: LazyComponent<typeof import("../../components/tech-section")['default']>
  LazyThemeProvider: LazyComponent<typeof import("../../components/theme-provider")['default']>
  LazyUiAccordion: LazyComponent<typeof import("../../components/ui/accordion")['default']>
  LazyUiAlertDialog: LazyComponent<typeof import("../../components/ui/alert-dialog")['default']>
  LazyUiAlert: LazyComponent<typeof import("../../components/ui/alert")['default']>
  LazyUiAspectRatio: LazyComponent<typeof import("../../components/ui/aspect-ratio")['default']>
  LazyUiAvatar: LazyComponent<typeof import("../../components/ui/avatar")['default']>
  LazyUiBadge: LazyComponent<typeof import("../../components/ui/badge")['default']>
  LazyUiBreadcrumb: LazyComponent<typeof import("../../components/ui/breadcrumb")['default']>
  LazyUiButton: LazyComponent<typeof import("../../components/ui/button")['default']>
  LazyUiCalendar: LazyComponent<typeof import("../../components/ui/calendar")['default']>
  LazyUiCard: LazyComponent<typeof import("../../components/ui/card")['default']>
  LazyUiCarousel: LazyComponent<typeof import("../../components/ui/carousel")['default']>
  LazyUiChart: LazyComponent<typeof import("../../components/ui/chart")['default']>
  LazyUiCheckbox: LazyComponent<typeof import("../../components/ui/checkbox")['default']>
  LazyUiCollapsible: LazyComponent<typeof import("../../components/ui/collapsible")['default']>
  LazyUiCommand: LazyComponent<typeof import("../../components/ui/command")['default']>
  LazyUiContextMenu: LazyComponent<typeof import("../../components/ui/context-menu")['default']>
  LazyUiDialog: LazyComponent<typeof import("../../components/ui/dialog")['default']>
  LazyUiDrawer: LazyComponent<typeof import("../../components/ui/drawer")['default']>
  LazyUiDropdownMenu: LazyComponent<typeof import("../../components/ui/dropdown-menu")['default']>
  LazyUiForm: LazyComponent<typeof import("../../components/ui/form")['default']>
  LazyUiHoverCard: LazyComponent<typeof import("../../components/ui/hover-card")['default']>
  LazyUiInputOtp: LazyComponent<typeof import("../../components/ui/input-otp")['default']>
  LazyUiInput: LazyComponent<typeof import("../../components/ui/input")['default']>
  LazyUiLabel: LazyComponent<typeof import("../../components/ui/label")['default']>
  LazyUiMenubar: LazyComponent<typeof import("../../components/ui/menubar")['default']>
  LazyUiNavigationMenu: LazyComponent<typeof import("../../components/ui/navigation-menu")['default']>
  LazyUiPagination: LazyComponent<typeof import("../../components/ui/pagination")['default']>
  LazyUiPopover: LazyComponent<typeof import("../../components/ui/popover")['default']>
  LazyUiProgress: LazyComponent<typeof import("../../components/ui/progress")['default']>
  LazyUiRadioGroup: LazyComponent<typeof import("../../components/ui/radio-group")['default']>
  LazyUiResizable: LazyComponent<typeof import("../../components/ui/resizable")['default']>
  LazyUiScrollArea: LazyComponent<typeof import("../../components/ui/scroll-area")['default']>
  LazyUiSelect: LazyComponent<typeof import("../../components/ui/select")['default']>
  LazyUiSeparator: LazyComponent<typeof import("../../components/ui/separator")['default']>
  LazyUiSheet: LazyComponent<typeof import("../../components/ui/sheet")['default']>
  LazyUiSidebar: LazyComponent<typeof import("../../components/ui/sidebar")['default']>
  LazyUiSkeleton: LazyComponent<typeof import("../../components/ui/skeleton")['default']>
  LazyUiSlider: LazyComponent<typeof import("../../components/ui/slider")['default']>
  LazyUiSonner: LazyComponent<typeof import("../../components/ui/sonner")['default']>
  LazyUiSwitch: LazyComponent<typeof import("../../components/ui/switch")['default']>
  LazyUiTable: LazyComponent<typeof import("../../components/ui/table")['default']>
  LazyUiTabs: LazyComponent<typeof import("../../components/ui/tabs")['default']>
  LazyUiTextarea: LazyComponent<typeof import("../../components/ui/textarea")['default']>
  LazyUiToast: LazyComponent<typeof import("../../components/ui/toast")['default']>
  LazyUiToaster: LazyComponent<typeof import("../../components/ui/toaster")['default']>
  LazyUiToggleGroup: LazyComponent<typeof import("../../components/ui/toggle-group")['default']>
  LazyUiToggle: LazyComponent<typeof import("../../components/ui/toggle")['default']>
  LazyUiTooltip: LazyComponent<typeof import("../../components/ui/tooltip")['default']>
  LazyUiUseMobile: LazyComponent<typeof import("../../components/ui/use-mobile")['default']>
  LazyUiUseToast: LazyComponent<typeof import("../../components/ui/use-toast")['default']>
  LazyWarehouseNetworkSection: LazyComponent<typeof import("../../components/warehouse-network-section")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.4.2_@babel+core@7.29.0_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@emna_44e245e2c77353c5eeedf744110a6511/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
