import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import weatherWhisperLogo from "@assets/images/weatherWhisperLogo.webp";
import { Input } from "@components/global/Input.jsx";
import { useAuth } from "@context/AuthContext";
import { useEffect } from "react";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/loading");
    }
  }, [isAuthenticated]);

  return (
    <div className="h-lvh w-screen p-5 flex items-center justify-center bg-bgClouds bg-cover">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <div className="items-center justify-center mx-auto flex mb-8">
          <img src={weatherWhisperLogo} alt="Weather Whisper Logo" />
        </div>
        <div className="flex flex-col items-center justify-center">
          {signinErrors &&
            signinErrors.map((error, i) => (
              <div className="bg-red-400 p-2 text-white mb-4" key={i}>
                {error}
              </div>
            ))}
          <form onSubmit={onSubmit} className="w-full">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <Input
              type="email"
              name="email"
              register={register}
              placeholder="Email"
              className="mb-4"
            />
            {errors.username && (
              <p className="text-red-600 mb-4">Email is required</p>
            )}
            <Input
              type="password"
              name="password"
              register={register}
              placeholder="Password"
              className="mb-4"
            />
            {errors.username && (
              <p className="text-red-600 mb-4">Password is required</p>
            )}

            <button
              type="submit"
              className="bg-blue-500 rounded-md text-white px-4 py-2 w-full"
            >
              Login
            </button>
          </form>
          <p className="mt-4">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
