import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="text-3xl font-black text-primary-500">
        Welcome to the world of Next.js 15
      </h1>
      <form className="px-10 pt-[100px]">
        <button
          type="submit"
          formAction={async () => {
            "use server";
            await signOut({ redirectTo: ROUTES.SIGN_IN });
          }}
        >
          Log out
        </button>
      </form>
    </>
  );
}
