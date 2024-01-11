import Link from "next/link";

function Footer() {
  return (
    <footer className="flex w-full items-center justify-center p-6 sm:pt-10 md:pt-12 lg:pt-16">
      <div className="text-center text-xs font-extralight xs:text-sm">
        Designed and developed with &#10084; by{" "}
        <Link href="/" scroll={false}>
          Ajoy Kumar Das
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
