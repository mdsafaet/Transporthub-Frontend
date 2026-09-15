import React from 'react'
import { ArrowRight } from "lucide-react";
import SectionKicker from '../common/SectionKicker';

const Contact = () => {
  return (
    <section
      id="contact"
      className="cta-section relative overflow-hidden px-6 py-24 text-white lg:px-10 lg:py-36"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[#061525]/80" />
      <div className="relative mx-auto max-w-[1380px] text-center">
        <SectionKicker>Start a conversation</SectionKicker>
        <h2 className="mx-auto max-w-[800px] text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">
          Ready to ship your cargo?
        </h2>
        <p className="mx-auto mt-6 max-w-[480px] text-white/60">
          Tell us where you are going. We will show you the smartest way to get
          there.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@cargosphere.global"
            className="rounded-full bg-[#168af0] px-7 py-4 text-sm font-bold hover:bg-[#54b2ff]"
          >
            Contact us <ArrowRight className="ml-4 inline size-4" />
          </a>
          <a
            href="mailto:hello@cargosphere.global?subject=Shipping%20quote%20request"
            className="rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold hover:bg-white/20"
          >
            Request a quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact


