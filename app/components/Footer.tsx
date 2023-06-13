import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full flex items-center justify-center p-6">
      <div className="text-xs xs:text-sm font-extralight text-center">
        Designed and developed with &#10084; by{" "}
        <Link href="/" scroll={false}>
          Ajoy Kumar Das
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
