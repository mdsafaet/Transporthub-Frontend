const clientLogos = [
  { id: 1, name: "Coast Shipping", image: "/images/Coastshipp.jpeg" },
  { id: 2, name: "Coast Shipping", image: "/images/Coastshipp.jpeg" },
  { id: 3, name: "Coast Shipping", image: "/images/Coastshipp.jpeg" },
  { id: 4, name: "Coast Shipping", image: "/images/Coastshipp.jpeg" },
  { id: 5, name: "Coast Shipping", image: "/images/Coastshipp.jpeg" },
  { id: 6, name: "Coast Shipping", image: "/images/Coastshipp.jpeg" },
  { id: 7, name: "Coast Shipping", image: "/images/Coastshipp.jpeg" },
];

export default function OurClients() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="overflow-hidden bg-white py-16 font-['Exo',sans-serif] sm:py-20 lg:py-24"
    >
    <div className="mx-auto w-full max-w-[1600px] px-2 sm:px-3 lg:px-4">
        <h2
          id="clients-heading"
          className="mb-10 text-center text-xl font-medium uppercase tracking-wide text-slate-800 sm:mb-14 sm:text-2xl md:text-3xl"
        >
          Our Clients
        </h2>

        <div
          className="clients-marquee"
          tabIndex={0}
          role="region"
          aria-label="Client logos. Hover or focus to pause."
        >
          <div className="clients-marquee-track">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="clients-marquee-group"
                aria-hidden={group === 1 ? true : undefined}
              >
                {clientLogos.map((client) => (
                  <div key={client.id} className="clients-logo">
                    <img
                      src={client.image}
                      alt={client.name}
                      width={190}
                      height={96}
                      className="max-h-20 max-w-full object-contain sm:max-h-24"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}