import { InputLabel } from "@/components/InputLabel";
import { postLogin } from "@/lib/fakestoreApi";

export default function Account() {
  return (
    <main className="">
      <div className="py-28 mx-[6.25dvw] max-w-md md:mx-auto">
        <h1 className="text-center text-xl font-medium text-fill-secondary-dark">Edit Account</h1>

        <div className="flex flex-col gap-10">
          <form action={postLogin} className="flex flex-col mt-7">
            <InputLabel type="text" name="username">
              Username
            </InputLabel>

            <InputLabel type="password" name="password" className="mt-2.5">
              Password
            </InputLabel>

            <button type="submit" className="mt-2.5 bg-fill-primary-dark text-white rounded-xl py-2.5 text-sm cursor-pointer">
              Change
            </button>
          </form>

          <button type="submit" formAction={""} className="bg-red-500 text-white rounded-xl py-2.5 text-sm cursor-pointer">
            Delete Account
          </button>
        </div>
      </div>
    </main>
  );
}
