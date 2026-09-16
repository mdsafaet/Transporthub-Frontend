import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);

    if (!onLogin) {
      setError("Connect your login API to enable sign in.");
      return;
    }

    setLoading(true);

    try {
      await onLogin({
        email: formData.get("email").trim(),
        password: formData.get("password"),
        remember: formData.get("remember") === "on",
      });
    } catch {
      setError("Unable to sign in. Check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      {/* Left: login form */}
      <section className="login-panel">
        <Link
          to="/"
          className="inline-flex items-center gap-3 self-start"
          aria-label="TransportNet home"
        >
  <img
    src="/images/Coastshipp.jpeg"
    alt=""
    className="h-16 w-16 "
  />

          <span className="text-xl font-semibold tracking-tight text-[#071525]">
            Coast<span className="text-[#1684e8]"> Shipping</span>
          </span>
        </Link>

        <div className="login-form-container">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1684e8]">
            Your logistics workspace
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#071525] sm:text-5xl">
            Welcome back.
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Sign in to manage your shipments and keep your business moving.
          </p>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#071525]"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="you@company.com"
                required
                className="login-input"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#071525]"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  className="login-input login-password-input"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-controls="password"
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 transition hover:text-[#1684e8]"
                >
                  {showPassword ? (
                    <EyeOff aria-hidden="true" className="size-5" />
                  ) : (
                    <Eye aria-hidden="true" className="size-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="remember"
                  className="size-4 accent-[#1684e8]"
                />
                Remember me
              </label>

              <a
                href="/forgot-password"
                className="text-sm font-semibold text-[#1684e8] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#1684e8] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#0873d1] disabled:cursor-wait disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
              {!loading && (
                <ArrowRight aria-hidden="true" className="size-4" />
              )}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-slate-500">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-[#1684e8] hover:underline"
            >
              Create an account
            </a>
          </p>
        </div>

        <p className="mt-10 text-xs text-slate-400">
          © {new Date().getFullYear()} TransportNet. All rights reserved.
        </p>
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
      </section>

      {/* Right: image */}
      <aside className="login-image-panel">
        <img
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=85"
          alt="Cargo ship carrying shipping containers"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="login-image-overlay" />

        <div className="relative z-10 flex h-full flex-col justify-between p-12 xl:p-16">
          <span className="self-start rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-md">
            Connected logistics. Simplified.
          </span>

          <div className="max-w-lg">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#79c2ff]">
              Moving what matters
            </p>

            <h2 className="text-5xl font-semibold leading-[1.08] tracking-tight text-white xl:text-6xl">
              Your world.
              <br />
              Always in motion.
            </h2>

            <p className="mt-6 max-w-sm text-base leading-7 text-white/75">
              One place to manage your cargo, follow every shipment, and
              stay connected to your supply chain.
            </p>
          </div>
        </div>
      </aside>
    </main>
  );
}