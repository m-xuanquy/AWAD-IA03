import LoginForm from "@/components/login-form"

function Login() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl border p-6 bg-white">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <LoginForm />
      </div>
    </main>
  )
}

export default Login