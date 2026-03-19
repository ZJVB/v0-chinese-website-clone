import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Cookie Policy | Cube Distribution",
  description: "Learn how Cube Distribution website uses cookies and similar technologies.",
};

const LAST_UPDATED = "1 January 2024";

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-gradient-to-b from-[#1a1f2e] to-[#2d3a4f] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-white/70">Last Updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files stored on your device by a website server when you visit. Cookies help websites remember your preferences, login status, and other information to make your browsing experience more convenient.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.1 Essential Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are essential for basic website functionality and cannot be disabled.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.2 Functional Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies enable enhanced functionality and personalized services.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.3 Analytics Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies help us understand how visitors interact with our website.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.4 Marketing Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are used to track visitor browsing behavior to display relevant advertisements.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. How to Manage Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can manage your cookie preferences through browser settings or our cookie consent banner.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-muted/30 rounded-lg p-6 mt-4">
                <p className="text-muted-foreground mb-2"><strong>Cube Distribution Service Ltd</strong></p>
                <p className="text-muted-foreground mb-2">Address: Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</p>
                <p className="text-muted-foreground mb-2">Email: contact@thecubedistribution.com</p>
                <p className="text-muted-foreground">Phone: +44 161 566 2392 / 7599588577</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
