import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div>
        <Logo />
      </div>

      <nav className="flex gap-4">
        <Link href="/singin" className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50">
          Login
        </Link>
        <Link href="/signup" className="btn-sm bg-blue-600 text-white shadow hover:bg-blue-700">
          Register
        </Link>
      </nav>
    </header>
  );
}