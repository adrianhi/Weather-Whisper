import { useForm } from "react-hook-form";
import { Input } from "@components/global/Input.jsx";
import { useAuth } from "@context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import weatherWhisperLogo from "@assets/images/weatherWhisperLogo.webp";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/loading");
    }
  }, [isAuthenticated]);
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  return (
    <div className="h-screen w-screen p-5 flex items-center justify-center bg-bgClouds bg-cover">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <div className="items-center justify-center mx-auto flex mb-8">
          <img src={weatherWhisperLogo} alt="Weather Whisper Logo" />
        </div>
        <div className="flex flex-col items-center justify-center">
          {registerErrors &&
            registerErrors.map((error, i) => (
              <div className="bg-red-400 p-2 text-white" key={i}>
                {error}
              </div>
            ))}

          <form onSubmit={onSubmit}>
            <Input
              type="text"
              name="username"
              register={register}
              placeholder="Username"
            />
            {errors.username && (
              <p className="ml-10 text-red-600 ">Username is required</p>
            )}
            <Input
              type="email"
              name="email"
              register={register}
              placeholder="Email"
            />
            {errors.username && (
              <p className="ml-10 text-red-600 ">Email is required</p>
            )}
            <Input
              type="password"
              name="password"
              register={register}
              placeholder="Password"
            />
            {errors.username && (
              <p className="ml-10 text-red-600 ">Password is required</p>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-sm w-96 px-4 py-2 mx-auto block"
            >
              Register
            </button>
          </form>
          <p className="mt-4">
            have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
