import Navbar from "../../components/Navbar";
import SkipLink from "../../components/SkipLink";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
    <SkipLink />
      <Navbar />
      <main id="maincontent" className="font-work-sans"> {children}</main>
    </>
  );
}
