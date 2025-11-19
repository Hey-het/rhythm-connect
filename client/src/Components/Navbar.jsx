"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="bg-blue-950 shadow px-4 py-4 rounded-t-lg">
      <ul className="flex flex-wrap justify-center gap-6">
        <li>
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-yellow-300 font-semibold"
          >
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link
            href="/Progress"
            className="text-white hover:text-yellow-300 font-semibold"
          >
            Progress
          </Link>
        </li>
        <li>
          <Link
            href="/Gallery"
            className="text-white hover:text-yellow-300 font-semibold"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/Community"
            className="text-white hover:text-yellow-300 font-semibold"
          >
            Community
          </Link>
        </li>
        <li>
          <Link
            href="/Challenges"
            className="text-white hover:text-yellow-300 font-semibold"
          >
            Challenges
          </Link>
        </li>
        <li>
          <Link
            href="/Profile"
            className="text-white hover:text-yellow-300 font-semibold"
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
