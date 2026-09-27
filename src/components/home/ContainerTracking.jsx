import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Compass,
  ArrowRight,
  CheckCircle2,
  Ship,
  Route,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function ContainerTracking() {
  const [activeTab, setActiveTab] = useState("track");

  const [trackingId, setTrackingId] = useState("");

  const [origin, setOrigin] = useState("Chittagong (CGP)");

  const [destination, setDestination] = useState("Singapore (SIN)");

  const handleTrack = () => {
    alert(
      `Tracking status requested for: ${
        trackingId || "Sample Container"
      }`
    );
  };

  const handleRoute = () => {
    alert(
      `Calculating route from ${origin} to ${destination}...`
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700;800&display=swap');

        .exo-font {
          font-family: 'Exo', sans-serif;
        }
      `}</style>

      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[#07111f]
          px-4
          py-16
          sm:px-6
          sm:py-20
          md:px-12
          lg:px-20
          lg:py-24
          exo-font
        "
      >
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="Global Container Terminal Port Background"
            className="h-full w-full object-cover object-center"
          />

          {/* dark professional overlay */}
          <div className="absolute inset-0" />

          {/* additional gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#07111f]/20
              via-[#07111f]/70
              to-[#07111f]
            "
          />
        </div>

        {/* ambient lights */}

        <div
          className="
            pointer-events-none
            absolute
            left-[12%]
            top-[30%]
            z-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#8b3f80]/15
            blur-[130px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[5%]
            right-[8%]
            z-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/10
            blur-[140px]
          "
        />

        {/* subtle grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            opacity-[0.045]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* =====================================================
            CONTAINER
        ====================================================== */}

        <div className="relative z-10 mx-auto max-w-[1500px]">
          {/* ===================================================
              HEADER
          ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mb-10
              max-w-3xl
              text-center
              sm:mb-12
            "
          >
            {/* eyebrow */}

            <div
              className="
                mx-auto
                mb-4
                inline-flex
                w-fit
                items-center
                gap-2

                rounded-full
                border
                border-[#c7854b]/20

                bg-[#c7854b]/10

                px-3.5
                py-1.5

                backdrop-blur-md
              "
            >
              <Compass className="size-4 text-[#c7854b]" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#c7854b]
                  sm:text-xs
                "
              >
                Global Logistics Hub
              </span>
            </div>

            {/* heading */}

            <h2
              className="
                text-3xl
                font-bold
                leading-[1.12]
                tracking-[-0.02em]
                text-white

                sm:text-4xl

                lg:text-[48px]
              "
            >
              Real-Time Tracking & Route Planner
            </h2>

            {/* description */}

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-slate-300

                sm:text-base
              "
            >
              Monitor container shipments across global sea lanes
              or estimate routes and transit schedules in seconds.
            </p>

            {/* =================================================
                TAB SWITCHER
            ================================================== */}

            <div
              className="
                mx-auto
                mt-7
                flex
                w-fit
                rounded-full
                border
                border-white/10
                bg-white/[0.045]
                p-1
                backdrop-blur-xl
              "
            >
              <button
                onClick={() => setActiveTab("track")}
                className={`
                  rounded-full
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  transition-all
                  duration-300

                  sm:px-6
                  sm:text-sm

                  ${
                    activeTab === "track"
                      ? `
                        bg-[#8b3f80]
                        text-white
                        shadow-[0_8px_25px_rgba(139,63,128,.3)]
                      `
                      : `
                        text-slate-300
                        hover:text-white
                      `
                  }
                `}
              >
                Track Shipment
              </button>

              <button
                onClick={() => setActiveTab("quote")}
                className={`
                  rounded-full
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  transition-all
                  duration-300

                  sm:px-6
                  sm:text-sm

                  ${
                    activeTab === "quote"
                      ? `
                        bg-[#8b3f80]
                        text-white
                        shadow-[0_8px_25px_rgba(139,63,128,.3)]
                      `
                      : `
                        text-slate-300
                        hover:text-white
                      `
                  }
                `}
              >
                Instant Route Quote
              </button>
            </div>
          </motion.div>

          {/* ===================================================
              MAIN GRID
          ==================================================== */}

          <div
            className="
              grid
              grid-cols-1
              items-stretch
              gap-6

              lg:grid-cols-12
              lg:gap-7
            "
          >
            {/* =================================================
                LEFT CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
              }}
              className="
                relative
                overflow-hidden

                rounded-[26px]

                border
                border-white/20

                bg-[#5c5a96]

                p-5

                shadow-[0_25px_70px_rgba(92,90,150,0.35)]

                backdrop-blur-xl

                sm:p-7

                lg:col-span-5
              "
            >
              {/* accent glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  size-64
                  rounded-full
                  bg-white/10
                  blur-[90px]
                "
              />

              <div className="relative z-10">
                {activeTab === "track" ? (
                  /* =============================================
                      TRACK
                  ============================================== */

                  <div className="space-y-6">
                    {/* top icon */}

                    <div
                      className="
                        flex
                        size-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/20
                        bg-black/20
                      "
                    >
                      <Search className="size-5 text-[#c7854b]" />
                    </div>

                    {/* heading */}

                    <div>
                      <h3
                        className="
                          text-xl
                          font-semibold
                          tracking-tight
                          text-white
                        "
                      >
                        Container or BL Tracking
                      </h3>

                      <p
                        className="
                          mt-2
                          text-xs
                          leading-5
                          text-slate-100
                        "
                      >
                        Enter your container number, booking ID,
                        or Bill of Lading to check the latest
                        shipment status.
                      </p>
                    </div>

                    {/* field */}

                    <div>
                      <label
                        className="
                          mb-2
                          block
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-slate-200
                        "
                      >
                        Tracking Number
                      </label>

                      <div className="relative">
                        <input
                          type="text"
                          value={trackingId}
                          onChange={(e) =>
                            setTrackingId(e.target.value)
                          }
                          placeholder="e.g. CSXU9823104"
                          className="
                            w-full
                            rounded-xl

                            border
                            border-white/20

                            bg-black/20

                            px-4
                            py-3.5
                            pr-12

                            text-sm
                            text-white

                            outline-none

                            placeholder:text-slate-300

                            transition-all
                            duration-300

                            focus:border-[#c7854b]
                            focus:bg-black/30
                            focus:ring-4
                            focus:ring-[#c7854b]/20
                          "
                        />

                        <Search
                          className="
                            absolute
                            right-4
                            top-1/2
                            size-[18px]
                            -translate-y-1/2
                            text-slate-300
                          "
                        />
                      </div>
                    </div>

                    {/* button */}

                    <button
                      onClick={handleTrack}
                      className="
                        group
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2

                        rounded-xl

                        bg-[#8b3f80]

                        px-5
                        py-3.5

                        text-sm
                        font-semibold
                        text-white

                        shadow-[0_12px_28px_rgba(139,63,128,.25)]

                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:bg-[#743469]
                        hover:shadow-[0_16px_34px_rgba(139,63,128,.34)]
                      "
                    >
                      Track Live Status

                      <ArrowRight
                        className="
                          size-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </button>

                    {/* features */}

                    <div
                      className="
                        space-y-3
                        border-t
                        border-white/20
                        pt-5
                      "
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            flex
                            size-7
                            items-center
                            justify-center
                            rounded-lg
                            bg-black/20
                          "
                        >
                          <CheckCircle2 className="size-4 text-[#c7854b]" />
                        </div>

                        <span className="text-xs text-slate-100">
                          24/7 Satellite IoT container monitoring
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div
                          className="
                            flex
                            size-7
                            items-center
                            justify-center
                            rounded-lg
                            bg-black/20
                          "
                        >
                          <CheckCircle2 className="size-4 text-[#c7854b]" />
                        </div>

                        <span className="text-xs text-slate-100">
                          Real-time port customs update alerts
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* =============================================
                      QUOTE
                  ============================================== */

                  <div className="space-y-6">
                    <div
                      className="
                        flex
                        size-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/20
                        bg-black/20
                      "
                    >
                      <Route className="size-5 text-[#c7854b]" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Instant Route Quote
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-slate-100">
                        Select origin and destination ports to get
                        estimated routing and transit information.
                      </p>
                    </div>

                    {/* origin */}

                    <div>
                      <label
                        className="
                          mb-2
                          block
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-slate-200
                        "
                      >
                        Origin Port
                      </label>

                      <input
                        type="text"
                        value={origin}
                        onChange={(e) =>
                          setOrigin(e.target.value)
                        }
                        className="
                          w-full
                          rounded-xl

                          border
                          border-white/20

                          bg-black/20

                          px-4
                          py-3.5

                          text-sm
                          text-white

                          outline-none

                          transition-all

                          focus:border-[#c7854b]
                          focus:bg-black/30
                          focus:ring-4
                          focus:ring-[#c7854b]/20
                        "
                      />
                    </div>

                    {/* destination */}

                    <div>
                      <label
                        className="
                          mb-2
                          block
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-slate-200
                        "
                      >
                        Destination Port
                      </label>

                      <input
                        type="text"
                        value={destination}
                        onChange={(e) =>
                          setDestination(e.target.value)
                        }
                        className="
                          w-full
                          rounded-xl

                          border
                          border-white/20

                          bg-black/20

                          px-4
                          py-3.5

                          text-sm
                          text-white

                          outline-none

                          transition-all

                          focus:border-[#c7854b]
                          focus:bg-black/30
                          focus:ring-4
                          focus:ring-[#c7854b]/20
                        "
                      />
                    </div>

                    <button
                      onClick={handleRoute}
                      className="
                        group
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2

                        rounded-xl

                        bg-[#8b3f80]

                        px-5
                        py-3.5

                        text-sm
                        font-semibold
                        text-white

                        shadow-[0_12px_28px_rgba(139,63,128,.25)]

                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:bg-[#743469]
                      "
                    >
                      Calculate Route & Rates

                      <ArrowRight
                        className="
                          size-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </button>

                    <p
                      className="
                        border-t
                        border-white/20
                        pt-5
                        text-center
                        text-[10px]
                        leading-5
                        text-slate-100
                      "
                    >
                      Verification for new enterprise accounts may
                      take up to 3 working days.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* =================================================
                RIGHT ROUTE CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
              }}
              className="
                relative
                flex
                min-h-[460px]
                flex-col
                justify-between
                overflow-hidden

                rounded-[26px]

                border
                border-white/20

                bg-[#5c5a96]

                p-5

                shadow-[0_25px_70px_rgba(92,90,150,0.35)]

                backdrop-blur-xl

                sm:p-7

                lg:col-span-7
              "
            >
              {/* glows */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-24
                  -top-28
                  size-72
                  rounded-full
                  bg-white/10
                  blur-[100px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-28
                  right-0
                  size-72
                  rounded-full
                  bg-black/20
                  blur-[100px]
                "
              />

              {/* internal grid */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.06]
                "
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              />

              {/* ===============================================
                  MAP HEADER
              ================================================ */}

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-start
                  justify-between
                  gap-4

                  sm:flex-row
                  sm:items-center
                "
              >
                <div>
                  <div
                    className="
                      mb-2
                      inline-flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        size-1.5
                        rounded-full
                        bg-[#c7854b]
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#c7854b]
                      "
                    >
                      Active Sea Lanes
                    </span>
                  </div>

                  <h3
                    className="
                      text-lg
                      font-semibold
                      tracking-tight
                      text-white

                      sm:text-xl
                    "
                  >
                    Asia – Middle East – Africa Corridor
                  </h3>

                  <p className="mt-1 text-[11px] text-slate-100">
                    Primary international shipping corridor
                  </p>
                </div>

                {/* legend */}

                <div
                  className="
                    flex
                    items-center
                    gap-4

                    rounded-full

                    border
                    border-white/20

                    bg-black/20

                    px-4
                    py-2

                    backdrop-blur-md
                  "
                >
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-blue-400" />

                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-wide
                        text-slate-100
                      "
                    >
                      Eastbound
                    </span>
                  </div>

                  <div className="h-4 w-px bg-white/20" />

                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#8b3f80]" />

                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-wide
                        text-slate-100
                      "
                    >
                      Westbound
                    </span>
                  </div>
                </div>
              </div>

              {/* ===============================================
                  ROUTE VISUALIZATION
              ================================================ */}

              <div
                className="
                  relative
                  z-10
                  my-7
                  flex
                  h-[230px]
                  w-full
                  items-center
                  justify-center

                  sm:h-[260px]
                "
              >
                {/* subtle radar */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2

                    size-[200px]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    border
                    border-white/10
                  "
                />

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2

                    size-[130px]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    border
                    border-white/10
                  "
                />

                {/* routes */}

                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 600 250"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  {/* eastbound */}

                  <path
                    d="M 70,182 Q 250,34 525,94"
                    stroke="rgba(59,130,246,.25)"
                    strokeWidth="8"
                    fill="none"
                  />

                  <path
                    d="M 70,182 Q 250,34 525,94"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeDasharray="7 9"
                    fill="none"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-32"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* westbound */}

                  <path
                    d="M 525,116 Q 310,224 70,200"
                    stroke="rgba(139,63,128,.25)"
                    strokeWidth="8"
                    fill="none"
                  />

                  <path
                    d="M 525,116 Q 310,224 70,200"
                    stroke="#d946ef"
                    strokeWidth="2.4"
                    fill="none"
                    strokeDasharray="6 7"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="26"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>

                {/* =============================================
                    CHITTAGONG
                ============================================== */}

                <div
                  className="
                    absolute
                    bottom-[17%]
                    left-[8%]
                    flex
                    flex-col
                    items-center
                  "
                >
                  <div className="relative">
                    <span
                      className="
                        absolute
                        inset-0
                        size-4
                        animate-ping
                        rounded-full
                        bg-[#8b3f80]
                        opacity-50
                      "
                    />

                    <span
                      className="
                        relative
                        block
                        size-4

                        rounded-full

                        border-2
                        border-white

                        bg-[#8b3f80]

                        shadow-[0_0_20px_rgba(139,63,128,.7)]
                      "
                    />
                  </div>

                  <div
                    className="
                      mt-2
                      rounded-lg
                      border
                      border-white/20
                      bg-black/40
                      px-2.5
                      py-1

                      text-[10px]
                      font-semibold
                      text-white

                      shadow-lg
                      backdrop-blur-md
                    "
                  >
                    Chittagong
                  </div>
                </div>

                {/* =============================================
                    JEBEL ALI
                ============================================== */}

                <div
                  className="
                    absolute
                    left-[45%]
                    top-[17%]
                    flex
                    flex-col
                    items-center
                  "
                >
                  <span
                    className="
                      size-3.5

                      rounded-full

                      border-2
                      border-white

                      bg-[#c7854b]

                      shadow-[0_0_18px_rgba(199,133,75,.6)]
                    "
                  />

                  <div
                    className="
                      mt-2
                      rounded-lg
                      border
                      border-white/20
                      bg-black/40
                      px-2.5
                      py-1

                      text-[10px]
                      font-semibold
                      text-white

                      shadow-lg
                    "
                  >
                    Jebel Ali
                  </div>
                </div>

                {/* =============================================
                    DURBAN
                ============================================== */}

                <div
                  className="
                    absolute
                    right-[8%]
                    top-[34%]
                    flex
                    flex-col
                    items-center
                  "
                >
                  <span
                    className="
                      size-4

                      rounded-full

                      border-2
                      border-white

                      bg-blue-400

                      shadow-[0_0_18px_rgba(59,130,246,.6)]
                    "
                  />

                  <div
                    className="
                      mt-2
                      whitespace-nowrap
                      rounded-lg
                      border
                      border-white/20
                      bg-black/40
                      px-2.5
                      py-1

                      text-[10px]
                      font-semibold
                      text-white

                      shadow-lg
                    "
                  >
                    Durban / Cape Town
                  </div>
                </div>

                {/* center ship */}

                <motion.div
                  animate={{
                    x: [0, 8, 0],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-[54%]
                    top-[47%]

                    flex
                    size-10
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/20

                    bg-black/20

                    backdrop-blur-md
                  "
                >
                  <Ship className="size-[18px] text-white" />
                </motion.div>
              </div>

              {/* ===============================================
                  STATS
              ================================================ */}

              <div
                className="
                  relative
                  z-10

                  grid
                  grid-cols-1
                  gap-3

                  border-t
                  border-white/20

                  pt-5

                  sm:grid-cols-3
                "
              >
                {/* Transit */}

                <div
                  className="
                    rounded-xl

                    border
                    border-white/20

                    bg-black/20

                    p-3.5

                    backdrop-blur-md

                    transition
                    duration-300

                    hover:bg-black/30
                  "
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Clock3 className="size-4 text-[#c7854b]" />

                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-wide
                        text-slate-100
                      "
                    >
                      Avg. Transit
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-white">
                    14 – 21 Days
                  </span>
                </div>

                {/* vessel */}

                <div
                  className="
                    rounded-xl

                    border
                    border-white/20

                    bg-black/20

                    p-3.5

                    backdrop-blur-md

                    transition
                    duration-300

                    hover:bg-black/30
                  "
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Ship className="size-4 text-[#c7854b]" />

                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-wide
                        text-slate-100
                      "
                    >
                      Vessel Status
                    </span>
                  </div>

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-emerald-300
                    "
                  >
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />

                    On Schedule
                  </span>
                </div>

                {/* security */}

                <div
                  className="
                    rounded-xl

                    border
                    border-white/20

                    bg-black/20

                    p-3.5

                    backdrop-blur-md

                    transition
                    duration-300

                    hover:bg-black/30
                  "
                >
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldCheck className="size-4 text-[#c7854b]" />

                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-wide
                        text-slate-100
                      "
                    >
                      Security
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-white">
                    ISO Certified
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}