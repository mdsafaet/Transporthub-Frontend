import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  LoaderCircle,
  Plane,
  Ship,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "Ocean Freight",
  "Air Freight",
  "Land Transport",
  "Warehousing",
  "Customs Clearance",
  "Supply Chain Solutions",
];

export default function RequestQuote() {
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
      phone: formData.get("phone").trim(),
      company: formData.get("company").trim(),
      service: formData.get("service"),
      origin: formData.get("origin").trim(),
      destination: formData.get("destination").trim(),
      weight: formData.get("weight")
        ? Number(formData.get("weight"))
        : null,
      details: formData.get("details").trim(),
    };

    if (!data.name || !data.origin || !data.destination) {
      setError("Please enter your name, origin, and destination.");
      return;
    }

    setLoading(true);

    try {
      // Replace this endpoint with your quote API.
      // Expected response: { success: true }
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch {
      setError(
        "Your request could not be sent. Please try again or contact our team.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="rq-page">
      <header className="rq-header">
        <div className="rq-container rq-navigation">
          <Link
            to="/"
            className="rq-logo"
            aria-label="TransportNet home"
          >
            Transport<span>Net</span>
          </Link>

          <Link to="/" className="rq-back">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </header>

      <div className="rq-container rq-layout">
        {/* Left: introduction */}
        <section className="rq-intro" aria-labelledby="rq-heading">
          <p className="rq-eyebrow">
            <span aria-hidden="true" />
            Request a quote
          </p>

          <h1
            id="rq-heading"
            className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
          >
            Your next shipment.
            <br />
            <span className="text-[#1684e8]">Starts here.</span>
          </h1>

          <p className="rq-description text-sm leading-6">
            Tell us what you’re moving and where it needs to go.
            We’ll help you find a logistics solution that fits your
            cargo, route, and business.
          </p>

          <div className="rq-service-tags">
            {[
              { label: "Ocean freight", Icon: Ship },
              { label: "Air freight", Icon: Plane },
              { label: "Road transport", Icon: Truck },
            ].map(({ label, Icon }) => (
              <span key={label}>
                <Icon size={16} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div className="rq-image">
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=85"
              alt="Container ship transporting freight"
              width="1000"
              height="650"
            />

            <div className="rq-image-overlay" />

            <div className="rq-image-caption">
              <p className="text-xl font-semibold tracking-tight">
                Connected globally.
                <br />
                Committed personally.
              </p>

              <ArrowUpRight size={26} aria-hidden="true" />
            </div>
          </div>

          <ul className="rq-benefits">
            {[
              "Options tailored to your shipment",
              "Support with routes and requirements",
              "Clear communication at every step",
            ].map((item) => (
              <li key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Right: form */}
        <section className="rq-card" aria-labelledby="rq-form-heading">
          <div className="rq-card-heading">
            <p className="rq-eyebrow">Let’s get moving</p>

            <h2
              id="rq-form-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              Tell us about your shipment
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Share a few details so our team can review your
              requirements.
            </p>
          </div>

          {submitted ? (
            <div className="rq-success" role="status">
              <span className="rq-success-icon">
                <CheckCircle2 size={34} aria-hidden="true" />
              </span>

              <h3 className="text-2xl font-semibold tracking-tight">
                Request received!
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Thank you for contacting TransportNet. Our team will
                review your shipment details and get back to you.
              </p>

              <button
                type="button"
                className="rq-submit"
                onClick={() => setSubmitted(false)}
              >
                Send another request
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <fieldset disabled={loading} className="rq-fieldset">
                <div className="rq-form-grid">
                  <div>
                    <label htmlFor="rq-name">Full name *</label>
                    <input
                      id="rq-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="rq-email">Email address *</label>
                    <input
                      id="rq-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="rq-phone">Phone number</label>
                    <input
                      id="rq-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Include country code"
                    />
                  </div>

                  <div>
                    <label htmlFor="rq-company">Company name</label>
                    <input
                      id="rq-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="rq-service">Service type *</label>
                    <select
                      id="rq-service"
                      name="service"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rq-weight">
                      Estimated weight (kg)
                    </label>
                    <input
                      id="rq-weight"
                      name="weight"
                      type="number"
                      min="0.01"
                      step="any"
                      placeholder="e.g. 500"
                    />
                  </div>

                  <div>
                    <label htmlFor="rq-origin">Origin *</label>
                    <input
                      id="rq-origin"
                      name="origin"
                      type="text"
                      placeholder="City, country"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="rq-destination">
                      Destination *
                    </label>
                    <input
                      id="rq-destination"
                      name="destination"
                      type="text"
                      placeholder="City, country"
                      required
                    />
                  </div>

                  <div className="rq-full-width">
                    <label htmlFor="rq-details">Shipment details</label>
                    <textarea
                      id="rq-details"
                      name="details"
                      rows={4}
                      placeholder="Cargo type, dimensions, preferred shipping date, or special requirements..."
                    />
                  </div>
                </div>

                {error && (
                  <p className="rq-error" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="rq-submit"
                >
                  {loading ? (
                    <>
                      <LoaderCircle
                        size={18}
                        aria-hidden="true"
                        className="rq-spinner"
                      />
                      Sending request…
                    </>
                  ) : (
                    <>
                      Request a quote
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
      </div>

      <footer className="rq-footer">
        <div className="rq-container">
          <p>
            © {new Date().getFullYear()} TransportNet. All rights
            reserved.
          </p>
          <a href="/#contact">Contact our team</a>
        </div>
      </footer>
    </main>
  );
}