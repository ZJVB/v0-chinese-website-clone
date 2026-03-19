import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Cookie Policy | Cube Distribution",
  description: "Learn how Cube Distribution website uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#1a1f2e] to-[#2d3a4f] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-white/70" suppressHydrationWarning>Last Updated: 1 January 2024</p>
          </div>
        </section>

        {/* Content */}
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
                These cookies are essential for basic website functionality and cannot be disabled. They are typically used to respond to your actions such as setting privacy preferences, logging in, or filling out forms.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Cookie Name</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Purpose</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">session_id</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Maintain user session</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">csrf_token</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Security verification</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">cookie_consent</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Record cookie consent status</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.2 Functional Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies enable enhanced functionality and personalized services. They may be set by us or third-party service providers.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Cookie Name</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Purpose</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">language</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Remember language preference</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">timezone</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Timezone settings</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.3 Analytics Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting anonymous statistics. We use this data to improve website performance and user experience.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Cookie Name</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Provider</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Purpose</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-foreground border-b">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">_ga</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Google Analytics</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Distinguish users</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">_gid</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Google Analytics</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Distinguish users</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">_gat</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Google Analytics</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">Throttle request rate</td>
                      <td className="px-4 py-2 text-sm text-muted-foreground border-b">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.4 Marketing Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are used to track visitor browsing behavior to display relevant advertisements. These cookies are typically set by third-party advertising networks.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. How to Manage Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can manage your cookie preferences in the following ways:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>Browser Settings:</strong> Most browsers allow you to reject or delete cookies through settings</li>
                <li><strong>Cookie Banner:</strong> On first visit, you can choose to accept or reject non-essential cookies through our cookie consent banner</li>
                <li><strong>Opt Out:</strong> Visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Browser Cookie Settings Guide:</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Please note that disabling certain cookies may affect website functionality:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Essential Cookies: Disabling may cause the website to malfunction</li>
                <li>Functional Cookies: Disabling may result in loss of personalized settings</li>
                <li>Analytics Cookies: Will not affect website functionality but will impact our ability to improve</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Policy Updates</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Cookie Policy from time to time to reflect technological changes or legal requirements. Updated versions will be posted on this page.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Contact Us</h2>
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
