import { useState } from "react";
import { ArrowUpRight, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-blue-500/10 border border-slate-100 grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side: Login Form */}
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col items-start mb-8">
            <Link to="/" className="flex items-center gap-3 focus:outline-none mb-4">
              <img
                src="/images/Coastshipp.jpeg"
                alt="Coast Shipping"
                className="h-10 w-12 rounded-lg object-contain bg-white border border-slate-200 p-1"
              />
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Log in to manage your shipments and track cargo.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                    <Mail className="size-4" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="block w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-950 placeholder-slate-400 focus:border-[#8b3f80] focus:outline-none focus:ring-2 focus:ring-[#8b3f80]/20"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-[#8b3f80] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                    <Lock className="size-4" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-950 placeholder-slate-400 focus:border-[#8b3f80] focus:outline-none focus:ring-2 focus:ring-[#8b3f80]/20"
                  />
                </div>
              </div>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#8b3f80] py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[#c7854b] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8b3f80] focus:ring-offset-2"
            >
              Sign In
              <ArrowUpRight className="size-4.5" />
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/request-quote"
              className="font-medium text-[#8b3f80] hover:underline"
            >
              Request a quote
            </Link>
          </div>
        </div>

        {/* Right Side: Dummy Image Banner */}
        <div className="relative hidden lg:block bg-slate-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
            alt="Logistics container port"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-12 text-white">
            <h2 className="text-2xl font-bold">Secure Global Tracking</h2>
            <p className="mt-2 text-sm text-slate-300">
              Access your real-time container updates, schedules, and digital documentation instantly.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}