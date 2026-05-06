"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHeader from "@/components/Resuable/PageHeader";
import AnimatedSection from "@/components/Resuable/AnimatedSection";
import Footer from "@/components/Homepage/Footer";
import { motion } from "framer-motion";
import { CONTACT_EMAIL, getFormSubmitContactUrl } from "@/lib/site";

function ContactPageInner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const searchParams = useSearchParams();

  useEffect(() => {
    const subject = searchParams.get("subject");
    if (subject) {
      setFormData((prev) => ({
        ...prev,
        subject,
      }));
    }
  }, [searchParams]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(getFormSubmitContactUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Website contact: ${formData.subject}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-surface-page">
      <PageHeader
        variant="contact"
        subtitle="Contact Us"
        title="Let's Start a Conversation"
        description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <div className="page-shell py-10 md:py-12">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 font-jakarta text-3xl font-bold text-text-heading md:text-4xl">
                  Get in Touch
                </h2>
                <p className="text-lg text-text-body">
                  Whether you have a question about our services, need a quote,
                  or just want to say hello, we&apos;re here to help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="surface-green flex items-start gap-4 rounded-2xl border border-white/10 p-6 shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Mail className="h-6 w-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      Email Us
                    </h3>
                    <p className="mt-1 text-sm text-white">{CONTACT_EMAIL}</p>
                  </div>
                </div>

                <div className="surface-green flex items-start gap-4 rounded-2xl border border-white/10 p-6 shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Phone className="h-6 w-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      Call Us
                    </h3>
                    <p className="mt-1 text-sm text-white">9700045699</p>
                  </div>
                </div>

                <div className="surface-green flex items-start gap-4 rounded-2xl border border-white/10 p-6 shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <MapPin className="h-6 w-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      Studio
                    </h3>
                    <p className="mt-1 text-sm text-white">
                      Distributed studio · booking-friendly time zones
                    </p>
                  </div>
                </div>
              </div>

              <div className="surface-green rounded-2xl border border-white/10 p-8 shadow-md">
                <h3 className="font-jakarta text-xl font-bold text-white">
                  Office Hours
                </h3>
                <div className="mt-4 space-y-2 text-sm text-white">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-surface-card p-8 shadow-lg"
            >
              <h3 className="mb-6 font-jakarta text-2xl font-bold text-text-heading">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-text-heading"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-text-heading"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-text-heading"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter the subject"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-text-heading"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full resize-none rounded-lg border px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your message"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full rounded-full py-4 font-bold text-white transition-all ${
                      isSubmitting
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-primary hover:bg-primary-hover"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </motion.div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800"
                  >
                    <p className="font-semibold">Success!</p>
                    <p className="text-sm">
                      Your message has been sent. We&apos;ll get back to you
                      soon!
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800"
                  >
                    <p className="font-semibold">Error</p>
                    <p className="text-sm">
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ContactFallback() {
  return (
    <div className="min-h-screen bg-surface-page">
      <PageHeader
        variant="contact"
        subtitle="Contact Us"
        title="Let's Start a Conversation"
        description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />
      <div className="page-shell py-14 text-center font-jakarta text-text-body">
        Loading…
      </div>
      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactPageInner />
    </Suspense>
  );
}
