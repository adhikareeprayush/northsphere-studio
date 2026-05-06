import type { Metadata } from "next";
import PageHeader from "@/components/Resuable/PageHeader";
import AnimatedSection from "@/components/Resuable/AnimatedSection";
import Footer from "@/components/Homepage/Footer";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-surface-page min-h-screen">
      <PageHeader
        variant="legal"
        subtitle="Privacy Policy"
        title="Your Privacy Matters"
        description="Learn how we collect, use, and protect your personal information."
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
                  1. Information We Collect
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  We collect information that you provide directly to us,
                  including when you create an account, fill out a form, request
                  customer support, or otherwise communicate with us.
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2 ml-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect and prevent fraud and abuse</li>
                </ul>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2 ml-4">
                  <li>With your consent</li>
                  <li>With service providers who assist our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  5. Your Rights
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  6. Cookies and Tracking
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  We use cookies and similar tracking technologies to collect
                  and track information about your browsing activities. For more
                  details, please see our Cookie Policy.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  7. Children&apos;s Privacy
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Our services are not intended for children under 13. We do not
                  knowingly collect personal information from children under 13.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the &quot;Last Updated&quot; date.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  9. Contact Us
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <div className="mt-4 p-6 bg-gray-50 rounded-xl">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@northsphere.studio
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Address:</strong> 123 Innovation Street, Tech
                    Valley, CA 94000
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
