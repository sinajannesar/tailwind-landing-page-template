import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password - Simple",
  description: "Page description",
};

export default function ResetPassword() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Reset password</h1>
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
        </div>
        <div className="mt-6">
          <button className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-size-[100%_100%] bg-bottom text-white shadow-sm hover:bg-size-[100%_150%]">
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
}