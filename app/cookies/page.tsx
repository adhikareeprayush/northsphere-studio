import type { Metadata } from "next";
import PageHeader from "@/components/Resuable/PageHeader";
import AnimatedSection from "@/components/Resuable/AnimatedSection";
import Footer from "@/components/Homepage/Footer";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie and tracking disclosures for ${SITE_NAME}.`,
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-surface-page min-h-screen">
      <PageHeader
        variant="legal"
        subtitle="Cookie Policy"
        title="How We Use Cookies"
        description="Learn about the cookies we use and how you can control them."
      />

      <div className="page-shell py-10 md:py-12">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-8">
              <div className="text-sm text-gray-500">
                Last Updated: January 31, 2026
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Cookies are small text files that are stored on your device
                  when you visit a website. They help us provide you with a
                  better experience by remembering your preferences and enabling
                  certain features.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Types of Cookies We Use
                </h2>

                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg text-black mb-2">
                      1. Essential Cookies
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      These cookies are necessary for the website to function
                      properly. They enable basic features like page navigation
                      and access to secure areas.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg text-black mb-2">
                      2. Analytics Cookies
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      These cookies help us understand how visitors interact
                      with our website by collecting and reporting information
                      anonymously. We use Google Analytics for this purpose.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg text-black mb-2">
                      3. Functionality Cookies
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      These cookies allow the website to remember choices you
                      make and provide enhanced, more personalized features.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg text-black mb-2">
                      4. Marketing Cookies
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      These cookies track your online activity to help
                      advertisers deliver more relevant advertising or to limit
                      how many times you see an ad.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Third-Party Cookies
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  We may use third-party services that place cookies on your
                  device:
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2 ml-4">
                  <li>Google Analytics - for website analytics</li>
                  <li>Social media platforms - for social sharing features</li>
                  <li>Advertising networks - for targeted advertising</li>
                  <li>Payment processors - for secure transactions</li>
                </ul>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  How to Control Cookies
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2 ml-4">
                  <li>
                    Browser settings - Most browsers allow you to refuse cookies
                    or delete existing cookies
                  </li>
                  <li>
                    Cookie consent tools - Use our cookie banner to manage your
                    preferences
                  </li>
                  <li>
                    Opt-out tools - Use industry opt-out tools like NAI or DAA
                  </li>
                  <li>Do Not Track - Enable DNT in your browser settings</li>
                </ul>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Browser-Specific Instructions
                </h2>
                <div className="space-y-3 ml-4">
                  <p className="text-gray-500">
                    <strong className="text-black">Chrome:</strong> Settings →
                    Privacy and security → Cookies
                  </p>
                  <p className="text-gray-500">
                    <strong className="text-black">Firefox:</strong> Options →
                    Privacy & Security → Cookies
                  </p>
                  <p className="text-gray-500">
                    <strong className="text-black">Safari:</strong> Preferences
                    → Privacy → Cookies
                  </p>
                  <p className="text-gray-500">
                    <strong className="text-black">Edge:</strong> Settings →
                    Cookies and site permissions
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Impact of Disabling Cookies
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Please note that disabling cookies may affect the
                  functionality of our website. Some features may not work
                  properly, and your experience may be limited.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Updates to This Policy
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices or for legal reasons. Please check
                  this page regularly for updates.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  If you have questions about our use of cookies, please contact
                  us at:
                </p>
                <div className="mt-4 p-6 bg-gray-50 rounded-xl">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@northsphere.studio
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
}
