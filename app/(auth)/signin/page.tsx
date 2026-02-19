import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Simple",
  description: "Page description",
};

export default function SignUp() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Create your account</h1>
      </div>

      <form>
        <div className="space-y-4">
         
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="corybarker@email.com"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form-input w-full py-2"
              type="password"
              autoComplete="on"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <button className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-size-[100%_100%] bg-bottom text-white shadow-sm hover:bg-size-[100%_150%]">
            Register
          </button>
          <div className="text-center text-sm italic text-gray-400">Or</div>
          <button className="btn w-full bg-linear-to-t from-gray-900 to-gray-700 bg-size-[100%_100%] bg-bottom text-white shadow-sm hover:bg-size-[100%_150%]">
            Continue with GitHub
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          By signing up, you agree to the{" "}
          <a className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline" href="#">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline" href="#">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </>
  );
}