import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";
import Reveal from "../components/common/Reveal";
import SectionKicker from "../components/common/SectionKicker";

// Replace these sample details with your business information.
const contactDetails = [
  {
    title: "Email us",
    value: "hello@transportnet.example",
    description: "For general questions and shipping enquiries.",
    href: "mailto:hello@transportnet.example",
    Icon: Mail,
  },
  {
    title: "Call our team",
    value: "+1 212 555 0148",
    description: "Talk through your requirements with us.",
    href: "tel:+12125550148",
    Icon: Phone,
  },
  {
    title: "Visit our office",
    value: "Your office address",
    description: "City, country, postal code.",
    Icon: MapPin,
  },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      company: formData.get("company").trim(),
      phone: formData.get("phone").trim(),
      subject: formData.get("subject"),
      message: formData.get("message").trim(),
    };

    if (!data.name || !data.message) {
      setError("Please enter your name and message.");
      return;
    }

    setLoading(true);

    try {
      // Connect your backend here.
      // Expected response after sending/saving: { success: true }
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error("Message submission failed");
      }

      setSubmitted(true);
    } catch {
      setError(
        "Your message could not be sent. Please try again or contact us directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="ct-page">
      {/* Introduction */}
      <section className="ct-hero" aria-labelledby="ct-heading">
        <div className="ct-container">
          <nav className="ct-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>

          <Reveal>
            <SectionKicker>Contact TransportNet</SectionKicker>

            <div className="ct-heading-layout">
              <h1
                id="ct-heading"
                className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
              >
                Let’s talk about
                <br />
                <span className="text-[#1684e8]">your next move.</span>
              </h1>

              <p className="text-sm leading-6 text-slate-500">
                Have a question, a shipment to plan, or a partnership
                in mind? Tell us how we can help.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact information and form */}
      <section
        className="ct-main-section"
        aria-label="Contact information and message form"
      >
        <div className="ct-container ct-layout">
          <div>
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight">
                A conversation starts here.
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Choose the way that works best for you. Our team can
                help you understand services, requirements, and next
                steps.
              </p>
            </Reveal>

            <div className="ct-details">
              {contactDetails.map(
                ({ title, value, description, href, Icon }, index) => (
                  <Reveal key={title} className={`delay-${index + 1}`}>
                    <div className="ct-detail">
                      <span className="ct-detail-icon">
                        <Icon
                          size={22}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>

                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">
                          {title}
                        </h3>

                        {href ? (
                          <a href={href} className="ct-detail-link">
                            {value}
                          </a>
                        ) : (
                          <p className="ct-detail-value">{value}</p>
                        )}

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ),
              )}
            </div>

            <Reveal>
              <div className="ct-hours">
                <Clock3
                  size={21}
                  aria-hidden="true"
                  className="shrink-0 text-[#1684e8]"
                />

                <div>
                  <p className="text-sm font-semibold">Office hours</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Monday–Friday, 9:00 AM–6:00 PM
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Update with your office’s time zone.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="delay-2">
            <section
              className="ct-form-card"
              aria-labelledby="ct-form-heading"
            >
              <div className="ct-form-heading">
                <p className="ct-eyebrow">Send an enquiry</p>

                <h2
                  id="ct-form-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  How can we help?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Share a few details and our team will review your
                  message.
                </p>
              </div>

              {submitted ? (
                <div className="ct-success" role="status">
                  <span className="ct-success-icon">
                    <CheckCircle2 size={34} aria-hidden="true" />
                  </span>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    Message received!
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Thank you for getting in touch. Our team will
                    review your enquiry and get back to you.
                  </p>

                  <button
                    type="button"
                    className="ct-submit"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <fieldset disabled={loading} className="ct-fieldset">
                    <div className="ct-form-grid">
                      <div>
                        <label htmlFor="ct-name">Full name *</label>
                        <input
                          id="ct-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="ct-email">Email address *</label>
                        <input
                          id="ct-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@company.com"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="ct-company">Company</label>
                        <input
                          id="ct-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Your company"
                        />
                      </div>

                      <div>
                        <label htmlFor="ct-phone">Phone number</label>
                        <input
                          id="ct-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="Include country code"
                        />
                      </div>

                      <div className="ct-full-width">
                        <label htmlFor="ct-subject">
                          What is your enquiry about? *
                        </label>

                        <select
                          id="ct-subject"
                          name="subject"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select a subject
                          </option>
                          <option value="general">General enquiry</option>
                          <option value="services">Our services</option>
                          <option value="shipment">
                            Existing shipment
                          </option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Something else</option>
                        </select>
                      </div>

                      <div className="ct-full-width">
                        <label htmlFor="ct-message">Your message *</label>
                        <textarea
                          id="ct-message"
                          name="message"
                          rows={5}
                          placeholder="Tell us how we can help. For an existing shipment, include your reference number."
                          required
                        />
                      </div>
                    </div>

                    {error && (
                      <p className="ct-error" role="alert">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="ct-submit"
                    >
                      {loading ? (
                        <>
                          <LoaderCircle
                            size={18}
                            aria-hidden="true"
                            className="ct-spinner"
                          />
                          Sending message…
                        </>
                      ) : (
                        <>
                          Send message
                          <ArrowUpRight size={18} aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <p className="mt-3 text-center text-xs text-slate-500">
                      Fields marked with * are required.
                    </p>
                  </fieldset>
                </form>
              )}
            </section>
          </Reveal>
        </div>
      </section>

      {/* Quote call to action */}
      <section className="ct-quote-section" aria-labelledby="ct-quote-heading">
        <div className="ct-container">
          <Reveal>
            <div className="ct-quote-banner">
              <div>
                <p className="ct-eyebrow">Ready to ship?</p>

                <h2
                  id="ct-quote-heading"
                  className="text-2xl font-semibold tracking-tight sm:text-3xl"
                >
                  Looking for a shipping quote?
                </h2>

                <p className="mt-3 text-sm leading-6">
                  Share your cargo details through our dedicated
                  quote form.
                </p>
              </div>

              <Link to="/request-quote" className="ct-quote-link">
                Request a quote
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}