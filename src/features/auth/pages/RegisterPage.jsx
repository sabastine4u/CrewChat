import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const passwordRequirements = {
        minLength: password.length >= 8,
        hasUppercase: /[A-Z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecialCharacter: /[^A-Za-z0-9]/.test(password),
    }
function handleRegister(e) {
    e.preventDefault()

    setSuccess('')

    const allRequirementsMet = Object.values(passwordRequirements).every(Boolean)

    if (!allRequirementsMet) {
        setError('Please meet all password requirements.')
        return
    }

    if (password !== confirmPassword) {
        setError('Passwords do not match. Please try again.')
        return
    }

    setError('')
    setSuccess('Your passwords match! You can proceed with registration.')
}

    return (


        <main className="min-h-screen bg-[#080D1A] px-5 py-10 text-white flex items-center justify-center">

            <section className="w-full max-w-md">
                {/* CrewChat branding */}
                <Link
                    to="/"
                    className="flex items-center gap-3 mb-10 w-fit cursor-pointer"
                    aria-label="Return to invitation homepage"
                >
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
                </Link>
                <h1 className="text-3xl font-bold">
                    Create your account
                </h1>

                <p className="text-slate-400 mt-3">
                    Join your circle on CrewChat.
                </p>

                <form
                    className="mt-8 space-y-5"
                    onSubmit={handleRegister}
                >

                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-slate-300 mb-2"
                        >
                            Full name
                        </label>

                        <input
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full rounded-xl border border-slate-700 bg-[#111C2E] px-4 py-4 text-white placeholder:text-slate-500 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-slate-300 mb-2"
                        >
                            Username
                        </label>

                        <input
                            id="username"
                            type="text"
                            placeholder="Choose a username"
                            className="w-full rounded-xl border border-slate-700 bg-[#111C2E] px-4 py-4 text-white placeholder:text-slate-500 outline-none focus:border-blue-500"
                        />
                    </div>

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
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                    <div className="mt-3 space-y-2 text-sm">
                        <p className={passwordRequirements.minLength ? 'text-green-400' : 'text-slate-400'}>
                            ✓ At least 8 characters
                        </p>

                        <p className={passwordRequirements.hasUppercase ? 'text-green-400' : 'text-slate-400'}>
                            ✓ One uppercase letter (A–Z)
                        </p>

                        <p className={passwordRequirements.hasNumber ? 'text-green-400' : 'text-slate-400'}>
                            ✓ One number (0–9)
                        </p>

                        <p className={passwordRequirements.hasSpecialCharacter ? 'text-green-400' : 'text-slate-400'}>
                            ✓ One special character (@, #, !, etc.)
                        </p>
                    </div>

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-slate-300 mb-2"
                        >
                            Confirm password
                        </label>

                        <div className="relative">
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full rounded-xl border border-slate-700 bg-[#111C2E] px-4 py-4 pr-12 text-white placeholder:text-slate-500 outline-none focus:border-blue-500"
                            />

                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>
                    {error && (
                        <p className="text-sm text-red-400" role="alert">
                            {error}
                        </p>
                    )}
                    {success && (
                        <p className="text-sm text-green-400" role="status">
                            {success}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                    >
                        Create account
                    </button>

                </form>
                <p className="mt-6 text-center text-sm text-slate-400">
                    Changed your mind?{' '}
                    <Link
                        to="/"
                        className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        ← Back to invitation page
                    </Link>
                </p>
            </section>

        </main>
    )
}

export default RegisterPage