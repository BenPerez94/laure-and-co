import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 text-center text-white bg-gray-900">
      <div className="container mx-auto">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Laure & Co. Tous droits réservés.
        </p>
        <p className="mt-2 text-xs text-center">
          Conçu avec ❤️ par{" "}
          <Link
            href="https://neblink.fr"
            className="text-xs border-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neblink
          </Link>
        </p>
      </div>
    </footer>
  );
}
