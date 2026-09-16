import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionKicker from "../common/SectionKicker";

export default function Contact() {
  return (
    <section
      id="contact"
      className="cta-section relative overflow-hidden px-6 py-24 text-white lg:px-10 lg:py-36"
      aria-labelledby="contact-cta-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#061525]/80"
      />

      <div className="relative mx-auto max-w-[1380px] text-center">
        <div className="flex justify-center">
          <SectionKicker>Plan your next shipment</SectionKicker>
        </div>

        <h2
          id="contact-cta-heading"
          className="mx-auto max-w-[800px] text-5xl font-semibold tracking-[-0.07em] sm:text-7xl"
        >
          Ready to move your container?
        </h2>

        <p className="mx-auto mt-6 max-w-[480px] text-white/60">
          Share your cargo details, origin, and destination. Our team
          will help you explore sailing options and transport
          arrangements.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-[#168af0] px-7 py-4 text-sm font-bold transition hover:bg-[#54b2ff]"
          >
            Contact our team
            <ArrowRight
              aria-hidden="true"
              className="ml-4 inline size-4"
            />
          </Link>

          <Link
            to="/request-quote"
            className="rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold transition hover:bg-white/20"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}