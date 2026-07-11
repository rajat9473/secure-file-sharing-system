import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";

import API from "../api/api";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setMessage("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setMessage(
        "Password must contain at least 6 characters."
      );
      return;
    }

    try {
      setLoading(true);

      const res = await API.post(
        "/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      alert(res.data.message);

      navigate("/login");
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#171c24] text-white">

      <div className="hidden w-1/2 flex-col justify-between bg-[#202630] p-14 lg:flex">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
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

            Share securely.
            <br />
            Stay private.
            <br />
            Stay in control.

          </h1>

          <p className="mt-6 max-w-[500px] text-lg leading-8 text-gray-400">

            Create your secure account and
            start managing files safely.

          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#f0533a]" />
              Secure Authentication
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#f0533a]" />
              End-to-End Security
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#f0533a]" />
              Private Dashboard
            </div>

          </div>

        </div>

        <div>

          <p className="font-bold text-[#f0533a]">
            CREATED BY RAJAT CHITRANSH
          </p>

          <p className="mt-2 text-sm text-gray-500">
            © 2026 Rajat Chitransh
          </p>

        </div>

      </div>

      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">

        <div className="w-full max-w-[470px]">

          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 font-bold hover:text-[#f0533a]"
          >

            <ArrowLeft size={18} />

            Back to home

          </Link>

          <p className="font-bold tracking-[0.15em] text-[#f0533a]">

            CREATE ACCOUNT

          </p>

          <h2 className="mt-4 text-4xl font-black">

            Start Secure Sharing

          </h2>

          <p className="mt-3 text-gray-400">

            Create your SFS account.

          </p>

          <form
  onSubmit={handleSubmit}
  className="mt-10"
>
                      <label className="font-bold">
              Full Name
            </label>

            <div className="mt-3 flex items-center rounded-xl border border-white/15 bg-[#202630] px-4">

              <User size={20} className="text-gray-500" />

              <input
                type="text"
                name="name"
                placeholder="Rajat Chitransh"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-4 text-white outline-none"
              />

            </div>

            <label className="mt-6 block font-bold">
              Email Address
            </label>

            <div className="mt-3 flex items-center rounded-xl border border-white/15 bg-[#202630] px-4">

              <Mail size={20} className="text-gray-500" />

              <input
                type="email"
                name="email"
                placeholder="rajat@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-4 text-white outline-none"
              />

            </div>

            <label className="mt-6 block font-bold">
              Password
            </label>

            <div className="mt-3 flex items-center rounded-xl border border-white/15 bg-[#202630] px-4">

              <LockKeyhole
                size={20}
                className="text-gray-500"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-4 text-white outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="text-gray-400"
              >

                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}

              </button>

            </div>

            <label className="mt-6 block font-bold">
              Confirm Password
            </label>

            <div className="mt-3 flex items-center rounded-xl border border-white/15 bg-[#202630] px-4">

              <LockKeyhole
                size={20}
                className="text-gray-500"
              />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-4 text-white outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="text-gray-400"
              >

                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}

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
                ? "Creating Account..."
                : "Create Secure Account"}

            </button>

          </form>
          <div className="my-8 flex items-center gap-4">

<div className="h-px flex-1 bg-white/10"></div>

<span className="text-xs text-gray-500">
  SECURE REGISTRATION
</span>

<div className="h-px flex-1 bg-white/10"></div>

</div>

<p className="text-center text-gray-400">

Already have an account?{" "}

<Link
  to="/login"
  className="font-bold text-[#f0533a] hover:underline"
>
  Log in
</Link>

</p>

<div className="mt-10 rounded-xl border border-white/10 bg-[#202630] p-5">

<h3 className="font-bold text-[#f0533a]">
  Why choose SFS?
</h3>

<ul className="mt-4 space-y-3 text-sm text-gray-300">

  <li>
    ✔ Secure JWT Authentication
  </li>

  <li>
    ✔ Encrypted File Sharing
  </li>

  <li>
    ✔ Protected Dashboard
  </li>

  <li>
    ✔ Fast Upload & Download
  </li>

  <li>
    ✔ Built with React + Node + MongoDB
  </li>

</ul>

</div>

<p className="mt-10 text-center text-xs text-gray-600">

Designed & Developed by

</p>

<p className="mt-2 text-center text-sm font-bold text-[#f0533a]">

RAJAT CHITRANSH

</p>

</div>

</div>

</div>
);
}

export default Signup;