
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import API from "../api/api";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#171c24] text-white">

      <div className="hidden w-1/2 flex-col justify-between bg-[#202630] p-14 lg:flex">

        <Link to="/" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f04438] text-xl font-black">
            S
          </div>

          <span className="text-2xl font-black">
            SFS
          </span>

        </Link>

        <div>

          <ShieldCheck
            size={70}
            className="text-[#f0533a]"
          />

          <h1 className="mt-8 max-w-[520px] text-5xl font-black leading-tight">
            Your files.
            <br />
            Your privacy.
            <br />
            Your control.
          </h1>

          <p className="mt-6 max-w-[500px] text-lg leading-8 text-gray-400">
            Access your secure dashboard and manage your files securely.
          </p>

        </div>

        <div>

          <p className="font-bold text-[#f0533a]">
            CREATED BY RAJAT CHITRANSH
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Secure File Sharing System © 2026
          </p>

        </div>

      </div>

      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">

        <div className="w-full max-w-[460px]">

          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 font-bold hover:text-[#f0533a]"
          >
            <ArrowLeft size={18} />
            Back to home
          </Link>

          <p className="font-bold tracking-[0.15em] text-[#f0533a]">
            WELCOME BACK
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Log in to your account
          </h2>

          <p className="mt-3 text-gray-400">
            Enter your credentials to continue.
          </p>

          <form
            onSubmit={handleLogin}
            className="mt-10"
          >

            <label className="font-bold">
              Email Address
            </label>

            <div className="mt-3 flex items-center rounded-xl border border-white/15 bg-[#202630] px-4">

              <Mail size={20} className="text-gray-500" />

              <input
                type="email"
                placeholder="rajat@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-4 py-4 text-white outline-none"
              />

            </div>

            <label className="mt-6 block font-bold">
              Password
            </label>

            <div className="mt-3 flex items-center rounded-xl border border-white/15 bg-[#202630] px-4">

              <LockKeyhole size={20} className="text-gray-500" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent px-4 py-4 text-white outline-none"
              />

<button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="text-gray-400"
>
  {showPassword ? (
    <EyeOff size={20} />
  ) : (
    <Eye size={20} />
  )}
</button>

            </div>

            <div className="mt-6 flex items-center justify-between text-sm">

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  className="accent-[#f0533a]"
                />

                Remember me

              </label>

              <button
                type="button"
                className="font-bold text-[#f0533a]"
              >
                Forgot Password?
              </button>

            </div>

            {message && (

              <div className="mt-6 rounded-xl border border-[#f0533a]/40 bg-[#f0533a]/10 px-4 py-3 text-sm text-[#ff7b69]">

                {message}

              </div>

            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full rounded-xl bg-[#f0533a] py-4 font-bold transition hover:bg-[#e94735]"
            >

              {loading
                ? "Logging in..."
                : "Log in Securely"}

            </button>

          </form>

          <div className="my-8 flex items-center gap-4">

            <div className="h-px flex-1 bg-white/10"></div>

            <span className="text-xs text-gray-500">

              SECURE LOGIN

            </span>

            <div className="h-px flex-1 bg-white/10"></div>

          </div>

          <p className="text-center text-gray-400">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="font-bold text-[#f0533a] hover:underline"
            >
              Create account
            </Link>

          </p>

          <p className="mt-10 text-center text-xs text-gray-600">

            Project by Rajat Chitransh

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;