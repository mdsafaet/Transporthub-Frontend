import { useState } from "react";
import { Check, Search, LoaderCircle } from "lucide-react";
import SectionKicker from "../common/SectionKicker";
import Reveal from "../common/Reveal";

export default function TrackingSection() {
  const [tracking, setTracking] = useState("");
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async (event) => {
    event.preventDefault();

    const reference = tracking.trim();

    setError("");
    setShipment(null);

    if (!reference) {
      setError("Please enter your container number.");
      return;
    }

    setLoading(true);

    try {
      // Replace with your container tracking API.
      const response = await fetch(
        `/api/tracking/${encodeURIComponent(reference)}`,
        {
          headers: { Accept: "application/json" },
          cache: "no-store",
        },
      );

      if (response.status === 404) {
        setError("Container not found. Check the number and try again.");
        return;
      }

      if (!response.ok) {
        throw new Error("Tracking request failed");
      }

      const data = await response.json();

      if (!data || typeof data.status !== "string") {
        throw new Error("Invalid tracking response");
      }

      setShipment(data);
    } catch {
      setError(
        "Tracking is currently unavailable. Please try again later.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="tracking"
      className="tracking-section section-pad relative overflow-hidden bg-[#071525] text-white"
      aria-labelledby="tracking-heading"
    >
      <div
        className="route-map pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1380px] items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <SectionKicker>Container tracking</SectionKicker>

          <h2
            id="tracking-heading"
            className="max-w-[570px] text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
          >
            Follow your cargo.
            <span className="text-[#55afff]"> Plan your next move.</span>
          </h2>

          <p className="mt-6 max-w-[470px] text-sm leading-6 text-white/60">
            Check your container’s available status and journey details
            in one place. Enter your container number to get started.
          </p>

          <div className="mt-8 flex flex-wrap gap-8 text-sm text-white/70">
            <span>
              <Check
                aria-hidden="true"
                className="mr-2 inline size-4 text-[#55afff]"
              />
              Container status
            </span>

            <span>
              <Check
                aria-hidden="true"
                className="mr-2 inline size-4 text-[#55afff]"
              />
              Shipment updates
            </span>
          </div>
        </Reveal>

        <Reveal className="delay-2">
          <div className="relative rounded-[28px] border border-white/10 bg-white/[.07] p-4 shadow-2xl backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs text-white/60">
                  CONTAINER TRACKER
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">
                  Find your container
                </h3>
              </div>

              <div className="rounded-full bg-[#173c5b] p-3 text-[#63b7ff]">
                <Search aria-hidden="true" className="size-5" />
              </div>
            </div>

            <form onSubmit={handleTrack} className="mt-6">
              <label
                htmlFor="container-reference"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Container number
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="container-reference"
                  name="containerNumber"
                  type="text"
                  required
                  disabled={loading}
                  value={tracking}
                  onChange={(event) => {
                    setTracking(event.target.value);
                    setShipment(null);
                    setError("");
                  }}
                  autoCapitalize="characters"
                  spellCheck={false}
                  placeholder="Enter container number"
                  aria-invalid={Boolean(error)}
                  aria-describedby={
                    error
                      ? "container-help container-error"
                      : "container-help"
                  }
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[.07] px-4 py-4 text-base text-white outline-none placeholder:text-white/50 focus:border-[#48aaff] disabled:opacity-60 sm:text-sm"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#168af0] px-6 py-4 text-sm font-bold transition hover:bg-[#53b1ff] disabled:cursor-wait disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <LoaderCircle
                        aria-hidden="true"
                        className="size-4 animate-spin motion-reduce:animate-none"
                      />
                      Searching…
                    </>
                  ) : (
                    "Track container"
                  )}
                </button>
              </div>

              <p
                id="container-help"
                className="mt-3 text-xs leading-5 text-white/60"
              >
                Find your container number in your shipping documents.
              </p>
            </form>

            {error && (
              <p
                id="container-error"
                role="alert"
                className="mt-5 rounded-xl border border-red-300/25 bg-red-400/10 p-4 text-sm text-red-200"
              >
                {error}
              </p>
            )}

            <p className="sr-only" role="status">
              {loading
                ? "Searching for your container."
                : shipment
                  ? `Container status: ${shipment.status}`
                  : ""}
            </p>

            {shipment && (
              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="grid gap-5 sm:grid-cols-3">
                  {[
                    ["Origin", shipment.origin || "Not available"],
                    [
                      "Destination",
                      shipment.destination || "Not available",
                    ],
                    ["Status", shipment.status],
                  ].map(([label, value]) => (
                    <div key={label} className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-white/60">
                        {label}
                      </p>
                      <p
                        className={`mt-2 break-words text-sm font-semibold ${
                          label === "Status" ? "text-[#61b6ff]" : ""
                        }`}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {shipment.estimatedDelivery && (
                  <p className="mt-6 text-sm leading-6 text-white/70">
                    Estimated delivery:{" "}
                    <span className="font-medium text-white">
                      {shipment.estimatedDelivery}
                    </span>
                  </p>
                )}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}