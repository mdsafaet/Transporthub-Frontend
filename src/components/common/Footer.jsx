const exploreLinks = ['Services', 'Tracking', 'About', 'Insights']
const serviceLinks = ['Ocean freight', 'Air freight', 'Warehousing', 'Customs']

export default function Footer() {
  return (
    <footer className="bg-[#06111f] px-6 pb-8 pt-16 text-white lg:px-10">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-3" aria-label="TransportNet home">
              <span className="logo-mark">
                <span />
              </span>
              <span className="font-semibold tracking-[-0.04em] text-[19px]">
                Tranport<span className="text-[#4fa8ff]">Net</span>
              </span>
            </a>
            <p className="mt-5 max-w-[280px] text-sm leading-6 text-white/45">
              The intelligent logistics partner for a world in motion.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">Explore</p>
            {exploreLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="mb-3 block text-sm text-white/65 hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">Services</p>
            {serviceLinks.map((item) => (
              <a key={item} href="#services" className="mb-3 block text-sm text-white/65 hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">Contact</p>
            <p className="text-sm text-white/65">hello@cargosphere.global</p>
            <p className="mt-3 text-sm text-white/65">+1 212 555 0148</p>
            <p className="mt-3 text-sm text-white/65">New York · Rotterdam · Singapore</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-white/35 sm:flex-row">
          <span>© 2026 Tranport Net . All rights reserved.</span>
          <p className="text-xs text-slate-400">
  Develop By{" "}
  <a
    href="https://agni.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#1684e8] hover:underline"
  >
    Agni System Plc
  </a>
</p>

          <span>Privacy · Terms · Security</span>
        </div>
      </div>
    </footer>
  )
}
