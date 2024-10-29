import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

// is user logged in ?

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadwo-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/typescript.webp"
            alt="Nextjs logo"
            width={64}
            height={64}
          />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/products/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Sign out</button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Sign in</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
