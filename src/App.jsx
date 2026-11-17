import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import LoginPage from './features/auth/pages/LoginPage.jsx'
import RegisterPage from './features/auth/pages/RegisterPage.jsx'

function App() {

  const navigate = useNavigate()

  const [inviteCode, setInviteCode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleContinue() {
    if (!inviteCode.trim()) {
      setError('Please enter your invitation code')
      return
    }

    setError('')
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      navigate('/signup')
    }, 500)
  }

  return (
    <Routes>
      <Route path="/" element={
        <main className="min-h-screen bg-[#080D1A] px-5 py-10 text-white flex items-center justify-center">

          <section className="w-full max-w-md animate-fade-in-up">

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

            {/* Invitation content */}
            <div>
              <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
                Private community
              </p>

              <h1 className="text-3xl font-bold mt-4 leading-tight">
                Your circle.
                <br />
                Your conversations.
              </h1>

              <p className="text-slate-400 mt-4 leading-relaxed">
                CrewChat is a private space for you and your
                friends. Enter your invitation code to get started.
              </p>
            </div>

            {/* Invitation form */}
            <form
              className="mt-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault()
                handleContinue()
              }}
            >

              <div>
                <label
                  htmlFor="inviteCode"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Invitation code
                </label>

                <input
                  id="inviteCode"
                  type="text"
                  placeholder="Enter your invitation code"
                  value={inviteCode}
                  onChange={(e) => {
                    setInviteCode(e.target.value)
                    setError('')
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-[#111C2E] px-4 py-4 text-white placeholder:text-slate-500 outline-none focus:border-blue-500"
                />
                {error && (
                  <p className="mt-2 text-sm text-red-400">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? 'Checking invitation...' : 'Continue'}
              </button>

            </form>

            <p className="mt-4 text-center text-sm text-slate-400">
              Already registered?{' '}
              <Link
                to="/login"
                className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Sign in
              </Link>
            </p>

          </section>

        </main>
      } />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<RegisterPage />} />

    </Routes>
  )
}

export default App
