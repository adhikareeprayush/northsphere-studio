"use client";
import PageHeader from "@/components/Resuable/PageHeader";
import AnimatedSection from "@/components/Resuable/AnimatedSection";
import Footer from "@/components/Homepage/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco, CA",
    type: "Full-time",
    description:
      "We're looking for an experienced full stack developer to join our engineering team and build scalable web applications.",
    requirements: [
      "5+ years of experience with React, Node.js, and TypeScript",
      "Strong understanding of database design and optimization",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Excellent problem-solving and communication skills",
    ],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / New York, NY",
    type: "Full-time",
    description:
      "Join our design team to create beautiful, intuitive user experiences for our clients' digital products.",
    requirements: [
      "3+ years of experience in UI/UX design",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating user-centered design",
      "Understanding of design systems and accessibility",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote / Los Angeles, CA",
    type: "Full-time",
    description:
      "Help our clients grow their online presence through strategic digital marketing campaigns.",
    requirements: [
      "3+ years of digital marketing experience",
      "Expertise in SEO, SEM, and social media marketing",
      "Data-driven approach with analytics tools",
      "Excellent written and verbal communication",
    ],
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Lead product strategy and roadmap for our digital solutions, working closely with clients and development teams.",
    requirements: [
      "5+ years of product management experience",
      "Strong technical background and understanding",
      "Proven track record of successful product launches",
      "Excellent stakeholder management skills",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build and maintain our infrastructure, ensuring scalability, security, and reliability of our systems.",
    requirements: [
      "3+ years of DevOps experience",
      "Strong knowledge of CI/CD pipelines",
      "Experience with Docker, Kubernetes, and cloud platforms",
      "Infrastructure as Code (Terraform, CloudFormation)",
    ],
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Drive business growth by identifying new opportunities and building relationships with potential clients.",
    requirements: [
      "5+ years of B2B sales experience",
      "Track record of meeting/exceeding sales targets",
      "Strong negotiation and presentation skills",
      "Understanding of technology and digital services",
    ],
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <div className="bg-surface-page min-h-screen">
      <PageHeader
        variant="careers"
        subtitle="Careers"
        title="Join Our Team"
        description="Build the future of digital innovation with us. Explore open positions and find your next opportunity."
      />

      <div className="page-shell py-10 md:py-12">
        {/* Why Join Us */}
        <AnimatedSection>
          <div className="mb-20">
            <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-black text-center mb-12">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold text-lg text-black mb-2">
                  Innovation First
                </h3>
                <p className="text-gray-500 text-sm">
                  Work with cutting-edge technologies and innovative solutions
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-semibold text-lg text-black mb-2">
                  Work-Life Balance
                </h3>
                <p className="text-gray-500 text-sm">
                  Flexible hours and remote work options for better balance
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-semibold text-lg text-black mb-2">
                  Growth Opportunities
                </h3>
                <p className="text-gray-500 text-sm">
                  Continuous learning and career development programs
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-semibold text-lg text-black mb-2">
                  Great Culture
                </h3>
                <p className="text-gray-500 text-sm">
                  Collaborative environment with talented, passionate people
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Job Openings */}
        <AnimatedSection delay={0.2}>
          <div>
            <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-black mb-8">
              Open Positions
            </h2>
            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setSelectedJob(selectedJob === index ? null : index)
                    }
                    className="w-full p-6 text-left flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-jakarta font-bold text-xl text-black">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-primary bg-opacity-10 text-primary text-xs font-semibold rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: selectedJob === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  {selectedJob === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-6 space-y-4">
                        <div>
                          <h4 className="font-semibold text-black mb-2">
                            About the Role
                          </h4>
                          <p className="text-gray-500">{job.description}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">
                            Requirements
                          </h4>
                          <ul className="list-disc list-inside text-gray-500 space-y-1">
                            {job.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4">
                          <Link
                            href={`/contact?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <AnimatedSection delay={0.3} className="mt-20">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <h2 className="font-jakarta font-bold text-3xl text-black mb-8 text-center">
              Our Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    Competitive Salary
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Market-leading compensation packages
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-2xl">🏥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    Health Insurance
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Comprehensive medical, dental, and vision coverage
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-2xl">🏖️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    Paid Time Off
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Generous vacation days and paid holidays
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    Learning Budget
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Annual budget for courses, books, and conferences
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Equipment</h3>
                  <p className="text-gray-500 text-sm">
                    Latest tech equipment and tools
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Remote Work</h3>
                  <p className="text-gray-500 text-sm">
                    Flexible remote work options
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="mt-20">
          <div className="surface-green rounded-3xl p-12 text-center md:p-16">
            <h2 className="font-jakarta mb-6 text-3xl font-bold md:text-4xl">
              Don&apos;t See Your Role?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              We&apos;re always looking for talented people. Send us your resume
              and let us know how you can contribute to our team.
            </p>
            <Link
              href="/contact?subject=General%20application"
              className="inline-block rounded-full bg-white px-8 py-4 font-bold text-primary no-underline transition-all hover:bg-white/95"
            >
              Send Your Resume
            </Link>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
