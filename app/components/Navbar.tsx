import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadwo-smfont-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/typescript.webp"
            alt="Nextjs logo"
            width={64}
            height={64}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
