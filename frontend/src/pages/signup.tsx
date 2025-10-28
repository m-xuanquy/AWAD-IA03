import RegisterForm from "@/components/register-form"

function SignUp() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl border p-6 bg-white">
        <h1 className="text-2xl font-semibold mb-4">Create an account</h1>
        <RegisterForm />
      </div>
    </main>
  )
}

export default SignUp