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

// Replace with your actual business details.
const contactDetails = [
  {
    title: "Email our team",
    value: "hello@transportnet.example",
    description: "For booking, documentation, and shipping enquiries.",
    href: "mailto:hello@transportnet.example",
    Icon: Mail,
  },
  {
    title: "Speak with us",
    value: "+1 212 555 0148",
    description: "Discuss your container and transport requirements.",
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

const subjects = [
  ["booking", "Container booking"],
  ["schedules", "Routes & sailing schedules"],
  ["tracking", "Container tracking"],
  ["documents", "Shipping documents"],
  ["special-cargo", "Reefer & special cargo"],
  ["inland", "Inland transport"],
  ["general", "General enquiry"],
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
      reference: formData.get("reference").trim(),
      message: formData.get("message").trim(),
    };

    if (!data.name || !data.message) {
      setError("Please enter your name and message.");
      return;
    }

    setLoading(true);

    try {
      // Your backend should return { success: true } after saving/sending.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Message submission failed");
      }

      const result = await response.json();

      if (result?.success !== true) {
        throw new Error("Message submission failed");
      }

      setSubmitted(true);
    } catch {
      setError(
        "Your message could not be sent. Please try again or contact our team directly.",
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
                Your next sailing.
                <br />
                <span className="text-[#1684e8]">
                  Starts with a conversation.
                </span>
              </h1>

              <p className="text-sm leading-6 text-slate-500">
                Need help with a container booking, sailing schedule,
                or an existing shipment? Tell us what you need and
                our team will help you explore the next steps.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact details and form */}
      <section
        className="ct-main-section"
        aria-label="Contact information and enquiry form"
      >
        <div className="ct-container ct-layout">
          <div>
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight">
                Talk to our shipping team.
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                From port connections to shipping documents, we can
                help you understand your options and coordinate your
                enquiry.
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
                  {/* Replace with your actual hours and time zone. */}
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Monday–Friday, 9:00 AM–6:00 PM
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
                  How can we help your shipment?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Select a subject and share the details so we can
                  direct your enquiry to the right team.
                </p>
              </div>

              {submitted ? (
                <div className="ct-success" role="status">
                  <span className="ct-success-icon">
                    <CheckCircle2 size={34} aria-hidden="true" />
                  </span>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    Enquiry received!
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Thank you for contacting TransportNet. Our team
                    will review your message and get back to you.
                  </p>

                  <button
                    type="button"
                    className="ct-submit"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another enquiry
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
                          Enquiry subject *
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

                          {subjects.map(([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="ct-full-width">
                        <label htmlFor="ct-reference">
                          Booking or container reference
                        </label>
                        <input
                          id="ct-reference"
                          name="reference"
                          type="text"
                          spellCheck={false}
                          placeholder="If you have an existing shipment"
                        />
                      </div>

                      <div className="ct-full-width">
                        <label htmlFor="ct-message">Your message *</label>
                        <textarea
                          id="ct-message"
                          name="message"
                          rows={5}
                          placeholder="Tell us about your enquiry. Include relevant ports, cargo details, or preferred sailing dates."
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
                          Sending enquiry…
                        </>
                      ) : (
                        <>
                          Send enquiry
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

      {/* Quote */}
      <section
        className="ct-quote-section"
        aria-labelledby="ct-quote-heading"
      >
        <div className="ct-container">
          <Reveal>
            <div className="ct-quote-banner">
              <div>
                <p className="ct-eyebrow">Plan your container shipment</p>

                <h2
                  id="ct-quote-heading"
                  className="text-2xl font-semibold tracking-tight sm:text-3xl"
                >
                  Looking for a freight quotation?
                </h2>

                <p className="mt-3 text-sm leading-6">
                  Share your origin, destination, and container
                  requirements through our quote form.
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