import { InputLabel } from "@/components/InputLabel";
import { postLogin } from "@/lib/fakestoreApi";

export default function Login() {
  return (
    <main className="">
      <div className="py-28 mx-[6.25dvw] max-w-md md:mx-auto">
        <h1 className="text-center text-xl font-medium text-fill-secondary-dark">Sign in to Fakestore</h1>

        <form action={postLogin} className="flex flex-col mt-7">
          <InputLabel type="text" name="username">
            Username
          </InputLabel>

          <InputLabel type="password" name="password" className="mt-2.5">
            Password
          </InputLabel>

          <button type="submit" className="mt-10 bg-fill-primary-dark text-white rounded-xl py-2.5 text-sm cursor-pointer">
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
