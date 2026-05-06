import type { Metadata } from "next";
import PageHeader from "@/components/Resuable/PageHeader";
import AnimatedSection from "@/components/Resuable/AnimatedSection";
import Footer from "@/components/Homepage/Footer";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "GDPR",
  description: `How ${SITE_NAME} handles personal data under the GDPR.`,
};

export default function GDPRPage() {
  return (
    <div className="bg-surface-page min-h-screen">
      <PageHeader
        variant="legal"
        subtitle="GDPR Compliance"
        title="General Data Protection Regulation"
        description="Our commitment to protecting your data rights under GDPR."
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
                  Our GDPR Commitment
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Northsphere Studio is committed to protecting and respecting
                  your privacy in accordance with the General Data Protection
                  Regulation (GDPR) and other applicable data protection laws.
                  We ensure that your personal data is processed lawfully,
                  fairly, and transparently.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Your Rights Under GDPR
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Under GDPR, you have the following rights:
                </p>

                <div className="space-y-4">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg text-black mb-2">
                      1. Right to Access
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      You have the right to request copies of your personal data
                      that we hold.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg text-black mb-2">
                      2. Right to Rectification
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      You have the right to request that we correct any
                      information you believe is inaccurate or incomplete.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg text-black mb-2">
                      3. Right to Erasure
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      You have the right to request that we erase your personal
                      data under certain conditions.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg text-black mb-2">
                      4. Right to Restrict Processing
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      You have the right to request that we restrict the
                      processing of your personal data under certain conditions.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg text-black mb-2">
                      5. Right to Data Portability
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      You have the right to request that we transfer the data we
                      have collected to another organization or directly to you.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg text-black mb-2">
                      6. Right to Object
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      You have the right to object to our processing of your
                      personal data under certain conditions.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-lg text-black mb-2">
                      7. Right to Withdraw Consent
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      You have the right to withdraw your consent at any time
                      where we relied on consent to process your data.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  How to Exercise Your Rights
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  To exercise any of your GDPR rights:
                </p>
                <ol className="list-decimal list-inside text-gray-500 space-y-2 ml-4">
                  <li>
                    Send an email to our Data Protection Officer at
                    dpo@northsphere.studio
                  </li>
                  <li>Clearly state which right you wish to exercise</li>
                  <li>
                    Provide sufficient information to verify your identity
                  </li>
                  <li>We will respond to your request within 30 days</li>
                </ol>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Legal Basis for Processing
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  We process your personal data based on the following legal
                  grounds:
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2 ml-4">
                  <li>
                    <strong className="text-black">Consent:</strong> You have
                    given clear consent for specific purposes
                  </li>
                  <li>
                    <strong className="text-black">Contract:</strong> Processing
                    is necessary to fulfill our contractual obligations
                  </li>
                  <li>
                    <strong className="text-black">Legal obligation:</strong>{" "}
                    Processing is required by law
                  </li>
                  <li>
                    <strong className="text-black">
                      Legitimate interests:
                    </strong>{" "}
                    Processing is necessary for our legitimate business
                    interests
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Data Retention
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  We retain your personal data only for as long as necessary to
                  fulfill the purposes for which it was collected, comply with
                  legal obligations, resolve disputes, and enforce our
                  agreements.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  International Data Transfers
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  When we transfer your data outside the EEA, we ensure
                  appropriate safeguards are in place, such as Standard
                  Contractual Clauses or adequacy decisions by the European
                  Commission.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Data Protection Officer
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Our Data Protection Officer oversees compliance with GDPR and
                  handles data protection inquiries:
                </p>
                <div className="mt-4 p-6 bg-gray-50 rounded-xl">
                  <p className="text-gray-700">
                    <strong>Email:</strong> dpo@northsphere.studio
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Address:</strong> 123 Innovation Street, Tech
                    Valley, CA 94000
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Complaints
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  If you believe we have not handled your personal data
                  properly, you have the right to lodge a complaint with your
                  local supervisory authority or the Information
                  Commissioner&apos;s Office (ICO) in the UK.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  Updates to This Policy
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  We may update this GDPR policy to reflect changes in our
                  practices or legal requirements. We will notify you of any
                  material changes.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
}
