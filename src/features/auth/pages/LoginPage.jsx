import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
function LoginPage() {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <main className="min-h-screen bg-[#080D1A] px-5 py-10 text-white flex items-center justify-center">

            <section className="w-full max-w-md">

                {/* CrewChat branding */}
                <div className="flex items-center gap-3 mb-12">
                    <div className="h-14 w-14 shrink-0 heartbeat-glow">
                        <svg
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-full w-full"
                        >
                            {/* Shield */}
                            <path
                                d="M32 4L55 13V29C55 43 46 54 32 61C18 54 9 43 9 29V13L32 4Z"
                                stroke="#2563EB"
                                strokeWidth="3"
                                strokeLinejoin="round"
                            />

                            {/* Chat bubble */}
                            <path
                                d="M18 22C18 18.7 20.7 16 24 16H43C46.3 16 49 18.7 49 22V33C49 36.3 46.3 39 43 39H31L23 45V39H24C20.7 39 18 36.3 18 33V22Z"
                                stroke="white"
                                strokeWidth="2.5"
                                strokeLinejoin="round"
                            />

                            {/* Conversation dots */}
                            <circle cx="27" cy="27.5" r="2" fill="#2563EB" />
                            <circle cx="34" cy="27.5" r="2" fill="#2563EB" />
                            <circle cx="41" cy="27.5" r="2" fill="#2563EB" />

                            {/* Lock */}
                            <rect x="38" y="39" width="15" height="13" rx="3" fill="#2563EB" />
                            <path
                                d="M42 39V35.5C42 33.6 43.6 32 45.5 32C47.4 32 49 33.6 49 35.5V39"
                                stroke="#2563EB"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <span className="text-2xl font-bold tracking-wide">
                        CrewChat
                    </span>
                </div>

                {/* Page heading */}
                <div className="mb-10">
                    <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
                        Private community
                    </p>

                    <h1 className="text-3xl font-bold mt-4">
                        Welcome back
                    </h1>

                    <p className="text-slate-400 mt-3">
                        Sign in to continue to CrewChat.
                    </p>
                </div>

                {/* Login form */}
                <form className="space-y-5">

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-300 mb-2"
                        >
                            Email address
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded-xl border border-slate-700 bg-[#111C2E] px-4 py-4 text-white placeholder:text-slate-500 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-slate-300 mb-2"
                        >
                            Password
                        </label>

                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className="w-full rounded-xl border border-slate-700 bg-[#111C2E] px-4 py-4 pr-12 text-white placeholder:text-slate-500 outline-none focus:border-blue-500"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                    >
                        Sign in
                    </button>

                </form>

                <p className="mt-6 text-center text-sm text-slate-400">
                    Don't have an account?{' '}
                    <Link
                        to="/"
                        className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Get invited
                    </Link>
                </p>

                <p className="mt-8 text-center text-xs text-slate-500">
                    CrewChat is a private, invitation-only community.
                </p>

            </section>

        </main>
    )
}

export default LoginPage