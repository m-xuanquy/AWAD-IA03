import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl border p-6 bg-white text-center">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted-foreground mt-2">Welcome to the app.</p>
      </div>
      <button onClick={() => navigate("/login")} className="mt-4 bg-white rounded-xl border p-2 ">Go to Login</button>
      <button onClick={() => navigate("/signup")} className="mt-4 bg-white rounded-xl border p-2 ">Go to Sign up</button>
    </main>
  )
}

export default Home