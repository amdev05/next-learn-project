import { InputLabel } from "@/components/InputLabel";
import { postSignUp } from "@/lib/fakestoreApi";

export default function SignUp() {
  return (
    <main className="">
      <div className="py-28 mx-[6.25dvw] max-w-md md:mx-auto">
        <h1 className="text-center text-xl font-medium text-fill-secondary-dark">Sign up to Fakestore</h1>

        <form action={postSignUp} className="flex flex-col mt-7">
          <InputLabel type="text" name="username">
            Username
          </InputLabel>
          <InputLabel type="email" name="email" className="mt-2.5">
            Email
          </InputLabel>
          <InputLabel type="password" name="password" className="mt-2.5">
            Password
          </InputLabel>

          <button type="submit" className="mt-10 bg-fill-primary-dark text-white rounded-xl py-2.5 text-sm cursor-pointer">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
